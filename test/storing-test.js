/* eslint-disable no-undef */
import chai from 'chai';
import Storing from '../source/storing';

describe('Storing', () => {
    describe('replace', () => {
        // -----------------------------------------------------------
        it('replace 1', () => {
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
            const { state } = storing.replace({
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
        it('replace 2', () => {
            const init = {
                msg: {
                    name: 'Mike',
                    test: 2,
                },
                ui: {
                    visible: {
                        dialog: true,
                        shadow: false,
                    },
                },
            };
            const storing = new Storing(init);
            const { state } = storing.replace({
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
        it('replace 3', () => {
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
            const { state } = storing.replace('ui', 'visible', 'dialog', 333);

            const eq = {
                msg: {
                    name: 'Mike',
                },
                ui: {
                    visible: {
                        dialog: 333,
                        shadow: false,
                    },
                },
            };

            // console.info('eq', init);
            // console.info('res', state);
            chai.expect(state).to.deep.equal(eq);
        });
        // -----------------------------------------------------------
        it('replace 4', () => {
            const init = {
                msg: {
                    name: 'Mike',
                },
                ui: {
                    visible: {
                        dialog: true,
                        shadow: {
                            tort: { obj: 'like' },
                        },
                    },
                },
            };
            const storing = new Storing(init);
            const send = { brone: '1' };
            const { state } = storing.replace('ui', 'visible', 'shadow', 'tort', send);

            send.brone = 333;
            const eq = {
                msg: {
                    name: 'Mike',
                },
                ui: {
                    visible: {
                        dialog: true,
                        shadow: {
                            tort: { brone: 333 },
                        },
                    },
                },
            };

            // console.info('eq', init);
            console.info('res', state);
            chai.expect(state).to.deep.equal(eq);
        });
        // -----------------------------------------------------------
    });
    describe('extend', () => {
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

    // -----------------------------------------------------------
    describe('error', () => {
        it('error(string)', () => {
            const init = {
                root: {
                    name: 'Mike',
                },
            };
            const storing = new Storing(init);
            const { state } = storing.error('Error string');
            const eq = {
                root: {
                    name: 'Mike',
                },
                error: {
                    message: 'Error string',
                    origin: 'Error string',
                },
            };
            chai.expect(state).to.deep.equal(eq);
        });
        it('error(Error(string))', () => {
            const init = {
                root: {
                    name: 'Mike',
                },
            };
            const storing = new Storing(init);
            const error = Error('message');
            let state;
            try {
                throw error;
            } catch (e) {
                state = storing.error(e).state;
            }


            const eq = {
                root: {
                    name: 'Mike',
                },
                error: {
                    message: 'message',
                    origin: error,
                },
            };
            // console.info(state, eq);
            chai.expect(state).to.deep.equal(eq);
        });
        it('error({toChapter:string})', () => {
            const init = {
                root: {
                    name: 'Mike',
                },
            };
            const storing = new Storing(init);
            const error = { root: 'error' };
            const { state } = storing.error(error);


            const eq = {
                root: {
                    name: 'Mike',
                },
                error: {
                    message: 'error',
                    origin: 'error',
                },
            };
            // console.info(state, eq);
            chai.expect(state).to.deep.equal(eq);
        });
        it('error({toChapter:string) with error prop', () => {
            const init = {
                root: {
                    name: 'Mike',
                    error: {},
                },
            };
            const storing = new Storing(init);
            const error = { root: 'error' };
            const { state } = storing.error(error);


            const eq = {
                root: {
                    name: 'Mike',
                    error: {
                        message: 'error',
                        origin: 'error',
                    },
                },
            };
            // console.info(state, eq);
            chai.expect(state).to.deep.equal(eq);
        });
        it('error({}) empty object, console write warn', () => {
            const init = {
                root: {
                    name: 'Mike',
                },
            };
            const storing = new Storing(init);
            const error = { };
            const { state } = storing.error(error);

            const eq = {
                root: {
                    name: 'Mike',
                },
                error: {
                    message: 'unknown error',
                    origin: 'unknown error',
                },
            };
            // console.info(state, eq);
            chai.expect(state).to.deep.equal(eq);
        });
        it('error({res:0,msg:string})', () => {
            const init = {
                root: {
                    name: 'Mike',
                },
            };
            const storing = new Storing(init);
            const error = { res: 0, msg: 0 };
            const { state } = storing.error(error);


            const eq = {
                root: {
                    name: 'Mike',
                },
                error: {
                    message: 'unknown error',
                    origin: 'unknown error',
                },
            };
            console.info(state, eq);
            chai.expect(state).to.deep.equal(eq);
        });
    });
});
