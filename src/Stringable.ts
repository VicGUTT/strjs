// import { macroable, polyfill } from '@vicgutt/macrojs';
// import { PolyfillObject } from '@vicgutt/macrojs/types';
import strAfter from './strAfter.js';
import strAfterLast from './strAfterLast.js';
import strAppend from './strAppend.js';
import strBasename from './strBasename.js';
import strBefore from './strBefore.js';
import strBeforeLast from './strBeforeLast.js';
import strBetween from './strBetween.js';
import strCamel from './strCamel.js';
import strContains from './strContains.js';
import strContainsAll from './strContainsAll.js';
import strDirname from './strDirname.js';
import strEndsWith from './strEndsWith.js';
import strEscapeHtml from './strEscapeHtml.js';
import strEscapeHtmlComment from './strEscapeHtmlComment.js';
import strFinish from './strFinish.js';
import strIs from './strIs.js';
import strIsAscii from './strIsAscii.js';
import strIsUuid from './strIsUuid.js';
import strKebab from './strKebab.js';
import strLcfirst from './strLcfirst.js';
import strLimit from './strLimit.js';
import strLtrim from './strLtrim.js';
import strPadBoth from './strPadBoth.js';
import strParseCallback from './strParseCallback.js';
import strPortion from './strPortion.js';
import strPrepend from './strPrepend.js';
import strRandom from './strRandom.js';
import strRemove from './strRemove.js';
import strReplaceArray from './strReplaceArray.js';
import strReplaceFirst from './strReplaceFirst.js';
import strReplaceLast from './strReplaceLast.js';
import strReplaceMany from './strReplaceMany.js';
import strRtrim from './strRtrim.js';
import strSanitize from './strSanitize.js';
import strSlug from './strSlug.js';
import strSnake from './strSnake.js';
import strStart from './strStart.js';
import strStartsWith from './strStartsWith.js';
import strStripHtml from './strStripHtml.js';
import strStudly from './strStudly.js';
import strSubstrCount from './strSubstrCount.js';
import strTitle from './strTitle.js';
import strTrim, { STR_TRIM_CHARS } from './strTrim.js';
import strUcfirst from './strUcfirst.js';
import strUcwords, { STR_UCWORDS_CHARS } from './strUcwords.js';
import strWhen from './strWhen.js';
import strWhenEmpty from './strWhenEmpty.js';
import strWords from './strWords.js';

class Stringable extends String {
    constructor(value = '') {
        super(value);
    }

    /* `str*` methods mapping
    ------------------------------------------------*/

    /**
     * Return the remainder of a string after the first occurrence of a given value.
     * The entire string will be returned if the value does not exist within the string.
     */
    after(search: string): Stringable {
        return new Stringable(strAfter(this.raw(), search));
    }

    /**
     * Return the remainder of a string after the last occurrence of a given value.
     * The entire string will be returned if the value does not exist within the string.
     */
    afterLast(search: string): Stringable {
        return new Stringable(strAfterLast(this.raw(), search));
    }

    /**
     * Append the given values to the string.
     */
    append(...values: string[]): Stringable {
        return new Stringable(strAppend(this.raw(), ...values));
    }

    /**
     * Get the trailing name component of the path.
     */
    basename(suffix = ''): Stringable {
        return new Stringable(strBasename(this.raw(), suffix));
    }

    /**
     * Get the portion of a string before the first occurrence of a given value.
     * The entire string will be returned if the value does not exist within the string.
     */
    before(search: string): Stringable {
        return new Stringable(strBefore(this.raw(), search));
    }

    /**
     * Get the portion of a string before the last occurrence of a given value.
     * The entire string will be returned if the value does not exist within the string.
     */
    beforeLast(search: string): Stringable {
        return new Stringable(strBeforeLast(this.raw(), search));
    }

    /**
     * Get the portion of a string between two given values.
     */
    between(from: string, to: string): Stringable {
        return new Stringable(strBetween(this.raw(), from, to));
    }

    /**
     * Convert a value to "camelCase".
     */
    camel(): Stringable {
        return new Stringable(strCamel(this.raw()));
    }

