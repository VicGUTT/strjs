/**
 * Append the given values to the string.
 *
 * @param {string} value - The string to append the values on
 * @param {string[]} ...values - The values to be appended to the value
 * @returns {string}
 *
 * @example
 * ```js
 * strAppend('Hello', ' beautiful,', ' awesome,', ' incredible', ' world', '!'); // 'Hello beautiful, awesome, incredible world!'
 * ```
 */
export default function strAppend(value: string, ...values: string[]): string {
    return value + values.join('');
}
