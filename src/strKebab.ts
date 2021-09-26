import strSnake from './strSnake';

/**
 * Convert a string to "kebab-case".
 *
 * @param {string} value - The string to be converted
 * @returns {string}
 *
 * @example
 * ```js
 * strKebab('loLLIPop'); // 'lo-l-l-i-pop'
 * strKebab('Will the real Slim Shady please stand up?'); // 'will-the-real-slim-shady-please-stand-up?'
 * ```
 */
export default function strKebab(value: string): string {
    return strSnake(value, '-');
}
