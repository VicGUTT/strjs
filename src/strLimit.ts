/**
 * Limit the number of characters in a string.
 * This function truncates the given string to the specified length.
 *
 * @param {string} value - The string to be truncated
 * @param {number} [limit=100] - The maximum truncated length
 * @param {string} [end='...'] - The string that will be appended to the end of the truncated string
 * @returns {string}
 *
 * @example
 * ```js
 * strLimit("It's a new dawn, it's a new day, it's a new life for me, And I'm feelin' good", 15); // "It's a new dawn..."
 * strLimit("It's a new dawn, it's a new day, it's a new life for me, And I'm feelin' good", 15, ' (...)'); // "It's a new dawn (...)"
 * ```
 */
export default function strLimit(value: string, limit = 100, end = '...'): string {
    return value.length > limit ? value.slice(0, limit) + end : value;
}

/**
 * Notes:
 * - Should probably look more into adding multibyte support ?
 */
