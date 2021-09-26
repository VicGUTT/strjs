/**
 * Apply the callback's string changes if the given "value" is truthy.
 *
 * @param {boolean | unknown} condition - Determine if the callback should be called
 * @param {unknown} instance - The target value
 * @param {function} callback - The function to be called upon the condition truthyness
 * @param {function} [fallback] - The function to be called upon the condition falsyness
 * @returns {unknown}
 *
 * @example
 * ```js
 * strWhen(true, 'hello', (instance, condition) => {
 *     console.log(instance, condition); // 'hello', true
 * }); // 'hello'
 *
 * strWhen(true, 'hello', (instance, condition) => {
 *     return 'bye';
 * }); // 'bye'
 *
 * str.when(
 *     false,
 *     'hello',
 *     (instance, condition) => {
 *         return 'bye';
 *     },
 *     (instance, condition) => {
 *         return 'from fallback';
 *     }
 * ); // 'from fallback'
 * ```
 */
export default function strWhen<C, I>(
    condition: C,
    instance: I,
    callback: (instance: I, condition: C) => I | unknown,
    fallback?: (instance: I, condition: C) => I | unknown
): I | unknown {
    if (condition) {
        return callback(instance, condition) ?? instance;
    }

    if (fallback) {
        return fallback(instance, condition) ?? instance;
    }

    return instance;
}
