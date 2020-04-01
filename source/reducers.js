const modules = [];

export default class Reducers {
    constructor(init) {
        this.init = init;
    }

    add(...args) {
        args.forEach((module) => {
            if (typeof (module) === 'object') {
                if (Array.isArray(module)) {
                    // this.add(...module);
                } else if ((('is' in module) && (typeof module.is === 'function')) && (('reducer' in module) && (typeof module.reducer === 'function'))) {
                    modules.push(module);
                }
            } else {
                console.error('arg is not module', module);
            }
        });
    }

    handler(store, action) {
        const mod = modules.find((m) => m.is(action));
        if (mod) return mod.reducer(store, action);
        console.error(`not define reducer for [${action.type}]. `);

        return store;
    }
}
