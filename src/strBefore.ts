import strPortion from './strPortion';

/**
 * Get the portion of a string before the first occurrence of a given value.
 * The entire string will be returned if the value does not exist within the string.
 *
 * @param {string} subject - The string being searched on, otherwise known as the haystack
 * @param {string} search - The value being searched for, otherwise known as the needle
 * @returns {string}
 *
 * @example
 * ```js
 * strBefore('This is the way', 'the way'); // 'This is '
 * strBefore('This is the way', 'nope'); // 'This is the way'
 * ```
 */
export default function strBefore(subject: string, search: string): string {
    return strPortion(subject, search, true, true);
}
