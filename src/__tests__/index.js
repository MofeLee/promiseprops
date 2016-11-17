import {expect} from 'chai';
import PromiseProps from '../';
const {describe, it} = global;

describe('PromiseProps', () => {
  it('should resolve props', async () => {
    const result = await PromiseProps({
      a: Promise.resolve(1),
      b: Promise.resolve({c: 'c'}),
      d: 'd'
    });
    expect(result).to.deep.equal({
      a: 1,
      b: {c: 'c'},
      d: 'd'
    });
  });
});
