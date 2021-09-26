import strLimit from '../../src/strLimit';

describe('str:strLimit', () => {
    it('works with non ascii strings', () => {
        expect(strLimit('Laravel is a free, open source PHP web application framework.', 10)).toEqual('Laravel is...');

        const string = 'The PHP framework for web artisans.';

        expect(strLimit(string, 7)).toEqual('The PHP...');
        expect(strLimit(string, 7, '')).toEqual('The PHP');
        expect(strLimit(string, string.length - 1, '')).toEqual('The PHP framework for web artisans');
        expect(strLimit(string, string.length)).toEqual('The PHP framework for web artisans.');
        expect(strLimit(string, string.length + 1)).toEqual('The PHP framework for web artisans.');
        expect(strLimit(string, string.length + 100)).toEqual('The PHP framework for web artisans.');
    });

    it('does NOT work with ascii strings', () => {
        expect(strLimit('这是一段中文', 6)).toEqual('这是一段中文');

        const nonAsciiString = '这是一段中文';

        expect(strLimit(nonAsciiString, 6)).toEqual(nonAsciiString);
        expect(strLimit(nonAsciiString, 6, '')).toEqual(nonAsciiString);
    });

    // it('works with ascii strings', () => {
    //     expect(strLimit('这是一段中文', 6)).toEqual('这是一...');

    //     const nonAsciiString = '这是一段中文';

    //     expect(strLimit(nonAsciiString, 6)).toEqual('这是一...');
    //     expect(strLimit(nonAsciiString, 6, '')).toEqual('这是一');
    // });
});