    /**
     * Determine if a given string contains a given substring.
     *
     * Performs a case-sensitive check indicating if any of the
     * needles are contained in haystack.
     */
    contains(needles: string | string[]): boolean {
        return strContains(this.raw(), needles);
    }

    /**
     * Determine if a given string contains all array values.
     *
     * Performs a case-sensitive check indicating if all of the
     * needles are contained in haystack.
     */
    containsAll(needles: string[]): boolean {
        return strContainsAll(this.raw(), needles);
    }

    /**
     * Get the parent directory's path.
     *
     * Given a string containing the path of a file or directory,
     * this method will return the parent directory's path that is
     * **levels** up from the current directory.
     */
    dirname(levels = 1, DIRECTORY_SEPARATOR: string | null = null): Stringable {
        return new Stringable(strDirname(this.raw(), levels, DIRECTORY_SEPARATOR));
    }

    /**
     * Convert certain characters that have special significance in HTML to HTML entities.
     */
    escapeHtml(): Stringable {
        return new Stringable(strEscapeHtml(this.raw()));
    }

    /**
     * Strip out HTML comment symbols.
     */
    escapeHtmlComment(): Stringable {
        return new Stringable(strEscapeHtmlComment(this.raw()));
    }

    /**
     * Cap a string with a single instance of a given value.
     *
     * This method adds a single instance of the given value
     * to a string if it does not already end with that value.
     */
    finish(cap: string): Stringable {
        return new Stringable(strFinish(this.raw(), cap));
    }

    /**
     * Determine if a given string matches a given pattern.
     *
     * This method determines if a given string matches a given pattern.
     * Asterisks may be used as wildcard values.
     */
    is(pattern: string | string[]): boolean {
        return strIs(pattern, this.raw());
    }

    /**
     * Determine if a given string is 7 bit ASCII.
     */
    isAscii(): boolean {
        return strIsAscii(this.raw());
    }

    /**
     * Determine if a given string is a valid UUID.
     */
    isUuid(): boolean {
        return strIsUuid(this.raw());
    }

    /**
     * Convert a string to "kebab-case".
     */
    kebab(): Stringable {
        return new Stringable(strKebab(this.raw()));
    }

    /**
     * Make a string's first character lowercase.
     */
    lcfirst(): Stringable {
        return new Stringable(strLcfirst(this.raw()));
    }

    /**
     * Limit the number of characters in a string.
     * This method truncates the given string to the specified length.
     */
    limit(limit = 100, end = '...'): Stringable {
        return new Stringable(strLimit(this.raw(), limit, end));
    }

    /**
     * Make a string's first character lowercase.
     *
     * @alias lcfirst This method is an alias of the `lcfirst` method.
     */
    lowerFirst(): Stringable {
        return this.lcfirst();
    }

    /**
     * Trim the left side (start) of a string of the given characters.
     */
    ltrim(characters: string | string[] = STR_TRIM_CHARS): Stringable {
        return new Stringable(strLtrim(this.raw(), characters));
    }

    /**
     * Pad both sides of a string with another.
     *
     * This method adds padding to both sides of a string with
     * another string until the final string reaches the desired length.
     */
    padBoth(length: number, pad = ' '): Stringable {
        return new Stringable(strPadBoth(this.raw(), length, pad));
    }

    /**
     * Pad the left side (start) of the string with another.
     *
     * @alias padStart This method is an alias of the `padStart` method.
     */
    padLeft(length: number, pad = ' '): Stringable {
        return this.padStart(length, pad);
    }

    /**
     * Pad the right side (end) of the string with another.
     *
     * @alias padEnd This method is an alias of the `padEnd` method.
     */
    padRight(length: number, pad = ' '): Stringable {
        return this.padEnd(length, pad);
    }

    /**
     * Parse a Class[@]method style callback into class and method.
     */
    parseCallback(fallback: string | null = null): (string | null)[] {
        return strParseCallback(this.raw(), fallback);
    }

    /**
     * Get the portion of a string before the first/last occurrence of a given value,
     * or return the remainder of a string after the first/last occurrence of a given value.
     * The entire string will be returned if the value does not exist within the string.
     */
    portion(search: string, before: boolean, firstOccurrence: boolean): Stringable {
        return new Stringable(strPortion(this.raw(), search, before, firstOccurrence));
    }

