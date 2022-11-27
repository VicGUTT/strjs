/**
 * Convert certain characters that have special significance in HTML to HTML entities.
 *
 * @param {string} value - The string to be converted
 * @returns {string}
 *
 * @example
 * ```js
 * strEscapeHtml('<div>Hey</div>'); // '&lt;div&gt;Hey&lt;/div&gt;'
 * strEscapeHtml('a && b'); // 'a &amp;&amp; b'
 * strEscapeHtml('"foo"'); // '&quot;foo&quot;'
 * ```
 */
export default function strEscapeHtml(value: string): string {
    return _escapeHtml(value);
}

/**
 * @see https://github.com/vuejs/core/blob/5898629d723e82b68e9b17b91bf8b1a8390a3912/packages/shared/src/escapeHtml.ts
 */
const escapeRE = /["'&<>]/;

function _escapeHtml(string: unknown) {
    const str = '' + string;
    const match = escapeRE.exec(str);

    if (!match) {
        return str;
    }

    let html = '';
    let escaped: string;
    let index: number;
    let lastIndex = 0;

    for (index = match.index; index < str.length; index++) {
        switch (str.charCodeAt(index)) {
            case 34: // "
                escaped = '&quot;';
                break;
            case 38: // &
                escaped = '&amp;';
                break;
            case 39: // '
                escaped = '&#39;';
                break;
            case 60: // <
                escaped = '&lt;';
                break;
            case 62: // >
                escaped = '&gt;';
                break;
            default:
                continue;
        }

        if (lastIndex !== index) {
            html += str.slice(lastIndex, index);
        }

        lastIndex = index + 1;
        html += escaped;
    }

    return lastIndex !== index ? html + str.slice(lastIndex, index) : html;
}
