import strEndsWith from '../../src/strEndsWith';

describe('str:strEndsWith', () => {
    it('works with non ascii strings', () => {
        expect(strEndsWith('jason', 'on')).toEqual(true);
        expect(strEndsWith('jason', 'jason')).toEqual(true);
        expect(strEndsWith('jason', ['on'])).toEqual(true);
        expect(strEndsWith('jason', ['no', 'on'])).toEqual(true);
        expect(strEndsWith('jason', 'no')).toEqual(false);
        expect(strEndsWith('jason', ['no'])).toEqual(false);
        expect(strEndsWith('0123', '3')).toEqual(true);
        expect(strEndsWith('jason', 'N')).toEqual(false);
        expect(strEndsWith('jason', '')).toEqual(false);
        expect(strEndsWith('', '')).toEqual(false);
        expect(strEndsWith('', '7')).toEqual(false);
        expect(strEndsWith('7', ' 7')).toEqual(false);
        expect(strEndsWith('7a', 'a')).toEqual(true);
        expect(strEndsWith('a7.12', '7.12')).toEqual(true);
        expect(strEndsWith('a7.12', '7.13')).toEqual(false);
        expect(strEndsWith('7.123', '23')).toEqual(true);
        expect(strEndsWith('7.123', '.123')).toEqual(true);
        expect(strEndsWith('7.123', '.122')).toEqual(false);
    });

    it('works with ascii strings', () => {
        expect(strEndsWith('Jönköping', 'öping')).toEqual(true);
        expect(strEndsWith('Malmö', 'mö')).toEqual(true);
        expect(strEndsWith('Jönköping', 'oping')).toEqual(false);
        expect(strEndsWith('Malmö', 'mo')).toEqual(false);
        expect(strEndsWith('你好', '好')).toEqual(true);
        expect(strEndsWith('你好', '你')).toEqual(false);
        expect(strEndsWith('你好', 'a')).toEqual(false);
    });

    it('can set the length from which the search should start', () => {
        expect(strEndsWith('jason', 'n', 7777777)).toEqual(true);
        expect(strEndsWith('jason', 'n', 'jason'.length - 0)).toEqual(true);
        expect(strEndsWith('jason', 'o', 'jason'.length - 1)).toEqual(true);
        expect(strEndsWith('jason', 'n', 'jason'.length - 1)).toEqual(false);
        expect(strEndsWith('jason', 'jas', 'jason'.length - 2)).toEqual(true);
        expect(strEndsWith('jason', 'as', 'jason'.length - 2)).toEqual(true);
        expect(strEndsWith('jason', 's', 'jason'.length - 2)).toEqual(true);
        expect(strEndsWith('jason', 'so', 'jason'.length - 2)).toEqual(false);
        expect(strEndsWith('jason', 'son', 'jason'.length - 2)).toEqual(false);
        expect(strEndsWith('jason', ['son'], 7777777)).toEqual(true);
        expect(strEndsWith('jason', ['son'], 'jason'.length - 0)).toEqual(true);
        expect(strEndsWith('jason', ['aso'], 'jason'.length - 1)).toEqual(true);
        expect(strEndsWith('jason', ['day', 'son'], 7777777)).toEqual(true);
        expect(strEndsWith('jason', ['day', 'son'], 'jason'.length - 0)).toEqual(true);
        expect(strEndsWith('jason', ['day', 'aso'], 'jason'.length - 1)).toEqual(true);

        expect(strEndsWith('Jönköping', 'öping', 7777777)).toEqual(true);
        expect(strEndsWith('Jönköping', 'öping', 'Jönköping'.length - 0)).toEqual(true);
        expect(strEndsWith('Jönköping', 'öping', 'Jönköping'.length - 1)).toEqual(false);
        expect(strEndsWith('Jönköping', 'n', 'Jönköping'.length - 1)).toEqual(true);
        expect(strEndsWith('你好', '好', 7777777)).toEqual(true);
        expect(strEndsWith('你好', '好', '你好'.length - 0)).toEqual(true);
        expect(strEndsWith('你好', '你', '你好'.length - 1)).toEqual(true);
        expect(strEndsWith('你好', '好', '你好'.length - 1)).toEqual(false);
    });

    it('works fine with any falsy value as `needles`', () => {
        // @ts-expect-error shush
        expect(strEndsWith('jason', null)).toEqual(false);
        // @ts-expect-error shush
        expect(strEndsWith('jason', undefined)).toEqual(false);
        // @ts-expect-error shush
        expect(strEndsWith('jason', false)).toEqual(false);
        // @ts-expect-error shush
        expect(strEndsWith('jason', 0)).toEqual(false);
        // @ts-expect-error shush
        expect(strEndsWith('jason', -0)).toEqual(false);
        // @ts-expect-error shush
        expect(strEndsWith('jason', 0n)).toEqual(false);
        // @ts-expect-error shush
        expect(strEndsWith('jason', NaN)).toEqual(false);

        // @ts-expect-error shush
        expect(strEndsWith('jason', [null])).toEqual(false);
        // @ts-expect-error shush
        expect(strEndsWith('jason', [undefined])).toEqual(false);
        // @ts-expect-error shush
        expect(strEndsWith('jason', [false])).toEqual(false);
        // @ts-expect-error shush
        expect(strEndsWith('jason', [0])).toEqual(false);
        // @ts-expect-error shush
        expect(strEndsWith('jason', [-0])).toEqual(false);
        // @ts-expect-error shush
        expect(strEndsWith('jason', [0n])).toEqual(false);
        // @ts-expect-error shush
        expect(strEndsWith('jason', [NaN])).toEqual(false);
    });
});
