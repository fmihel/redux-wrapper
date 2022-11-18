import { Redux } from 'fmihel-redux-wrapper';

const data = {
    test: {
        msg: 'text',
        delayed: '',
    },
    process: 'idle',


};

export default new Redux(data);
