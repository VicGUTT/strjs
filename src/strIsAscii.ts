/**
 * Determine if a given string is 7 bit ASCII.
 *
 * @param {string} value - The string being checked
 * @returns {boolean}
 *
 * @example
 * ```js
 * strIsAscii('Gutt'); // true
 * strIsAscii('Gütt'); // false
 * strIsAscii('ü'); // false
 * ```
 */
export default function strIsAscii(value: string): boolean {
    // Using "RegExp Unicode Property Escapes".
    // @see https://github.com/tc39/proposal-regexp-unicode-property-escapes
    return /^[\p{ASCII}]*$/u.test(value);
}
