/**
 * Get the portion of a string before the first/last occurrence of a given value,
 * or return the remainder of a string after the first/last occurrence of a given value.
 * The entire string will be returned if the value does not exist within the string.
 *
 * @param {string} subject - The string being searched on, otherwise known as the haystack
 * @param {string} search - The value being searched for, otherwise known as the needle
 * @param {boolean} before - Should we get the portion of a string before or after a given value
 * @param {boolean} firstOccurrence - Should we get the first or the last occurence of the found value
 * @returns {string}
 *
 * @example
 * ```js
 * strPortion('hannah', 'n', true, true); // 'ha' | Same as: `strBefore('hannah', 'n');`
 * strPortion('yvette', 't', true, false); // 'yvet' | Same as: `strBeforeLast('yvette', 't');`
 * strPortion('hannah', 'n', false, true); // 'nah' | Same as: `strAfter('hannah', 'n');`
 * strPortion('yvette', 't', false, false); // 'e' | Same as: `strAfterLast('yvette', 't');`
 * ```
 */
export default function strPortion(subject: string, search: string, before: boolean, firstOccurrence: boolean): string {
    if (search === '') {
        return subject;
    }

    const index = firstOccurrence ? subject.indexOf(search) : subject.lastIndexOf(search);

    if (index === -1) {
        return subject;
    }

    return before ? subject.substring(0, index) : subject.substring(index + search.length);
}
