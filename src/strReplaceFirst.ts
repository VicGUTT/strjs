import escapeRegExp from './utils/escapeRegExp';

/**
 * Replace the first occurrence of a given value in the string.
 *
 * @param {string} search - The value being searched for, otherwise known as the needle
 * @param {string} replace - The replacement value that replaces found search values
 * @param {string} subject - The string being searched on, otherwise known as the haystack
 * @returns {string}
 *
 * @example
 * ```js
 * strReplaceFirst('father', 'dad', 'The father of the father is the grand-father'); // 'The dad of the father is the grand-father'
 * ```
 */
export default function strReplaceFirst(search: string, replace: string, subject: string): string {
    if (search === '') {
        return subject;
    }

    return subject.replace(new RegExp(escapeRegExp(search)), replace);
}
