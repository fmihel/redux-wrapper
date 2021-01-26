import { Redux, Storing } from 'fmihel-redux-wrapper';

class MyStoring extends Storing {
    idle(bool) {
        return this.extend({ process: bool ? 'idle' : 'wait' });
    }
}

const init = {
    test: {
        msg: 'text',
        delayed: '',
    },
    process: 'idle',


};

const redux = new Redux(init, new MyStoring(init));

export default redux;
