/**
 * Determine if a given string starts with a given substring.
 *
 * Performs a case-sensitive check indicating if the haystack
 * starts in any of the needles.
 *
 * @param {string} haystack - The string to search in
 * @param {string | string[]} needles - The substrings to be searched for at the start of haystack
 * @param {number} [position=0] - The position in haystack at which to begin searching for the needles
 * @returns {boolean}
 *
 * @example
 * ```js
 * strStartsWith('Get to the choppa', 'Get to'); // true
 * strStartsWith('Get to the choppa', 'get to'); // false
 * strStartsWith('Get to the choppa', ['Get to', 'nope']); // true
 * strStartsWith('Get to the choppa', 'Get to', 1); // false
 * ```
 */
export default function strStartsWith(haystack: string, needles: string | string[], position = 0): boolean {
    needles = Array.isArray(needles) ? needles : [needles];

    for (let index = 0, length = needles.length; index < length; index++) {
        const needle: string | null = needles[index];

        if (needle && haystack.startsWith(needle, position)) {
            return true;
        }
    }

    return false;
}
