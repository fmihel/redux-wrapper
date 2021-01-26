import redux from '../../redux';
import * as consts from './consts';

const doAction = (msg) => (dispatch) => {
    dispatch({
        type: consts.TEST,
        payload: msg,
    });
};
const action = (msg) => redux.store.dispatch(doAction(msg));
export default action;
