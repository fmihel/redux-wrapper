import * as consts from './Async/consts';
import main from './Async/reducer';
import redux from '../redux';


const reducer = (state, action) => {
    // if (action.type === consts.DELAYED) {
    //    return redux.change(state)
    //        .idle(false)
    //        .state;
    // }

    if (action.type === consts.DELAYED_OK) {
        console.log(' addition ');
        return redux.change(state)
            .extend({ test: { modify: 2 } })
            .state;
    }

    // if (action.type === consts.DELAYED_ERR) {
    //    return redux.change(state)
    //        .idle(true)
    //        .error(action.payload)
    //        .state;
    // }

    return state;
};

redux.add({ ...main, reducer });
