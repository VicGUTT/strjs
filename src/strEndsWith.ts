/**
 * Determine if a given string ends with a given substring.
 *
 * Performs a case-sensitive check indicating if the haystack
 * ends in any of the needles.
 *
 * @param {string} haystack - The string to search in
 * @param {string | string[]} needles - The substrings to be searched for at the end of haystack
 * @param {number} [length] - If provided, it is used as the length of haystack. Defaults to `haystack.length`
 * @returns {boolean}
 *
 * @example
 * ```js
 * strEndsWith('Get to the choppa', 'choppa'); // true
 * strEndsWith('Get to the choppa', 'Choppa'); // false
 * strEndsWith('Get to the choppa', ['choppa', 'nope']); // true
 * strEndsWith('Get to the choppa', 'choppa', 'Get to the choppa'.length); // true
 * strEndsWith('Get to the choppa', 'choppa', 'Get to the choppa'.length + 1); // true
 * strEndsWith('Get to the choppa', 'choppa', 'Get to the choppa'.length - 1); // false
 * ```
 */
export default function strEndsWith(haystack: string, needles: string | string[], length?: number): boolean {
    needles = Array.isArray(needles) ? needles : [needles];

    for (let index = 0, _length = needles.length; index < _length; index++) {
        const needle = needles[index];

        if (needle && haystack.endsWith(needle, length)) {
            return true;
        }
    }

    return false;
}
