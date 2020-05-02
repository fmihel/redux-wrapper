
export default class Reducers {
    constructor(init) {
        this.init = init;
        this.modules = [];
    }


    add(...args) {
        let result;
        args.forEach((module) => {
            if (typeof (module) === 'object') {
                if (Array.isArray(module)) {
                    // this.add(...module);
                } else {
                    try {
                        if (!('reducer' in module) || (typeof module.reducer !== 'function')) {
                            throw Error('reducer func not in module');
                        }

                        let isFunc = (('is' in module) && (typeof module.is === 'function')) ? module.is : false;

                        if (!isFunc) {
                            if (!('consts' in module)) {
                                throw Error('module must have is or consts');
                            }
                            const consts = typeof module.consts === 'object' ? module.consts : { [module.consts]: module.consts };
                            isFunc = (action) => Object.keys(consts).indexOf(action.type) >= 0;
                        }
                        const o = { is: isFunc, reducer: module.reducer };
                        this.modules.push(o);

                        if (!result) {
                            result = o;
                        }
                    } catch (e) {
                        console.error(e, module);
                    }
                }
            } else {
                console.error('arg is not module', module);
            }
        });
        return result;
    }

    handler(store, action) {
        const mod = this.modules.find((m) => m.is(action));
        if (mod) return mod.reducer(store, action);
        console.error(`not define reducer for [${action.type}]. `);

        return store;
    }
}
