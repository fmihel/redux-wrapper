import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Reducers from './reducers';
import Data from './data';

class Redux {
    /**
     *
     * @param {*} init инициализирующие данные для redux
     * @param {*} storing класс реализующий методы обработки структуры в reducer, можно не указывать, тогда будет использоваться предустановленный
     */
    constructor(init) {
        this.init = init;
        this.reducers = new Reducers(init);
        // eslint-disable-next-line default-param-last
        this.store = createStore((store = init, action) => this.reducers.handler(store, action), applyMiddleware(thunk));
        this.data = new Data(init);

        this.actions = {};
    }

    /**
     * одновременное добавление редюсера и действия
     * описание reducerObject и actionObject см в addAction и addReducer
     */
    add(reducerObject, actionObject = undefined) {
        // if (!reducerObject || !actionObject) {
        //    throw Error('both args redux.add must be not null');
        // }
        if (actionObject) {
            this.addAction(actionObject);
        }

        this.addReducer(reducerObject);
    }

    /**
     * добавление редюсера
     * @param {object} объект структуры { is , reducer } is-функция, reducer-ф-ция редюсера
     * is - function(action) - ф-ция возвращает true если action.type соотвествует reducer
     * reducer - function(state,action) - стандартная ф-ция для редюсера
    */
    addReducer(reducerObject) {
        return this.reducers.add(reducerObject);
    }

    /**
     * добавление action действия
     *
     * @param {object} - actionObject = {funcName:action}
     * funcName - имя по которому можно будет вызывать действие используя redux.actions.funcName
     * если имя
     * @return {action} - если действия добавлено много, то вернет первое
    */
    addAction(actionObject) {
        let result;
        const names = Object.keys(actionObject);
        names.forEach((name) => {
            if (name in this.actions) {
                throw Error(`action "${name}" already exists in redux.actions list`);
            }
            this.actions[name] = actionObject[name];
            if (!result) result = actionObject[name];
        });
        return result;
    }

    /** получить текщий объект состояния */
    getState() {
        return this.store.getState();
    }

    /** аналог store.subscribe
     * @param {Function} обработчик куда попадаем после изменения состояния, новое состояние передается в обработчик
     * @returns {Function} функция удаления обработчика
    */
    on(func) {
        const delFunction = this.store.subscribe(() => {
            const state = this.store.getState();
            try {
                func(state);
            } catch (e) {
                console.error(e);
            }
        });
        return delFunction;
    }

    off(delFunction) {
        delFunction();
    }
}

export default {
    Redux,
};
