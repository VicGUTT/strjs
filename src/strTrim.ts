import escapeRegExp from './utils/escapeRegExp';

export const STR_TRIM_LEFT = 'left';
export const STR_TRIM_RIGHT = 'right';
export const STR_TRIM_BOTH = 'both';

export const STR_TRIM_CHARS = [' ', '\t', '\r', '\n', '\r\n', '\f', '\v', '\0'];

/**
 * Trim the string of the given characters.
 *
 * @param {string} value - The target string
 * @param {string | string[]} [characters=[' ', '\t', '\r', '\n', '\r\n', '\f', '\v', '\0']] - The characters to be trimmed off
 * @param {'left' | 'right' | 'both'} [side='both'] - The side of a string to be trimmed off
 * @returns {string}
 *
 * @example
 * ```js
 * strTrim(' yolo '); // 'yolo'
 * strTrim('/yolo/', '/'); // 'yolo'
 * ```
 */
export default function strTrim(
    value: string,
    characters: string | string[] = STR_TRIM_CHARS,
    side: string = STR_TRIM_BOTH
): string {
    if (typeof characters === 'string') {
        characters = [characters];
    }

    if (characters.length > 1) {
        /**
         * Say "characters" is equal to "[' ', '_']"
         * -> [...characters, ...characters.reverse()] --> "[' ', '_', '_', ' ']"
         * -> [...characters, ...characters.reverse().slice(1)] --> "[' ', '_', ' ']"
         */
        characters = [...characters, ...characters.reverse().slice(1)];
    }

    return characters.reduce((acc, character) => {
        acc = acc.replace(new RegExp(_regExpStr(character, side), 'g'), '');

        return acc;
    }, value + '');
}

function _regExpStr(character: string, side: string): string {
    switch (side) {
        case STR_TRIM_LEFT:
            return `(^${escapeRegExp(character)}+)`;
        case STR_TRIM_RIGHT:
            return `(${escapeRegExp(character)}+$)`;
        case STR_TRIM_BOTH:
        default:
            return `(^${escapeRegExp(character)}+)|(${escapeRegExp(character)}+$)`;
    }
}
