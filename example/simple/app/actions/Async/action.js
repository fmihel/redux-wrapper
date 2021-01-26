import redux from '../../redux';
import * as consts from './consts';

const doAction = (text, error = false) => (dispatch) => {
    dispatch({
        type: consts.DELAYED,
    });

    setTimeout(() => {
        try {
            if (error) throw Error('generate error');

            dispatch({
                type: consts.DELAYED_OK,
                payload: text,
            });
        } catch (e) {
            dispatch({
                type: consts.DELAYED_ERR,
                payload: e,
            });
        }
    }, 3000);
};
const action = (text, error) => redux.store.dispatch(doAction(text, error));
export default action;
