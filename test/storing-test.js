/* eslint-disable no-undef */
import chai from 'chai';
import Storing from '../source/storing';

describe('Storing', () => {
    // -----------------------------------------------------------
    it('extend 1', () => {
        const init = {
            msg: {
                name: 'Mike',
            },
            ui: {
                visible: {
                    dialog: true,
                    shadow: false,
                },
            },
        };
        const storing = new Storing(init);
        const { state } = storing.extend({
            msg: {
                name: 'soma',
            },
        });

        const eq = {
            msg: {
                name: 'soma',
            },
            ui: {
                visible: {
                    dialog: true,
                    shadow: false,
                },
            },
        };

        // console.info('eq', init);
        // console.info('res', state);
        chai.expect(state).to.deep.equal(eq);
    });

    // -----------------------------------------------------------
    it('extend 2', () => {
        const init = {
            msg: {
                name: 'Mike',
            },
            ui: {
                visible: {
                    dialog: true,
                    shadow: false,
                },
            },
        };
        const storing = new Storing(init);
        const { state } = storing.extend({
            ui: {
                visible: { dialog: false },
            },
        });

        const eq = {
            msg: {
                name: 'Mike',
            },
            ui: {
                visible: {
                    dialog: false,
                    shadow: false,
                },
            },
        };

        // console.info('eq', init);
        // console.info('res', state);
        chai.expect(state).to.deep.equal(eq);
    });

    // -----------------------------------------------------------
    it('extend 3', () => {
        const init = {
            msg: {
                name: 'Mike',
            },
            ui: {
                visible: {
                    dialog: true,
                    shadow: false,
                },
            },
        };
        const storing = new Storing(init);
        const { state } = storing.extend({
            ui: {
                add: { forced: 'none' },
            },
        });

        const eq = {
            msg: {
                name: 'Mike',
            },
            ui: {
                visible: {
                    dialog: true,
                    shadow: false,
                },
                add: {
                    forced: 'none',
                },
            },
        };

        // console.info('eq', init);
        // console.info('res', state);
        chai.expect(state).to.deep.equal(eq);
    });

    // -----------------------------------------------------------
    it('extend 4', () => {
        const init = {
            debug: {
                list: {
                    header: 'text',
                    items: {
                        one: 'one',
                        two: 'two',
                    },

                },
            },
        };
        const storing = new Storing(init);
        const { state } = storing.extend({
            debug: {
                list: {
                    items: {
                        three: 'three',
                    },
                },
            },
        });

        const eq = {
            debug: {
                list: {
                    header: 'text',
                    items: {
                        one: 'one',
                        two: 'two',
                        three: 'three',
                    },

                },
            },
        };

        // console.info('eq', init);
        // console.info('res', state);
        chai.expect(state).to.deep.equal(eq);
    });
    // -----------------------------------------------------------
    it('extend 5', () => {
        const init = {
            debug: {
                list: [1, 3, 3, 6, 7],
            },
        };
        const storing = new Storing(init);
        const { state } = storing.extend({
            debug: {
                list: [3, 5, 3],
            },
        });

        const eq = {
            debug: {
                list: [3, 5, 3],
            },
        };

        // console.info('eq', init);
        // console.info('res', state);
        chai.expect(state).to.deep.equal(eq);
    });
});
