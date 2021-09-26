import escapeRegExp from './utils/escapeRegExp';

/**
 * Cap a string with a single instance of a given value.
 *
 * This function adds a single instance of the given value
 * to a string if it does not already end with that value.
 *
 * @param {string} value - The target string
 * @param {string} cap - The value the target should end with
 * @returns {string}
 *
 * @example
 * ```js
 * strFinish('this/string', '/'); // 'this/string/'
 * strFinish('this/string/', '/'); // 'this/string/'
 * strFinish('this/string////', '/'); // 'this/string/'
 * ```
 */
export default function strFinish(value: string, cap: string): string {
    return value.replace(new RegExp(`(?:${escapeRegExp(cap)})+$`, 'u'), '') + cap;
}
