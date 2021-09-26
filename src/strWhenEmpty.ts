/**
 * Execute the given callback if the string is empty.
 *
 * @param {string} value - The value's emptyness to be checked
 * @param {unknown} instance - The target value
 * @param {function} callback - The function to be called when the string has a `length` of 0
 * @returns {unknown}
 *
 * @example
 * ```js
 * strWhenEmpty('', 'hello', (instance) => {
 *     console.log(instance); // 'hello'
 * }); // 'hello'
 *
 * strWhenEmpty('', 'hello', (instance) => {
 *     return 'bye';
 * }); // 'bye'
 * ```
 */
export default function strWhenEmpty<T>(
    value: string,
    instance: T,
    callback: (instance: T) => T | unknown
): T | unknown {
    if (!(value + '').length) {
        return callback(instance) ?? instance;
    }

    return instance;
}
