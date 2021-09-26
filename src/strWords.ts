/**
 * Limit the number of words in a string.
 *
 * @param {string} value - The string to be truncated
 * @param {number} [words=100] - The maximum words
 * @param {string} [end='...'] - The string that will be appended to the end of the truncated string
 * @returns {string}
 *
 * @example
 * ```js
 * strWords("It's a new dawn, it's a new day, it's a new life for me, And I'm feelin' good", 4); // "It's a new dawn, ..."
 * strWords("It's a new dawn, it's a new day, it's a new life for me, And I'm feelin' good", 4, ' (...)'); // "It's a new dawn, (...)"
 * ```
 */
export default function strWords(value: string, words = 100, end = '...'): string {
    if (words < 1) {
        // Contrary to Laravel's implementation, prevent `numbers out of order in {} quantifier...` error/warning
        words = value.length || 1;
    }

    const match = (value.match(new RegExp(`^\\s*(?:\\S+\\s*){1,${words}}`, 'u')) || [])[0];

    if (!match || match.length === value.length) {
        return value;
    }

    return match /* .trimEnd() */ + end;
}
