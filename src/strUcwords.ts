import escapeRegExp from './utils/escapeRegExp';

export const STR_UCWORDS_CHARS = [' ', '\t', '\r', '\n', '\r\n', '\f', '\v'];

/**
 * Uppercase the first character of each word in a string.
 *
 * @param {string} value - The target string
 * @param {string | string[]} [separators=[' ', '\t', '\r', '\n', '\r\n', '\f', '\v']] - The characters used to separate words
 * @returns {string}
 *
 * @example
 * ```js
 * strUcwords('hello world!'); // 'Hello World!'
 * strUcwords('hello|world!'); // 'Hello|world!'
 * strUcwords('hello|world!', '|'); // 'Hello|World!'
 * strUcwords("mike o'hara"); // "Mike O'hara"
 * strUcwords("mike o'hara", "'"); // "Mike o'Hara"
 * strUcwords("mike o'hara", [' ', "'"]); // "Mike O'Hara"
 * ```
 */
export default function strUcwords(value: string, separators: string | string[] = STR_UCWORDS_CHARS): string {
    if (typeof separators === 'string') {
        separators = [separators];
    }

    if (separators.length === 1 && separators[0] === '') {
        separators = [' '];
    }

    /**
     * @see https://www.freecodecamp.org/news/how-to-capitalize-words-in-javascript
     *
     * -> mySentence.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
     */

    const regExpStr = separators.reduce((acc, separator) => `${acc}|(${escapeRegExp(separator)}+\\w{1})`, '(^\\w{1})');

    return (value + '').replace(new RegExp(regExpStr, 'g'), (letter) => letter.toUpperCase());
}
