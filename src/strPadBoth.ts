/**
 * Pad both sides of a string with another.
 *
 * This function adds padding to both sides of a string with
 * another string until the final string reaches the desired length.
 *
 * @param {string} value - The string to add padding to
 * @param {number} length - The desired length the final string should reach
 * @param {string} [pad=' '] - The string to pad the current string with
 * @returns {string}
 *
 * @example
 * ```js
 * strPadBoth("Feelin' good", 17); // "  Feelin' good   "
 * strPadBoth("Feelin' good", 17, '*'); // "**Feelin' good***"
 * ```
 */
export default function strPadBoth(value: string, length: number, pad = ' '): string {
    const size = length - value.length;

    return value.padEnd(value.length + Math.ceil(size / 2), pad).padStart(value.length + size, pad);
}
