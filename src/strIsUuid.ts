/**
 * Determine if a given string is a valid UUID.
 *
 * @param {unknown} value - The string being checked
 * @returns {boolean}
 *
 * @example
 * ```js
 * strIsUuid('a0a2a2d2-0b87-4a18-83f2-2529882be2de'); // true
 * strIsUuid('ff6f8cb0-c57da-51e1-9b21-0800200c9a66'); // false
 * ```
 */
export default function strIsUuid(value: unknown): value is string {
    if (typeof value !== 'string') {
        return false;
    }

    return /^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/i.test(value);
}
