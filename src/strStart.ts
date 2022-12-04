import escapeRegExp from './utils/escapeRegExp.js';

/**
 * Begin a string with a single instance of a given value.
 *
 * This function adds a single instance of the given value
 * to a string if it does not already start with that value.
 *
 * @param {string} value - The target string
 * @param {string} prefix - The value the target should start with
 * @returns {string}
 *
 * @example
 * ```js
 * strStart('test/string', '/'); // '/test/string'
 * strStart('/test/string', '/'); // '/test/string'
 * strStart('//test/string', '/'); // '/test/string'
 * ```
 */
export default function strStart(value: string, prefix: string): string {
    return prefix + value.replace(new RegExp(`^(?:${escapeRegExp(prefix)})+`, 'u'), '');
}
