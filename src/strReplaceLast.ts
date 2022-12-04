// import escapeRegExp from '../utils/escapeRegExp.js';

/**
 * Replace the last occurrence of a given value in the string.
 *
 * @param {string} search - The value being searched for, otherwise known as the needle
 * @param {string} replace - The replacement value that replaces found search values
 * @param {string} subject - The string being searched on, otherwise known as the haystack
 * @returns {string}
 *
 * @example
 * ```js
 * strReplaceLast('father', 'dad', 'The father of the father is the grand-father'); // 'The father of the father is the grand-dad'
 * ```
 */
export default function strReplaceLast(search: string, replace: string, subject: string): string {
    if (search === '') {
        return subject;
    }

    // // Won't work if `search` is not exactly a the end.
    // return subject.replace(new RegExp(escapeRegExp(search) + '$'), replace);

    // TODO: Find a better, more performant implementation ?
    // One that wouldn't require temporarily saving the array representation of the
    // subject into memory to only discard it immediately.
    // This is of course only a concern for large datasets.

    const position = subject.lastIndexOf(search);

    if (position === -1) {
        return subject;
    }

    return [
        subject.slice(0, position),
        replace.slice(0, search.length),
        replace.slice(search.length),
        subject.slice(position + search.length),
    ].join('');
}
