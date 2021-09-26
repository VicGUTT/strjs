import strStart from '../../src/strStart';

describe('str:strStart', () => {
    it('works', () => {
        expect(strStart('ab', 'bc')).toEqual('bcab');
        expect(strStart('ababbc', 'ab')).toEqual('abbc');
        expect(strStart('ababaabcb', 'ab')).toEqual('abaabcb');

        expect(strStart('test/string', '/')).toEqual('/test/string');
        expect(strStart('/test/string', '/')).toEqual('/test/string');
        expect(strStart('//test/string', '/')).toEqual('/test/string');
    });
});
