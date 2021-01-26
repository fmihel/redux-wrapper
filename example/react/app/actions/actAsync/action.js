import redux from '../../redux';
import * as consts from './consts';

const doAction = (text) => (dispatch) => {
    dispatch({
        type: consts.ACTASYNC,
    });
    setTimeout(() => {
        dispatch({
            type: consts.ACTASYNC_OK,
            payload: text,
        });
    }, 2000);
};
const action = (text) => redux.store.dispatch(doAction(text));
export default action;
