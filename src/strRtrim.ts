import strTrim, { STR_TRIM_RIGHT, STR_TRIM_CHARS } from './strTrim.js';

/**
 * Trim the right side (end) of a string of the given characters.
 *
 * @param {string} value - The target string
 * @param {string | string[]} [characters=[' ', '\t', '\r', '\n', '\r\n', '\f', '\v', '\0']] - The characters to be trimmed off
 * @returns {string}
 *
 * @example
 * ```js
 * strRtrim('yolo '); // 'yolo'
 * strRtrim('yolo/', '/'); // 'yolo'
 * ```
 */
export default function strRtrim(value: string, characters: string | string[] = STR_TRIM_CHARS): string {
    return strTrim(value, characters, STR_TRIM_RIGHT);
}
