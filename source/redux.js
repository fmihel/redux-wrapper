import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Reducers from './reducers';
import Data from './data';
import Storing from './storing';

class Redux {
    constructor(init, storing = undefined) {
        this.init = init;
        this.reducers = new Reducers(init);
        this.store = createStore((store = init, action) => this.reducers.handler(store, action), applyMiddleware(thunk));
        this.data = new Data(init);

        this.private = {
            storing: storing || new Storing(init),
        };
        this.actions = {};
    }

    storing(store) {
        this.private.storing.setStore(store);
        return this.private.storing;
    }

    /**
     * универсальна ф-ция добавления
     * @param {object} o {reducer:obj} || {action:{name1:act1,name2:act2,name3:act3,...}}
     * @return {undefined | action.name1 }
     */
    add(o) {
        try {
            if ('reducer' in o) {
                this.reducers.add(o.reducer);
            }
            if ('action' in o) {
                const keys = Object.keys(o.action);
                let ret = null;
                keys.forEach((name) => {
                    if (name in this.actions) {
                        throw new Error(`action "${name}" already exists in redux.actions list`);
                    }
                    this.actions[name] = o.action[name];
                    if (!ret) ret = o.action[name];
                });
                return ret;
            }
        } catch (e) {
            console.error(e);
        }
        return undefined;
    }
}

export default {
    Redux,
    Storing,
};
