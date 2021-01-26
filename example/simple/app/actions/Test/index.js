import redux from '../../redux';
import reducer from './reducer';
import action from './action';

redux.add(reducer, { Test: action });
export default action;
