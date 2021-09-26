import strStartsWith from '../../src/strStartsWith';

describe('str:strStartsWith', () => {
    it('works with non ascii strings', () => {
        expect(strStartsWith('jason', 'jas')).toEqual(true);
        expect(strStartsWith('jason', 'jason')).toEqual(true);
        expect(strStartsWith('jason', ['jas'])).toEqual(true);
        expect(strStartsWith('jason', ['day', 'jas'])).toEqual(true);
        expect(strStartsWith('jason', 'day')).toEqual(false);
        expect(strStartsWith('jason', ['day'])).toEqual(false);
        expect(strStartsWith('0123', '0')).toEqual(true);
        expect(strStartsWith('jason', 'J')).toEqual(false);
        expect(strStartsWith('jason', '')).toEqual(false);
        expect(strStartsWith('', '')).toEqual(false);
        expect(strStartsWith('', '7')).toEqual(false);
        expect(strStartsWith('7', ' 7')).toEqual(false);
        expect(strStartsWith('7a', '7')).toEqual(true);
        expect(strStartsWith('7.12a', '7.12')).toEqual(true);
        expect(strStartsWith('7.12a', '7.13')).toEqual(false);
        expect(strStartsWith('7.123', '7')).toEqual(true);
        expect(strStartsWith('7.123', '7.12')).toEqual(true);
        expect(strStartsWith('7.123', '7.13')).toEqual(false);
    });

    it('works with ascii strings', () => {
        expect(strStartsWith('Jönköping', 'Jö')).toEqual(true);
        expect(strStartsWith('Malmö', 'Malmö')).toEqual(true);
        expect(strStartsWith('Jönköping', 'Jonko')).toEqual(false);
        expect(strStartsWith('Malmö', 'Malmo')).toEqual(false);
        expect(strStartsWith('你好', '你')).toEqual(true);
        expect(strStartsWith('你好', '好')).toEqual(false);
        expect(strStartsWith('你好', 'a')).toEqual(false);
    });

    it('can set the position in which the search should begin', () => {
        expect(strStartsWith('jason', 'j', 0)).toEqual(true);
        expect(strStartsWith('jason', 'a', 1)).toEqual(true);
        expect(strStartsWith('jason', 'j', 1)).toEqual(false);
        expect(strStartsWith('jason', 'son', 2)).toEqual(true);
        expect(strStartsWith('jason', 'ason', 2)).toEqual(false);
        expect(strStartsWith('jason', ['jas'], 0)).toEqual(true);
        expect(strStartsWith('jason', ['aso'], 1)).toEqual(true);
        expect(strStartsWith('jason', ['day', 'jas'], 0)).toEqual(true);
        expect(strStartsWith('jason', ['day', 'aso'], 1)).toEqual(true);

        expect(strStartsWith('Jönköping', 'Jö', 0)).toEqual(true);
        expect(strStartsWith('Jönköping', 'Jö', 1)).toEqual(false);
        expect(strStartsWith('Jönköping', 'ö', 1)).toEqual(true);
        expect(strStartsWith('你好', '你', 0)).toEqual(true);
        expect(strStartsWith('你好', '你', 1)).toEqual(false);
        expect(strStartsWith('你好', '好', 1)).toEqual(true);
    });

    it('works fine with any falsy value as `needles`', () => {
        // @ts-expect-error shush
        expect(strStartsWith('jason', null)).toEqual(false);
        // @ts-expect-error shush
        expect(strStartsWith('jason', undefined)).toEqual(false);
        // @ts-expect-error shush
        expect(strStartsWith('jason', false)).toEqual(false);
        // @ts-expect-error shush
        expect(strStartsWith('jason', 0)).toEqual(false);
        // @ts-expect-error shush
        expect(strStartsWith('jason', -0)).toEqual(false);
        // @ts-expect-error shush
        expect(strStartsWith('jason', 0n)).toEqual(false);
        // @ts-expect-error shush
        expect(strStartsWith('jason', NaN)).toEqual(false);

        // @ts-expect-error shush
        expect(strStartsWith('jason', [null])).toEqual(false);
        // @ts-expect-error shush
        expect(strStartsWith('jason', [undefined])).toEqual(false);
        // @ts-expect-error shush
        expect(strStartsWith('jason', [false])).toEqual(false);
        // @ts-expect-error shush
        expect(strStartsWith('jason', [0])).toEqual(false);
        // @ts-expect-error shush
        expect(strStartsWith('jason', [-0])).toEqual(false);
        // @ts-expect-error shush
        expect(strStartsWith('jason', [0n])).toEqual(false);
        // @ts-expect-error shush
        expect(strStartsWith('jason', [NaN])).toEqual(false);
    });
});
