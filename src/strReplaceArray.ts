/**
 * Replace a given value in the string sequentially with an array.
 *
 * @param {string} search - The value being searched for, otherwise known as the needle
 * @param {string[]} replace - The replacement value that replaces found search values
 * @param {string} subject - The string being searched on, otherwise known as the haystack
 * @returns {string}
 *
 * @example
 * ```js
 * strReplaceArray('?', ['7:00', '15:30'], 'My flight spans from ? to ?'); // 'My flight spans from 7:00 to 15:30'
 * ```
 */
export default function strReplaceArray(search: string, replace: string[], subject: string): string {
    const segments = subject.split(search);

    return segments.reduce((accumulator, current) => {
        return accumulator + (replace.shift() ?? search) + current;
    }, segments.shift() ?? '');
}
