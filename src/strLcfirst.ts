/**
 * Make a string's first character lowercase.
 *
 * @param {string} value - The target string
 * @returns {string}
 *
 * @example
 * ```js
 * strLcfirst('Victoria'); // 'victoria'
 * ```
 */
export default function strLcfirst(value: string): string {
    // return value.substring(0, 1).toLowerCase() + value.substring(value.length - (value.length - 1));
    return value.charAt(0).toLowerCase() + value.slice(1);
}