    /**
     * Prepend the given values to the string.
     */
    prepend(...values: string[]): Stringable {
        return new Stringable(strPrepend(this.raw(), ...values));
    }

    /**
     * Generates a "pseudo" random string of the specified length.
     * Note: This implementation uses `Math.random` under the hood.
     */
    random(length = 16): string {
        return strRandom(length);
    }

    /**
     * Remove any occurrence of the given string in the subject.
     */
    remove(search: string | string[], caseSensitive = true): Stringable {
        return new Stringable(strRemove(search, this.raw(), caseSensitive));
    }

    /**
     * Replace a given value in the string sequentially with an array.
     */
    replaceArray(search: string, replace: string[]): Stringable {
        return new Stringable(strReplaceArray(search, replace, this.raw()));
    }

    /**
     * Replace the first occurrence of a given value in the string.
     */
    replaceFirst(search: string, replace: string): Stringable {
        return new Stringable(strReplaceFirst(search, replace, this.raw()));
    }

    /**
     * Replace the last occurrence of a given value in the string.
     */
    replaceLast(search: string, replace: string): Stringable {
        return new Stringable(strReplaceLast(search, replace, this.raw()));
    }

    /**
     * Replace all occurrences of the search string with the replacement string.
     *
     * This method is inspired by PHP's "str_replace" function but has some key differences:
     *    - It doesn't throw an error when `replace` is not an array but `search` is
     *    - The 4th parameter is to control the casing but the 5th is to get the replace count
     *    - In order to get the replace count we must pass the method an object with a "value" property
     */
    replaceMany(
        search: string | string[],
        replace: string | string[],
        caseSensitive = true,
        replacedCount: { value: number } | undefined = { value: 0 }
    ): Stringable {
        return new Stringable(strReplaceMany(search, replace, this.raw(), caseSensitive, replacedCount) as string);
    }

    /**
     * Trim the right side (end) of a string of the given characters.
     */
    rtrim(characters: string | string[] = STR_TRIM_CHARS): Stringable {
        return new Stringable(strRtrim(this.raw(), characters));
    }

    /**
     * "Sanitize" a string.
     * Only allow [a-zA-Z0-9] characters, plus "-" and "_".
     */
    sanitize(): Stringable {
        return new Stringable(strSanitize(this.raw()));
    }

    /**
     * Generate a URL friendly "slug" from a given string.
     */
    slug(separator = '-'): Stringable {
        return new Stringable(strSlug(this.raw(), separator));
    }

    /**
     * Convert a string to "snake_case".
     */
    snake(delimiter = '_'): Stringable {
        return new Stringable(strSnake(this.raw(), delimiter));
    }

    /**
     * Begin a string with a single instance of a given value.
     *
     * This method adds a single instance of the given value
     * to a string if it does not already start with that value.
     */
    start(prefix: string): Stringable {
        return new Stringable(strStart(this.raw(), prefix));
    }

    /**
     * Strip HTML tags from a string.
     */
    stripHtml(): Stringable {
        return new Stringable(strStripHtml(this.raw()));
    }

    /**
     * Convert a value to "StudlyCase".
     */
    studly(): Stringable {
        return new Stringable(strStudly(this.raw()));
    }

    /**
     * Returns the number of substring occurrences.
     */
    substrCount(needle: string, offset = 0, length?: number): number {
        return strSubstrCount(this.raw(), needle, offset, length);
    }

    /**
     * Convert the given string to "Title Case".
     */
    title(): Stringable {
        return new Stringable(strTitle(this.raw()));
    }

    /**
     * Make a string's first character uppercase.
     */
    ucfirst(): Stringable {
        return new Stringable(strUcfirst(this.raw()));
    }

    /**
     * Uppercase the first character of each word in a string.
     */
    ucwords(separators: string | string[] = STR_UCWORDS_CHARS): Stringable {
        return new Stringable(strUcwords(this.raw(), separators));
    }

