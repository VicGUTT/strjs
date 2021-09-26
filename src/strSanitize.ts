/**
 * "Sanitize" a string.
 * Only allow [a-zA-Z0-9] characters, plus "-" and "_".
 *
 * @param {string} value - The string to be converted
 * @returns {string}
 *
 * @example
 * ```js
 * strSanitize('abc~def#t--123@456à0'); // 'abcdeft--1234560'
 * ```
 */
export default function strSanitize(value: string): string {
    return value.replace(/[^a-zA-Z0-9\-_. ]+/g, '');
}
