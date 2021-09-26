import onWindowsOs from './utils/onWindowsOs';

/**
 * Get the parent directory's path.
 *
 * Given a string containing the path of a file or directory,
 * this function will return the parent directory's path that is
 * **levels** up from the current directory.
 *
 * @param {string} value - A path of a file or directory
 * @param {number} [levels=1] - The number of parent directories to go up _(must be an integer greater than 0)_
 * @param {string | null} [DIRECTORY_SEPARATOR=null] - The directory path separator to use. If null, the function
 *                                                     will attempt to determine if the OS being used is Windows and if true,
 *                                                     will use `\` as a separator, otherwise, it will use `/`
 * @returns {string}
 *
 * @example
 * ```js
 * strDirname('/grand-parent/parent/child'); // '/grand-parent/parent' (on Windows : '\\grand-parent\\parent')
 * strDirname('/grand-parent/parent/child', 1); // '/grand-parent/parent' (on Windows : '\\grand-parent\\parent')
 * strDirname('/grand-parent/parent/child', 2); // '/grand-parent' (on Windows : '\\grand-parent')
 * strDirname('/grand-parent/parent/child', 3); // '/' (on Windows : '\\')
 * strDirname('/grand-parent/parent/child', 4); // '/' (on Windows : '\\')
 * ```
 */
export default function strDirname(value: string, levels = 1, DIRECTORY_SEPARATOR: string | null = null): string {
    const matches = value.match(/\\|\//g);
    const slash = DIRECTORY_SEPARATOR || (onWindowsOs() ? '\\' : '/');

    if (!matches || matches.length <= 1) {
        return value.replace(/\\|\//g, slash);
    }

    // Here, if true, PHP would be throwing "Argument #2 ($levels) must be greater than or equal to 1"
    if (levels < 1) {
        levels = 1;
    }

    /*
     * - Remove "\" or "/" at the end of the string
     * - Split the string by "\" or "/"
     */
    const paths = value.replace(/(\\|\/)$/, '').split(/\\|\//g);

    if (paths.length === 2) {
        return slash;
    }

    if (levels >= matches.length) {
        return slash;
    }

    return paths.slice(0, -Math.abs(levels)).join(slash);
}