    /**
     * Make a string's first character uppercase.
     *
     * @alias ucfirst This method is an alias of the `ucfirst` method.
     */
    upperFirst(): Stringable {
        return this.ucfirst();
    }

    /**
     * Uppercase the first character of each word in a string.
     *
     * @alias ucwords This method is an alias of the `ucwords` method.
     */
    upperWords(separators: string | string[] = STR_UCWORDS_CHARS): Stringable {
        return this.ucwords(separators);
    }

    /**
     * Apply the callback's string changes if the given "value" is truthy.
     */
    when<T>(
        condition: T,
        callback: (instance: Stringable, condition: T) => Stringable | T | unknown,
        fallback?: (instance: Stringable, condition: T) => Stringable | T | unknown
    ): Stringable | unknown {
        return strWhen(condition, this, callback, fallback);
    }

    /**
     * Execute the given callback if the string is empty.
     */
    whenEmpty(callback: (instance: Stringable) => Stringable | unknown): Stringable | unknown {
        return strWhenEmpty(this.raw(), this, callback);
    }

    /**
     * Limit the number of words in a string.
     */
    words(words = 100, end = '...'): Stringable {
        return new Stringable(strWords(this.raw(), words, end));
    }

    /* Base `String` method overrides
    ------------------------------------------------*/

    // /**
    //  * Retrieve a string at a given index.
    //  */
    // // @ts-expect-error shush
    // at(index: number): Stringable | undefined {
    //     const result = this.raw().at(index);

    //     return result ? new Stringable(result) : undefined;
    // }

    /**
     * Returns the character at the specified index.
     */
    // @ts-expect-error shush
    charAt(index: number): Stringable {
        return new Stringable(this.raw().charAt(index));
    }

    /**
     * Returns a string that contains the concatenation of two or more strings.
     */
    // @ts-expect-error shush
    concat(...strings: string[]): Stringable {
        return new Stringable(this.raw().concat(...strings));
    }

    /**
     * Determine if a given string ends with a given substring.
     */
    endsWith(needles: string | string[], length: number | undefined = undefined): boolean {
        return strEndsWith(this.raw(), needles, length);
    }

    /**
     * Determine if a given string ends with a given substring.
     */
    // @ts-expect-error shush
    normalize(form?: 'NFC' | 'NFD' | 'NFKC' | 'NFKD'): Stringable {
        return new Stringable(this.raw().normalize(form));
    }

    /**
     * Pad the right side (end) of the string with another.
     */
    // @ts-expect-error shush
    padEnd(length: number, pad = ' '): Stringable {
        return new Stringable(this.raw().padEnd(length, pad));
    }

    /**
     * Pad the left side (start) of the string with another.
     */
    // @ts-expect-error shush
    padStart(length: number, pad = ' '): Stringable {
        return new Stringable(this.raw().padStart(length, pad));
    }

    /**
     * Returns a Stringable value that is made from count copies appended together.
     */
    // @ts-expect-error shush
    repeat(count: number): Stringable {
        return new Stringable(this.raw().repeat(count));
    }

    /**
     * Replace the given value in the given string.
     */
    // @ts-expect-error shush
    replace(
        search: string | RegExp,
        replace: string | ((substring: string, ...args: unknown[]) => string)
    ): Stringable {
        // @ts-expect-error shush
        return new Stringable(this.raw().replace(search, replace));
    }

    /**
     * Trim the string of the given characters.
     */
    // @ts-expect-error shush
    trim(characters: string | string[] = STR_TRIM_CHARS): Stringable {
        return new Stringable(strTrim(this.raw(), characters));
    }

    /**
     * Returns a section of a string.
     */
    // @ts-expect-error shush
    slice(start?: number, end?: number): Stringable {
        return new Stringable(this.raw().slice(start, end));
    }

    /**
     * Split a string into substrings using the specified separator and return them as an array.
     */
    // @ts-expect-error shush
    split(separator: string | RegExp, limit?: number): Stringable[] {
        return this.raw()
            .split(separator, limit)
            .map((part) => new Stringable(part));
    }

    /**
     * Determine if a given string starts with a given substring.
     */
    startsWith(needles: string | string[], position = 0): boolean {
        return strStartsWith(this.raw(), needles, position);
    }

