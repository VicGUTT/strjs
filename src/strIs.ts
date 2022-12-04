import escapeRegExp from './utils/escapeRegExp.js';

/**
 * Determine if a given string matches a given pattern.
 *
 * This function determines if a given string matches a given pattern.
 * Asterisks may be used as wildcard values.
 *
 * @param {string | string[]} pattern - The pattern to be matched against
 * @param {string} value - The value the match against the pattern
 * @returns {boolean}
 *
 * @example
 * ```js
 * strIs('foo/*', 'foo/bar/baz'); // true
 * strIs('*bar*', 'foo/bar/baz'); // true
 * strIs('*Bar*', 'foo/bar/baz'); // false
 * strIs('foo', 'foo/bar/baz'); // false
 * strIs(['foo/*', 'nope'], 'foo/bar/baz'); // true
 * ```
 */
export default function strIs(pattern: string | string[], value: string): boolean {
    const patterns = Array.isArray(pattern) ? pattern : [pattern];

    if (!patterns.length) {
        return false;
    }

    for (let index = 0, length = patterns.length; index < length; index++) {
        let _pattern: string = patterns[index];

        // If the given value is an exact match we can of course return true right
        // from the beginning. Otherwise, we will translate asterisks and do an
        // actual pattern match against the two strings to see if they match.
        if (_pattern === value) {
            return true;
        }

        _pattern = escapeRegExp(_pattern);

        // Asterisks are translated into zero-or-more regular expression wildcards
        // to make it convenient to check if the strings starts with the given
        // pattern such as "library/*", making any string check convenient.
        _pattern = _pattern.replace(/\\\*/g, '.*');

        if (new RegExp(`^${_pattern}$`, 'u').test(value)) {
            return true;
        }
    }

    return false;
}
