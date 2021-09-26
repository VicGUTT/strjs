import strReplaceMany from './strReplaceMany';

/**
 * Remove any occurrence of the given string in the subject.
 *
 * @param {string | string[]} search - The value being searched for, otherwise known as the needle
 * @param {string} subject - The string being searched on, otherwise known as the haystack
 * @param {boolean} [caseSensitive=true] - Should the search be case-sensitive
 * @returns {string}
 *
 * @example
 * ```js
 * strRemove('e', 'Peter Piper picked a peck of pickled peppers.'); // 'Ptr Pipr pickd a pck of pickld ppprs.'
 * ```
 */
export default function strRemove(search: string | string[], subject: string, caseSensitive = true): string {
    return strReplaceMany(search, '', subject, caseSensitive) as string;
}
