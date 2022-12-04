import strContains from './strContains.js';

/**
 * Parse a Class[@]method style callback into class and method.
 *
 * @param {string} callback - The string representing a "Class"
 * @param {string | null} [fallback=null] - The string representing a "method"
 * @returns {Array<string | null>}
 *
 * @example
 * ```js
 * strParseCallback('Class@method', 'foo'); // ['Class', 'method']
 * strParseCallback('Class', 'foo'); // ['Class', 'foo']
 * strParseCallback('Class'); // ['Class', null]
 * strParseCallback('@method'); // ['', 'method']
 * strParseCallback('Class@method@hey', 'foo'); // ['Class', 'method']
 * ```
 */
export default function strParseCallback(callback: string, fallback: string | null = null): (string | null)[] {
    return strContains(callback, '@') ? callback.split('@', 2) : [callback, fallback];
}
