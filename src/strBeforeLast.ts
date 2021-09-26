import strPortion from './strPortion';

/**
 * Get the portion of a string before the last occurrence of a given value.
 * The entire string will be returned if the value does not exist within the string.
 *
 * @param {string} subject - The string being searched on, otherwise known as the haystack
 * @param {string} search - The value being searched for, otherwise known as the needle
 * @returns {string}
 *
 * @example
 * ```js
 * strBeforeLast('do you no da wae', 'o'); // 'do you n'
 * strBeforeLast('do you no da wae', 'nope'); // 'do you no da wae'
 * ```
 */
export default function strBeforeLast(subject: string, search: string): string {
    return strPortion(subject, search, true, false);
}
