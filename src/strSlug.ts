import escapeRegExp from './utils/escapeRegExp';

/**
 * Generate a URL friendly "slug" from a given string.
 *
 * @param {string} value - The string to be converted
 * @param {string} [separator='-'] - A string used to separate each word
 * @returns {string}
 *
 * @example
 * ```js
 * strSlug('loL#LI_Pöp'); // 'lolli-pop'
 * strSlug('loL#LI-Pöp', '_'); // 'lolli_pop'
 * strSlug('loL@LI_Pöp'); // 'lol-at-li-pop'
 * strSlug('Will the real Slim Shady please stand up?'); // 'will-the-real-slim-shady-please-stand-up'
 * ```
 */
export default function strSlug(value: string, separator = '-'): string {
    return (
        value
            .toString()
            .toLowerCase()
            .trim()
            .normalize('NFD') // separate accent from letter
            .replace(/[\u00C0-\u017F]/g, '') // remove all separated accents (or : [\u0300-\u036f])
            .replace(/\s+/g, separator) // replace spaces with `separator`
            .replace(/_/g, separator) // replace _ with `separator`
            .replace(/-/g, separator) // replace - with `separator`
            .replace(/@/g, `${separator}at${separator}`) // replace @ with 'at'
            // .replace(/&/g, `${separator}and${separator}`) // replace & with 'and'
            .replace(new RegExp(`[^\\w${_(separator)}]+`, 'g'), '') // remove all non-word chars
            .replace(new RegExp(`${_(separator, ' ')}${_(separator, ' ')}+`, 'g'), separator) // replace multiple `separator` with a single `separator`
            .replace(new RegExp(`^${_(separator)}`, 'g'), '') // Remove leading `separator`
            .replace(new RegExp(`${_(separator)}$`, 'g'), '') // Remove trailing `separator`
    );
}

/**
 * Actual name : escapeSeparator
 */
function _(separator: string, fallback = ''): string {
    return separator.length ? escapeRegExp(separator) : fallback;
}

/**
 * Notes:
 * - Should probably look more into adding ASCII & language support ?
 * - A good & simple introduction to locale/language support : https://github.com/createvibe/slugify.js
 *
 * Inspired by:
 * @see https://gist.github.com/eek/9c4887e80b3ede05c0e39fee4dce3747
 * @see https://gist.github.com/mathewbyrne/1280286
 */
