import { Redux } from 'fmihel-redux-wrapper';
import Storing from './storing';

const init = {
    ui: {
        idle: true,
    },
};

const redux = new Redux(init, new Storing(init));

export default redux;
