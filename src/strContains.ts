/**
 * Determine if a given string contains a given substring.
 *
 * Performs a case-sensitive check indicating if any of the
 * needles are contained in haystack.
 *
 * @param {string} haystack - The string to search in
 * @param {string | string[]} needles - The substring/substrings to search for in the haystack
 * @returns {boolean}
 *
 * @example
 * ```js
 * strContains('Victor', 'Vic'); // true
 * strContains('Victor', 'Vix'); // false
 * strContains('Victor', ''); // false
 * strContains('Victor', ['Vic', 'tor']); // true
 * strContains('Victor', ['Vix', 'tor']); // true
 * strContains('Victor', ['Vix', 'torx']); // false
 * ```
 */
export default function strContains(haystack: string, needles: string | string[]): boolean {
    needles = Array.isArray(needles) ? needles : [needles];

    for (let index = 0, length = needles.length; index < length; index++) {
        const needle = needles[index];

        if (needle !== '' && haystack.includes(needle)) {
            return true;
        }
    }

    return false;
}
