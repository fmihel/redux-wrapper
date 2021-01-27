import { Redux } from 'fmihel-redux-wrapper';
import { connect } from 'react-redux';
import Storing from './storing';

class MyRedux extends Redux {
    connect(...a) {
        return connect(...a);
    }
}

const init = {
    ui: {
        idle: true,
    },
};

const redux = new MyRedux(init, Storing);

export default redux;
