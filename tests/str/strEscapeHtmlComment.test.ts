import strEscapeHtmlComment from '../../src/strEscapeHtmlComment';

describe('str:strEscapeHtmlComment', () => {
    it('works', () => {
        expect(strEscapeHtmlComment('<!-- -->')).toEqual(' ');
        expect(strEscapeHtmlComment('<!---->')).toEqual('');
        expect(strEscapeHtmlComment('<!- ->')).toEqual('<!- ->');
        expect(strEscapeHtmlComment('<!-->')).toEqual('>');
        expect(strEscapeHtmlComment('<!-- Comment -->')).toEqual(' Comment ');
        expect(strEscapeHtmlComment('<!- Comment ->')).toEqual('<!- Comment ->');
        expect(
            strEscapeHtmlComment('<p>Test paragraph.</p><!-- Comment --> <a href="#fragment">Other text</a>')
        ).toEqual('<p>Test paragraph.</p> Comment  <a href="#fragment">Other text</a>');
    });
});
