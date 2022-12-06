const timesTwo = require('./timesTwo').default;

describe('timesTwo  function', () => {
    it('returns number times two(num)', () => {
        expect(timesTwo(10)).toBe(20);
    });
});
