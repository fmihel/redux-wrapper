
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
                const name = Object.keys(o)[0];
                if ('error' in this.state[name]) {
                    if (typeof o[name] === 'object') {
                        this.state[name].error = { ...this.state[name].error, message: ('message' in o[name] ? o[name].message : 'error'), origin: o[name] };
                    } else {
                        this.state[name].error = { ...this.state[name].error, message: o[name], origin: o[name] };
                    }
                } else {
                    this.error(o[name]);
                }
            }
        } else {
            this.state.error = { ...this.state.error, message: o, origin: o };
        }

        return this;
    }

    // eslint-disable-next-line no-underscore-dangle
    _assign(owner, from) {
        const t = this;
        const modif = owner;
        const gettype = (o) => {
            const type = typeof (o);
            return ((type === 'object') && (Array.isArray(o))) ? 'array' : type;
        };
        const typeFrom = gettype(from);
        const typeOwner = gettype(owner);

        if ((typeOwner !== 'object') || (typeFrom !== 'object')) { return from; }

        const keys = Object.keys(from);
        // eslint-disable-next-line array-callback-return
        keys.map((key) => {
            if (key in modif) {
                // eslint-disable-next-line no-underscore-dangle
                modif[key] = t._assign(owner[key], from[key]);
            } else { modif[key] = from[key]; }
        });
        return modif;
    }

    assign(fromObject, deep = false) {
        const self = this;
        const { state } = self;
        const keys = Object.keys(fromObject);
        // eslint-disable-next-line array-callback-return
        keys.map((key) => {
            if (deep) {
                // eslint-disable-next-line no-underscore-dangle
                state[key] = self._assign(state[key], fromObject[key]);
            } else {
                state[key] = {
                    ...state[key],
                    ...fromObject[key],
                };
            }
        });
        return this;
    }
}
