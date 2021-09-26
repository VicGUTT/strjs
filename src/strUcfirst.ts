/**
 * Make a string's first character uppercase.
 *
 * @param {string} value - The target string
 * @returns {string}
 *
 * @example
 * ```js
 * strLcfirst('victoria'); // 'Victoria'
 * ```
 */
export default function strUcfirst(value: string): string {
    // return value.substring(0, 1).toUpperCase() + value.substring(value.length - (value.length - 1));
    return value.charAt(0).toUpperCase() + value.slice(1);
}
