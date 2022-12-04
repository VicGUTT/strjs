import { describe, it, expect } from 'vitest';
import strStripHtml from '../../src/strStripHtml.js';

describe('str/strStripHtml', () => {
    it('works', () => {
        expect(strStripHtml('<div>Hey</div>')).toEqual('Hey');
        expect(strStripHtml('<DIV>Hey</dIv>')).toEqual('Hey');
        expect(strStripHtml('<img src="https://cdn.evil.net/abc/123.jpg>')).toEqual('');
        expect(strStripHtml('<img src="https://cdn.evil.net/abc/123.jpg/>')).toEqual('');
        expect(strStripHtml('<img src="https://cdn.evil.net/abc/123.jpg />')).toEqual('');
        expect(strStripHtml('<img src="https://cdn.evil.net/abc/123.jpg      />')).toEqual('');
        expect(strStripHtml('<script src="https://cdn.evil.net/abc/123.min.js?v=123abc"></script>')).toEqual('');
        expect(strStripHtml('<acceptedTag onLoad="javascript:malicious()" />')).toEqual('');
        expect(strStripHtml("<script>evil.ready(function () { evil.hacking.start('now'); })</script>")).toEqual(
            "evil.ready(function () { evil.hacking.start('now'); })"
        );
        expect(strStripHtml('<p><a>')).toEqual('');
        expect(strStripHtml('<b>sample</b> text with <div>tags</div>')).toEqual('sample text with tags');
        expect(strStripHtml('<p>Test paragraph.</p><!-- Comment --> <a href="#fragment">Other text</a>')).toEqual(
            'Test paragraph. Other text'
        );
    });
});
