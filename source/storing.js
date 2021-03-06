
export default class Storing {
    constructor(init) {
        this.state = init;
        return this;
    }

    setState(state) {
        this.state = { ...state };
    }

    /**
     * Включает ошибку в объект
     * если для нее предусмотрен раздел, в противном случае добавляет ошибк
     * в общую внешнюю структруру store.error
     * @param {any}
     * Ex: error('string')  -  store.error.message = 'string
     * Ex: error(Error(...)) - store.error = { message: Error.message,origin:Error)
     * Ex: error({myName: string | Error() })  если store.myName.error определено,
     * то изменит на store.myName.error={message:string|Error.message,origin:string|Error}
     * если store.myName.error не определено, то store.error = { message: string|Error.message,origin:string | Error)
     * @return {this}
    */
    error(o) {
        if (!o || o === {}) {
            this.state.error = { ...this.state.error, message: 'error', origin: o };
        }
        if (typeof o === 'object') {
            if (o instanceof Error) {
                this.state.error = { ...this.state.error, message: o.message, origin: o };
            } else {
                const keys = Object.keys(o);
                try {
                    if (keys.length !== 1) {
                        throw Error('uncknown error struct');
                    }
                    const name = Object.keys(o)[0];

                    if (typeof this.state[name] === 'object' && 'error' in this.state[name]) {
                        if (typeof o[name] === 'object') {
                            this.state[name].error = { ...this.state[name].error, message: ('message' in o[name] ? o[name].message : 'error'), origin: o[name] };
                        } else {
                            this.state[name].error = { ...this.state[name].error, message: o[name], origin: o[name] };
                        }
                    } else {
                        this.error(o[name]);
                    }
                } catch (e) {
                    console.warn(e.message, o);
                    this.error('unknown error');
                }
            }
        } else {
            this.state.error = { ...this.state.error, message: o, origin: o };
        }

        return this;
    }


    _extend(from, owner) {
        const type = Array.isArray(from) ? 'array' : typeof from;

        if (type === 'object') {
            const names = Object.keys(from);
            const to = {};
            names.forEach((name) => {
                if (name in owner) {
                    to[name] = this._extend(from[name], owner[name]);
                } else {
                    to[name] = from[name];
                }
            });
            return {
                ...owner,
                ...to,
            };
        } if (type === 'array') {
            // return [...from];
            return from;
        }

        return from;
    }

    /**
     * изменяет состояние устанавливая в Storing.state его копию
     * @param {object} o - объект, который будет установлен поверх текущего состояния
     * Ex:
     * extend({ui:{ visible:{dialog:true}}})
     * эквивалентно
     * {...state,ui:{...state.ui,visible:{...state.ui.visible,dialog:true}}};
     * @return {this}
    */
    extend(o) {
        const names = Object.keys(o);
        const to = {};
        names.forEach((name) => {
            to[name] = this._extend(o[name], this.state[name]);
        });

        this.state = {
            ...this.state,
            ...to,
        };
        return this;
    }
    /** в отличии от extend перезаписывает значение состояния накладывая (пересекая) их
     * Ex:
     * state = {coin:800,may: {text:100,y:20}}
     * replace({may:{more:100}})
     * result:
     * state = {coin:800,may: {more:100}}
     */
    replace(o){
        const names = Object.keys(o);
        
        names.forEach((name) => {
            this.state[name] = o[name]
        });

        return this;
    }
}
