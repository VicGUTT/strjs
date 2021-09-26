import escapeRegExp from './utils/escapeRegExp';

/**
 * Returns the number of substring occurrences.
 *
 * @param {string} haystack - The string to search in
 * @param {string} needle - The substring to search for
 * @param {number} [offset=0] - The offset where to start counting.
 *                              If the offset is negative, counting starts from the end of the string.
 * @param {number} [length] - The maximum length after the specified offset to search for the substring.
 * @returns {number}
 *
 * @example
 * ```js
 * strSubstrCount('You Only Live Once', 'o') // 1
 * ```
 */
export default function strSubstrCount(haystack: string, needle: string, offset = 0, length?: number): number {
    if (typeof length === 'number' && length < 0) {
        length = haystack.length - length;
    }

    haystack = haystack.substr(offset, length ?? haystack.length);

    return (haystack.match(new RegExp(escapeRegExp(needle), 'g')) || []).length;
}
