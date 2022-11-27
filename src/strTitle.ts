import strUcwords from './strUcwords';

const CACHE: Record<string, string> = {};

/**
 * Convert the given string to "Title Case".
 *
 * @param {string} value - The string to be converted
 * @returns {string}
 *
 * @example
 * ```js
 * strTitle('loLLIPop'); // 'Lollipop'
 * strTitle('Will the real Slim Shady please stand up?'); // 'Will The Real Slim Shady Please Stand Up?'
 * ```
 */
export default function strTitle(value: string): string {
    if (typeof CACHE[value] !== 'undefined') {
        return CACHE[value];
    }

    return (CACHE[value] = strUcwords(value.toLowerCase()));
}
