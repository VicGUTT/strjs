import strRtrim from '../../src/strRtrim';
import strTrimEnd from '../../src/strTrimEnd';

describe('str:strTrimEnd', () => {
    it('works', () => {
        expect(strTrimEnd).toEqual(strRtrim);
    });
});
