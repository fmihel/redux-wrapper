import * as consts from './consts';
import redux from '../../redux';

const is = (action) => Object.keys(consts).indexOf(action.type) >= 0;
const reducer = (state, action) => {
    if (action.type === consts.DELAYED) {
        return redux.change(state)
            .idle(false)
            .state;
    }

    if (action.type === consts.DELAYED_OK) {
        console.log(' original ');
        return redux.change(state)
            .idle(true)
            .extend({ test: { delayed: action.payload } })
            .state;
    }

    if (action.type === consts.DELAYED_ERR) {
        return redux.change(state)
            .idle(true)
            .error(action.payload)
            .state;
    }

    return state;
};

export default { is, reducer };
