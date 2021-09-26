import strContains from './strContains';

/**
 * Determine if a given string contains all array values.
 *
 * Performs a case-sensitive check indicating if all of the
 * needles are contained in haystack.
 *
 * @param {string} haystack - The string to search in
 * @param {string[]} needles - The substrings to search for in the haystack
 * @returns {boolean}
 *
 * @example
 * ```js
 * strContainsAll('Victor', ['Vic']); // true
 * strContainsAll('Victor', ['Vix']); // false
 * strContainsAll('Victor', ['']); // false
 * strContainsAll('Victor', ['Vic', 'tor']); // true
 * strContainsAll('Victor', ['Vix', 'tor']); // false
 * strContainsAll('Victor', ['Vix', 'torx']); // false
 * ```
 */
export default function strContainsAll(haystack: string, needles: string[]): boolean {
    for (let index = 0, length = needles.length; index < length; index++) {
        if (!strContains(haystack, needles[index])) {
            return false;
        }
    }

    return true;
}
