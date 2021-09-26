import strParseCallback from '../../src/strParseCallback';

describe('str:strParseCallback', () => {
    it('works', () => {
        expect(strParseCallback('Class@method', 'foo')).toEqual(['Class', 'method']);
        expect(strParseCallback('Class', 'foo')).toEqual(['Class', 'foo']);
        expect(strParseCallback('Class')).toEqual(['Class', null]);
        expect(strParseCallback('@method')).toEqual(['', 'method']);

        expect(strParseCallback('Class@method@hey', 'foo')).toEqual(['Class', 'method']);
    });
});
