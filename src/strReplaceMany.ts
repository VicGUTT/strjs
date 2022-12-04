import escapeRegExp from './utils/escapeRegExp.js';

/**
 * Replace all occurrences of the search string with the replacement string.
 *
 * This function is inspired by PHP's "str_replace" function but has some key differences:
 *    - It doesn't throw an error when `replace` is not an array but `search` is
 *    - The 4th parameter is to control the casing but the 5th is to get the replace count
 *    - In order to get the replace count we must pass the function an object with a "value" property
 *
 * @param {string | string[]} search - The value being searched for, otherwise known as the needle
 * @param {string | string[]} replace - The replacement value that replaces found search values
 * @param {string | string[]} subject - The value being searched on, otherwise known as the haystack.
 *                                      If subject is an array, then the search and replace is performed with
 *                                      every entry of subject, and the return value is an array as well.
 * @param {boolean} [caseSensitive=true] - Should the search be case-sensitive
 * @param {{ value: number }} [replacedCount={ value: 0 }] - If passed, the value will be set to the number of replacements performed
 * @returns {string | string[]}
 *
 * @example
 * ```js
 * strReplaceMany('o', '', 'Foobar') // 'Fbar'
 * strReplaceMany(['o', 'a'], '', 'Foobar') // 'Fbr'
 * strReplaceMany('o', ['x', '-'], 'Foobar') // 'Fxxbar'
 * strReplaceMany(['o', 'a'], ['x', '-'], 'Foobar') // 'Fxxb-r'
 * strReplaceMany(['B', ' '], ['#B', ''], 'Black Lives Matter') // '#BlackLivesMatter'
 * strReplaceMany(['B', ' '], ['#B', ''], ['Black Lives Matter']) // ['#BlackLivesMatter']
 * strReplaceMany(['B', ' '], ['#B', ''], ['Black Lives Matter', 'Be Better Bruh']) // ['#BlackLivesMatter', '#Be#Better#Bruh']
 * ```
 */
export default function strReplaceMany(
    search: string | string[],
    replace: string | string[],
    subject: string | string[],
    caseSensitive = true,
    replacedCount: { value: number } = { value: 0 }
): string | string[] {
    if (!search.length || !subject.length) {
        return subject;
    }

    const subjectIsPassedInAsAnArray = Array.isArray(subject);

    const _search = [...(Array.isArray(search) ? search : [search])];
    const _replace = [...(Array.isArray(replace) ? replace : [replace])];
    const _subject = [...(subjectIsPassedInAsAnArray ? subject : [subject])];

    const searchLength = _search.length;
    const subjectLength = _subject.length;

    const regExpFlag = caseSensitive ? 'g' : 'ig';

    const result = [];

    if (replacedCount) {
        replacedCount.value = 0;
    }

    // Search loop
    for (let searchIndex = 0; searchIndex < searchLength; searchIndex++) {
        const searchItem = (_search[searchIndex] ?? '') + '';

        // Subject loop
        for (let subjectIndex = 0; subjectIndex < subjectLength; subjectIndex++) {
            const replaceItem = _replace[searchIndex] ?? _replace[searchIndex - 1];

            if (typeof replaceItem === 'undefined') {
                continue;
            }

            const subjectItem = (_subject[subjectIndex] ?? '') + '';

            if (searchItem === '') {
                result.push(subjectItem);
                continue;
            }

            const escapedSearchItem = escapeRegExp(searchItem);

            _subject[subjectIndex] = subjectItem.replace(new RegExp(escapedSearchItem, regExpFlag), replaceItem);

            result.push(_subject[subjectIndex]);

            if (result.length > _subject.length) {
                result.shift();
            }

            if (replacedCount) {
                replacedCount.value += subjectItem.match(new RegExp(escapedSearchItem, regExpFlag))?.length ?? 0;
            }
        }
    }

    if (subjectIsPassedInAsAnArray) {
        return result;
    }

    if (!_subject.length) {
        return '';
    }

    if (_subject.length === 1) {
        return result.join('');
    }

    return result;
}
