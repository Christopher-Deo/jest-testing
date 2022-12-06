const timesTwo = require('./timesTwo');

describe('timesTwo  function', () => {
    it('returns number times two(num)', () => {
        expect(timesTwo(10)).toEqual(20);
    });
});
