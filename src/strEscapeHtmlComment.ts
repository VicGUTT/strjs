/**
 * Strip out HTML comment symbols.
 *
 * @param {string} value - The string to be stripped out
 * @returns {string}
 *
 * @example
 * ```js
 * strEscapeHtmlComment('<!-- -->'); // ' '
 * strEscapeHtmlComment('<!- ->'); // '<!- ->'
 * strEscapeHtmlComment('<!-->'); // '>'
 * strEscapeHtmlComment('<!-- Comment -->'); // 'Comment'
 * strEscapeHtmlComment('<!- Comment ->'); // '<!- Comment ->'
 * ```
 */
export default function strEscapeHtmlComment(value: string): string {
    return _escapeHtmlComment(value);
}

/**
 * @see https://github.com/vuejs/vue-next/blob/4fe4de0a49ffc2461b0394e74674af38ff5e2a20/packages/shared/src/escapeHtml.ts
 */

// https://www.w3.org/TR/html52/syntax.html#comments
const commentStripRE = /^-?>|<!--|-->|--!>|<!-$/g;

function _escapeHtmlComment(src: string): string {
    return src.replace(commentStripRE, '');
}
