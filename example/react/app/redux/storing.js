import { Storing } from 'fmihel-redux-wrapper';

export default class MyStoring extends Storing {
    idle(bool) {
        return this.extend({ ui: { idle: bool } });
    }
}
