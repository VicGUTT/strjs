import strLcfirst from './strLcfirst.js';
import strStudly from './strStudly.js';

const CACHE: Record<string, string> = {};

/**
 * Convert a value to "camelCase".
 *
 * @param {string} value - The string to be converted
 * @returns {string}
 *
 * @example
 * ```js
 * strCamel('loLL-i_pop'); // 'loLLIPop'
 * strCamel('Will the real Slim Shady please stand up?'); // 'willTheRealSlimShadyPleaseStandUp?'
 * ```
 */
export default function strCamel(value: string): string {
    if (typeof CACHE[value] !== 'undefined') {
        return CACHE[value];
    }

    return (CACHE[value] = strLcfirst(strStudly(value)));
}
