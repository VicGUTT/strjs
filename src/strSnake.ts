import strUcwords from './strUcwords';

const CACHE: Record<string, Record<string, string>> = {};

/**
 * Convert a string to "snake_case".
 *
 * @param {string} value - The string to be converted
 * @param {string} [delimiter='-'] - A string used to separate each word
 * @returns {string}
 *
 * @example
 * ```js
 * strSnake('loLL-i_pop'); // 'lo_l_l-i_pop'
 * strSnake('loLL-i_pop', '-'); // 'lo-l-l-i_pop'
 * strSnake('Will the real Slim Shady please stand up?'); // 'will_the_real_slim_shady_please_stand_up?'
 * ```
 */
export default function strSnake(value: string, delimiter = '_'): string {
    if (typeof CACHE[value]?.[delimiter] !== 'undefined') {
        return CACHE[value][delimiter];
    }

    value = strUcwords(value).replace(/\s+/gu, '');
    value = value.replace(/(.)(?=[A-Z])/gu, '$1' + delimiter).toLowerCase();

    CACHE[value] = {
        ...(CACHE[value] || {}),
        [delimiter]: value,
    };

    return CACHE[value][delimiter];
}
