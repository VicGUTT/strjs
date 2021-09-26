import strPortion from './strPortion';

/**
 * Return the remainder of a string after the first occurrence of a given value.
 * The entire string will be returned if the value does not exist within the string.
 *
 * @param {string} subject - The string being searched on, otherwise known as the haystack
 * @param {string} search - The value being searched for, otherwise known as the needle
 * @returns {string}
 *
 * @example
 * ```js
 * strAfter('This is the way', 'This is'); // ' the way'
 * strAfter('This is the way', 'nope'); // 'This is the way'
 * ```
 */
export default function strAfter(subject: string, search: string): string {
    return strPortion(subject, search, false, true);
}

// Alternative way !

// export default function strAfter(subject: string, search: string): string {
//     if (search === '') {
//         return subject;
//     }

//     const parts = subject.split(search);

//     if (parts.length < 2) {
//         return subject;
//     }

//     return parts.splice(1).join(search);
// }
