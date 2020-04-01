/* eslint-disable no-undef */
import chai from 'chai';
import Data from '../source/data';

describe('Data', () => {
    it('attach', () => {
        let init = {msg:{name:'Mike'}};
        let data = new Data(init);
        data.attach({
            stone:{
                krom:23
            }
        });
        //console.info('data.init', data.init);
        chai.expect(data.init).to.deep.equal({msg:{name:'Mike'},stone:{krom:23}});
    });
    it('attach with Exception', (done) => {
        chai.expect(() => {
            let init = {msg:{name:'Mike'}};
            let data = new Data(init);
            data.attach({
                msg:{
                    stone:'Soma'
                }
            });
                
        }).to.throw();
        done();
    });

});
