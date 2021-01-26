import redux from '../../redux';
import * as consts from './consts';

const is = (action) => Object.keys(consts).indexOf(action.type) >= 0;
const reducer = (state, action) => {
    if (action.type === consts.ACTASYNC) {
        return redux.change(state)
            .idle(false)
            .state;
    }

    if (action.type === consts.ACTASYNC_OK) {
        return redux.change(state)
            .idle(true)
            .state;
    }

    if (action.type === consts.ACTASYNC_ERR) {
        return redux.change(state)
            .idle(true)
            .error(action.payload)
            .state;
    }

    return state;
};

export default { is, reducer };