    /**
     * Gets a substring beginning at the specified location and having
     * the specified length.
     *
     * @deprecated Use `.slice` instead.
     */
    // @ts-expect-error shush
    substr(from: number, length?: number): Stringable {
        return new Stringable(this.raw().substr(from, length));
    }

    /**
     * Returns the substring at the specified location within a String object.
     */
    // @ts-expect-error shush
    substring(start: number, end?: number): Stringable {
        return new Stringable(this.raw().substring(start, end));
    }

    /**
     * Converts all alphabetic characters to lowercase, taking into account the
     * host environment's current locale.
     */
    // @ts-expect-error shush
    toLocaleLowerCase(locales?: string | string[]): Stringable {
        return new Stringable(this.raw().toLocaleLowerCase(locales));
    }

    /**
     * Returns a string where all alphabetic characters have been converted to uppercase,
     * taking into account the host environment's current locale.
     */
    // @ts-expect-error shush
    toLocaleUpperCase(locales?: string | string[]): Stringable {
        return new Stringable(this.raw().toLocaleUpperCase(locales));
    }

    /**
     * Convert the given string to lowercase.
     */
    // @ts-expect-error shush
    toLowerCase(): Stringable {
        return new Stringable(this.raw().toLowerCase());
    }

    /**
     * Convert the given string to uppercase.
     */
    // @ts-expect-error shush
    toUpperCase(): Stringable {
        return new Stringable(this.raw().toUpperCase());
    }

    /**
     * Trim the string of the given characters from the end (right).
     *
     * @alias rtrim This method is an alias of the `rtrim` method.
     */
    // @ts-expect-error shush
    trimEnd(characters: string | string[] = STR_TRIM_CHARS): Stringable {
        return this.rtrim(characters);
    }

    /**
     * Trim the string of the given characters from the start (left).
     *
     * @alias ltrim This method is an alias of the `ltrim` method.
     */
    // @ts-expect-error shush
    trimStart(characters: string | string[] = STR_TRIM_CHARS): Stringable {
        return this.ltrim(characters);
    }

    /* Own methods
    ------------------------------------------------*/

    /**
     * Determine if the string is an exact match with the given value.
     */
    exactly(value: string): boolean {
        return this.raw() === value;
    }

    /**
     * Determine if the given string is empty.
     */
    isEmpty(): boolean {
        return this.length < 1;
    }

    /**
     * Determine if the given string is not empty.
     */
    isNotEmpty(): boolean {
        return !this.isEmpty();
    }

    /**
     * Determine if the given string is empty after being trimmed.
     */
    isBlank(): boolean {
        return this.raw().trim().length < 1;
    }

    /**
     * Determine if the given string is not empty after being trimmed.
     */
    isNotBlank(): boolean {
        return !this.isBlank();
    }

    /**
     * Determine if the given string is not empty after being trimmed.
     * @alias isNotBlank This method is an alias of the `isNotBlank` method.
     */
    isFilled(): boolean {
        return this.isNotBlank();
    }

    /**
     * Dump (console.log) the string.
     */
    dump(): Stringable {
        console.log(this.raw());

        return this;
    }

    /**
     * Dump (console.log) the string and end the script.
     */
    dd(): void {
        this.dump();

        if (typeof process !== 'undefined') {
            process.exit(1); // eslint-disable-line n/no-process-exit
        }
    }

    /**
     * Convert the given string to lowercase.
     *
     * @alias toLowerCase This method is an alias of the `toLowerCase` method.
     */
    lower(): Stringable {
        return this.toLowerCase();
    }

    /**
     * Get the raw string value.
     */
    raw(): string {
        return this.toString();
    }

    /**
     * Convert the given string to uppercase.
     *
     * @alias toUpperCase This method is an alias of the `toUpperCase` method.
     */
    upper(): Stringable {
        return this.toUpperCase();
    }

    // /**
    //  * Mix polyfill properties into the object.
    //  */
    // static polyfill(properties: PolyfillObject | PolyfillObject[]): void {
    //     polyfill(this, properties);
    // }
}

// macroable(Stringable);

export default Stringable;
