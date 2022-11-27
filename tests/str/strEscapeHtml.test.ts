import { describe, it, expect } from 'vitest';
import strEscapeHtml from '../../src/strEscapeHtml';

describe('str/strEscapeHtml', () => {
    it('works', () => {
        expect(strEscapeHtml('<div>Hey</div>')).toEqual('&lt;div&gt;Hey&lt;/div&gt;');
        expect(strEscapeHtml('<DIV>Hey</dIv>')).toEqual('&lt;DIV&gt;Hey&lt;/dIv&gt;');
        expect(strEscapeHtml('<img src="https://cdn.evil.net/abc/123.jpg>')).toEqual(
            '&lt;img src=&quot;https://cdn.evil.net/abc/123.jpg&gt;'
        );
        expect(strEscapeHtml('<img src="https://cdn.evil.net/abc/123.jpg/>')).toEqual(
            '&lt;img src=&quot;https://cdn.evil.net/abc/123.jpg/&gt;'
        );
        expect(strEscapeHtml('<img src="https://cdn.evil.net/abc/123.jpg />')).toEqual(
            '&lt;img src=&quot;https://cdn.evil.net/abc/123.jpg /&gt;'
        );
        expect(strEscapeHtml('<img src="https://cdn.evil.net/abc/123.jpg      />')).toEqual(
            '&lt;img src=&quot;https://cdn.evil.net/abc/123.jpg      /&gt;'
        );
        expect(strEscapeHtml('<script src="https://cdn.evil.net/abc/123.min.js?v=123abc"></script>')).toEqual(
            '&lt;script src=&quot;https://cdn.evil.net/abc/123.min.js?v=123abc&quot;&gt;&lt;/script&gt;'
        );
        expect(strEscapeHtml('<acceptedTag onLoad="javascript:malicious()" />')).toEqual(
            '&lt;acceptedTag onLoad=&quot;javascript:malicious()&quot; /&gt;'
        );
        expect(strEscapeHtml("<script>evil.ready(function () { evil.hacking.start('now'); })</script>")).toEqual(
            '&lt;script&gt;evil.ready(function () { evil.hacking.start(&#39;now&#39;); })&lt;/script&gt;'
        );
        expect(strEscapeHtml('<p><a>')).toEqual('&lt;p&gt;&lt;a&gt;');
        expect(strEscapeHtml('<b>sample</b> text with <div>tags</div>')).toEqual(
            '&lt;b&gt;sample&lt;/b&gt; text with &lt;div&gt;tags&lt;/div&gt;'
        );
        expect(strEscapeHtml('<p>Test paragraph.</p><!-- Comment --> <a href="#fragment">Other text</a>')).toEqual(
            '&lt;p&gt;Test paragraph.&lt;/p&gt;&lt;!-- Comment --&gt; &lt;a href=&quot;#fragment&quot;&gt;Other text&lt;/a&gt;'
        );

        expect(strEscapeHtml('foo')).toEqual('foo');
        expect(strEscapeHtml('a && b')).toEqual('a &amp;&amp; b');
        expect(strEscapeHtml('"foo"')).toEqual('&quot;foo&quot;');
        expect(strEscapeHtml("'bar'")).toEqual('&#39;bar&#39;');
        expect(strEscapeHtml('<div>')).toEqual('&lt;div&gt;');
    });
});
