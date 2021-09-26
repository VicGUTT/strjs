/**
 * Prepend the given values to the string.
 *
 * @param {string} value - The string to prepend the values on
 * @param {string[]} ...values - The values to be prepended to the value
 * @returns {string}
 *
 * @example
 * ```js
 * strPrepend('world!', 'Hello', ' beautiful,', ' awesome,', ' incredible '); // 'Hello beautiful, awesome, incredible world!'
 * ```
 */
export default function strPrepend(value: string, ...values: string[]): string {
    return values.join('') + value;
}
