/**
 * Strip HTML tags from a string.
 *
 * @param {string} value - The value to be stripped out
 * @returns {string}
 *
 * @example
 * ```js
 * strStripHtml('<div>Hey</div>') // 'Hey'
 * strStripHtml('<b>sample</b> text with <div>tags</div>') // 'sample text with tags'
 * ```
 */
export default function strStripHtml(value: string): string {
    return value.replace(/(<([^>]+)>)/gi, '');
}

/**
 * Strip HTML tags from a string.
 *
 * @see https://css-tricks.com/snippets/javascript/strip-html-tags-in-javascript
 * @see https://stackoverflow.com/a/5002161
 */
