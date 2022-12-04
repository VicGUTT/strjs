import strTrim, { STR_TRIM_LEFT, STR_TRIM_CHARS } from './strTrim.js';

/**
 * Trim the left side (start) of a string of the given characters.
 *
 * @param {string} value - The target string
 * @param {string | string[]} [characters=[' ', '\t', '\r', '\n', '\r\n', '\f', '\v', '\0']] - The characters to be trimmed off
 * @returns {string}
 *
 * @example
 * ```js
 * strLtrim(' yolo'); // 'yolo'
 * strLtrim('/yolo', '/'); // 'yolo'
 * ```
 */
export default function strLtrim(value: string, characters: string | string[] = STR_TRIM_CHARS): string {
    return strTrim(value, characters, STR_TRIM_LEFT);
}
