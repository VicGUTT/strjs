import strReplaceMany from './strReplaceMany';
import strUcwords from './strUcwords';

const CACHE: Record<string, string> = {};

/**
 * Convert a value to "StudlyCase".
 *
 * @param {string} value - The string to be converted
 * @returns {string}
 *
 * @example
 * ```js
 * strStudly('loLL-i_pop'); // 'LoLLIPop'
 * strStudly('Will the real Slim Shady please stand up?'); // 'WillTheRealSlimShadyPleaseStandUp?'
 * ```
 */
export default function strStudly(value: string): string {
    const key = value;

    if (typeof CACHE[key] !== 'undefined') {
        return CACHE[key];
    }

    value = strUcwords(strReplaceMany(['-', '_'], ' ', value) as string);

    return (CACHE[key] = strReplaceMany(' ', '', value) as string);
}
