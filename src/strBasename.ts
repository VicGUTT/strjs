/**
 * Get the trailing name component of the path.
 *
 * @param {string} value - The path on which we want to get the trailing name component
 * @param {string} [suffix=''] - A "suffix", if provided, will be removed from the trailing name component
 * @returns {string}
 *
 * @example
 * ```js
 * strBasename('/home/hello/dir/otherDir/lastDir/filename.txt'); // 'filename.txt'
 * strBasename('/home/hello/dir/otherDir/lastDir/filename.txt', '.txt'); // 'filename'
 * ```
 */
export default function strBasename(value: string, suffix = ''): string {
    /*
     * - Remove "\" or "/" at the end of the string
     * - Split the string by "\" or "/"
     * - Get the last item in the array
     * - If the result is undefined or null, return ''
     * - Remove `suffix` from the result
     */
    return (
        value
            .replace(/(\\|\/)$/, '')
            .split(/\\|\//g)
            .pop() ?? ''
    ).replace(suffix, '');
}
