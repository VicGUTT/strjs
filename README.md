# A set of JavaScript string helpers

JavaScript strings already contains lots of useful and convenient methods built-in, however, it still misses tons of commonly used features like "_capitalizing the first letter of a string_" or "_slugifying a string_" etc... .

This package aims to bridge the gap a little by providing a set of JavaScript string "helper" functions inspired by [Laravel's string helpers](https://laravel.com/docs/8.x/helpers#strings-method-list) and some built-in [PHP string functions](https://www.php.net/manual/en/ref.strings.php).

Here's a quick example:

```js
import str from '@vicgutt/strjs';

const string = 'Quote:the-eyes-are_useless_when_the-mind-is-blind!!!s';

str(string).after(':').replaceMany(['-', '_'], ' ').upperFirst().trimEnd('s').finish('!'); // The eyes are useless when the mind is blind!

// or

str.finish(str.trimEnd(str.upperFirst(str.replaceMany(['-', '_'], ' ', str.after(string, ':'))), 's'), '!'); // The eyes are useless when the mind is blind!

// or (enables tree-shaking)
import strFinish from '@vicgutt/strjs/strFinish';
import strTrimEnd from '@vicgutt/strjs/strTrimEnd';
import strUpperFirst from '@vicgutt/strjs/strUpperFirst';
import strReplaceMany from '@vicgutt/strjs/strReplaceMany';
import strAfter from '@vicgutt/strjs/strAfter';

strFinish(strTrimEnd(strUpperFirst(strReplaceMany(['-', '_'], ' ', strAfter(string, ':'))), 's'), '!'); // The eyes are useless when the mind is blind!
```

## Installation

Install the plugin via NPM _(or yarn)_:

```bash
npm i @vicgutt/strjs
```

```bash
yarn add @vicgutt/strjs
```

**Note**: This library is very "future facing" in the code that is distributed _(dist folder)_, meaning it requires at least Node14+ and ES2020/ES2021 support from your JS compiler/bundler or browser.

## Having access to the `str*` functions

The `str*` functions can be accessed in three different ways:

-   Import the function directly _(ex.: `import strAfter from '@vicgutt/strjs/strAfter'`)_
-   Use the static properties available from the `str` function directly _(ex.: str.after(...))_
-   Or invoke the `str` function, which will retun an instance of [`Stringable`](#stringable) and use the instance methods _(ex.: str(...).after(...))_

## Available functions

<!-- {{ CONTENT }} -->

### • **str.after / strAfter** _([Source](https://github.com/VicGUTT/strjs/blob/main/src/strAfter.ts) | [Tests](https://github.com/VicGUTT/strjs/blob/main/tests/str/strAfter.test.ts))_

Return the remainder of a string after the first occurrence of a given value.
The entire string will be returned if the value does not exist within the string.

**Signature**

```ts
/**
 * @param {string} subject - The string being searched on, otherwise known as the haystack
 * @param {string} search - The value being searched for, otherwise known as the needle
 * @returns {string}
 */
function strAfter(subject: string, search: string): string;
```

**Example**

```js
strAfter('This is the way', 'This is'); // ' the way'
strAfter('This is the way', 'nope'); // 'This is the way'
```

### • **str.afterLast / strAfterLast** _([Source](https://github.com/VicGUTT/strjs/blob/main/src/strAfterLast.ts) | [Tests](https://github.com/VicGUTT/strjs/blob/main/tests/str/strAfterLast.test.ts))_

Return the remainder of a string after the last occurrence of a given value.
The entire string will be returned if the value does not exist within the string.

**Signature**

```ts
/**
 * @param {string} subject - The string being searched on, otherwise known as the haystack
 * @param {string} search - The value being searched for, otherwise known as the needle
 * @returns {string}
 */
function strAfterLast(subject: string, search: string): string;
```

**Example**

```js
strAfterLast('do you no da wae', 'o'); // ' da wae'
strAfterLast('do you no da wae', 'nope'); // 'do you no da wae'
```

### • **str.append / strAppend** _([Source](https://github.com/VicGUTT/strjs/blob/main/src/strAppend.ts) | [Tests](https://github.com/VicGUTT/strjs/blob/main/tests/str/strAppend.test.ts))_

Append the given values to the string.

**Signature**

```ts
/**
 * @param {string} value - The string to append the values on
 * @param {string[]} ...values - The values to be appended to the value
 * @returns {string}
 */
function strAppend(value: string, ...values: string[]): string;
```

**Example**

```js
strAppend('Hello', ' beautiful,', ' awesome,', ' incredible', ' world', '!'); // 'Hello beautiful, awesome, incredible world!'
```

### • **str.basename / strBasename** _([Source](https://github.com/VicGUTT/strjs/blob/main/src/strBasename.ts) | [Tests](https://github.com/VicGUTT/strjs/blob/main/tests/str/strBasename.test.ts))_

Get the trailing name component of the path.

**Signature**

```ts
/**
 * @param {string} value - The path on which we want to get the trailing name component
 * @param {string} [suffix=''] - A "suffix", if provided, will be removed from the trailing name component
 * @returns {string}
 */
function strBasename(value: string, suffix: string = ''): string;
```

**Example**

```js
strBasename('/home/hello/dir/otherDir/lastDir/filename.txt'); // 'filename.txt'
strBasename('/home/hello/dir/otherDir/lastDir/filename.txt', '.txt'); // 'filename'
```

### • **str.before / strBefore** _([Source](https://github.com/VicGUTT/strjs/blob/main/src/strBefore.ts) | [Tests](https://github.com/VicGUTT/strjs/blob/main/tests/str/strBefore.test.ts))_

Get the portion of a string before the first occurrence of a given value.
The entire string will be returned if the value does not exist within the string.

**Signature**

```ts
/**
 * @param {string} subject - The string being searched on, otherwise known as the haystack
 * @param {string} search - The value being searched for, otherwise known as the needle
 * @returns {string}
 */
function strBefore(subject: string, search: string): string;
```

**Example**

```js
strBefore('This is the way', 'the way'); // 'This is '
strBefore('This is the way', 'nope'); // 'This is the way'
```

### • **str.beforeLast / strBeforeLast** _([Source](https://github.com/VicGUTT/strjs/blob/main/src/strBeforeLast.ts) | [Tests](https://github.com/VicGUTT/strjs/blob/main/tests/str/strBeforeLast.test.ts))_

Get the portion of a string before the last occurrence of a given value.
The entire string will be returned if the value does not exist within the string.

**Signature**

```ts
/**
 * @param {string} subject - The string being searched on, otherwise known as the haystack
 * @param {string} search - The value being searched for, otherwise known as the needle
 * @returns {string}
 */
function strBeforeLast(subject: string, search: string): string;
```

**Example**

```js
strBeforeLast('do you no da wae', 'o'); // 'do you n'
strBeforeLast('do you no da wae', 'nope'); // 'do you no da wae'
```

### • **str.between / strBetween** _([Source](https://github.com/VicGUTT/strjs/blob/main/src/strBetween.ts) | [Tests](https://github.com/VicGUTT/strjs/blob/main/tests/str/strBetween.test.ts))_

Get the portion of a string between two given values.

**Signature**

```ts
/**
 * @param {string} subject - The string being searched on, otherwise known as the haystack
 * @param {string} from - The value from which to start the search
 * @param {string} to - The value until which to end the search
 * @returns {string}
 */
function strBetween(subject: string, from: string, to: string): string;
```

**Example**

```js
strBetween('I no da wae broda', 'no', 'broda'); // ' da wae '
strBetween('I no da wae broda', 'nope', 'broda'); // 'I no da wae '
strBetween('I no da wae broda', 'no', 'nope'); // ' da wae broda'
```

### • **str.camel / strCamel** _([Source](https://github.com/VicGUTT/strjs/blob/main/src/strCamel.ts) | [Tests](https://github.com/VicGUTT/strjs/blob/main/tests/str/strCamel.test.ts))_

Convert a value to "camelCase".

**Signature**

```ts
/**
 * @param {string} value - The string to be converted
 * @returns {string}
 */
function strCamel(value: string): string;
```

**Example**

```js
strCamel('loLL-i_pop'); // 'loLLIPop'
strCamel('Will the real Slim Shady please stand up?'); // 'willTheRealSlimShadyPleaseStandUp?'
```

### • **str.contains / strContains** _([Source](https://github.com/VicGUTT/strjs/blob/main/src/strContains.ts) | [Tests](https://github.com/VicGUTT/strjs/blob/main/tests/str/strContains.test.ts))_

Determine if a given string contains a given substring.

Performs a case-sensitive check indicating if any of the
needles are contained in haystack.

**Signature**

```ts
/**
 * @param {string} haystack - The string to search in
 * @param {string | string[]} needles - The substring/substrings to search for in the haystack
 * @returns {boolean}
 */
function strContains(haystack: string, needles: string | string[]): boolean;
```

**Example**

```js
strContains('Victor', 'Vic'); // true
strContains('Victor', 'Vix'); // false
strContains('Victor', ''); // false
strContains('Victor', ['Vic', 'tor']); // true
strContains('Victor', ['Vix', 'tor']); // true
strContains('Victor', ['Vix', 'torx']); // false
```

### • **str.containsAll / strContainsAll** _([Source](https://github.com/VicGUTT/strjs/blob/main/src/strContainsAll.ts) | [Tests](https://github.com/VicGUTT/strjs/blob/main/tests/str/strContainsAll.test.ts))_

Determine if a given string contains all array values.

Performs a case-sensitive check indicating if all of the
needles are contained in haystack.

**Signature**

```ts
/**
 * @param {string} haystack - The string to search in
 * @param {string[]} needles - The substrings to search for in the haystack
 * @returns {boolean}
 */
function strContainsAll(haystack: string, needles: string[]): boolean;
```

**Example**

```js
strContainsAll('Victor', ['Vic']); // true
strContainsAll('Victor', ['Vix']); // false
strContainsAll('Victor', ['']); // false
strContainsAll('Victor', ['Vic', 'tor']); // true
strContainsAll('Victor', ['Vix', 'tor']); // false
strContainsAll('Victor', ['Vix', 'torx']); // false
```

### • **str.dirname / strDirname** _([Source](https://github.com/VicGUTT/strjs/blob/main/src/strDirname.ts) | [Tests](https://github.com/VicGUTT/strjs/blob/main/tests/str/strDirname.test.ts))_

Get the parent directory's path.

Given a string containing the path of a file or directory,
this function will return the parent directory's path that is
**levels** up from the current directory.

**Signature**

```ts
/**
 * @param {string} value - A path of a file or directory
 * @param {number} [levels=1] - The number of parent directories to go up _(must be an integer greater than 0)_
 * @param {string | null} [DIRECTORY_SEPARATOR=null] - The directory path separator to use. If null, the function
                                                    will attempt to determine if the OS being used is Windows and if true,
                                                    will use `\` as a separator, otherwise, it will use `/`
 * @returns {string}
 */
function strDirname(value: string, levels: number = 1, DIRECTORY_SEPARATOR: string | null = null): string;
```

**Example**

```js
strDirname('/grand-parent/parent/child'); // '/grand-parent/parent' (on Windows : '\\grand-parent\\parent')
strDirname('/grand-parent/parent/child', 1); // '/grand-parent/parent' (on Windows : '\\grand-parent\\parent')
strDirname('/grand-parent/parent/child', 2); // '/grand-parent' (on Windows : '\\grand-parent')
strDirname('/grand-parent/parent/child', 3); // '/' (on Windows : '\\')
strDirname('/grand-parent/parent/child', 4); // '/' (on Windows : '\\')
```

### • **str.endsWith / strEndsWith** _([Source](https://github.com/VicGUTT/strjs/blob/main/src/strEndsWith.ts) | [Tests](https://github.com/VicGUTT/strjs/blob/main/tests/str/strEndsWith.test.ts))_

Determine if a given string ends with a given substring.

Performs a case-sensitive check indicating if the haystack
ends in any of the needles.

**Signature**

```ts
/**
 * @param {string} haystack - The string to search in
 * @param {string | string[]} needles - The substrings to be searched for at the end of haystack
 * @param {number} [length] - If provided, it is used as the length of haystack. Defaults to `haystack.length`
 * @returns {boolean}
 */
function strEndsWith(haystack: string, needles: string | string[], length?: number): boolean;
```

**Example**

```js
strEndsWith('Get to the choppa', 'choppa'); // true
strEndsWith('Get to the choppa', 'Choppa'); // false
strEndsWith('Get to the choppa', ['choppa', 'nope']); // true
strEndsWith('Get to the choppa', 'choppa', 'Get to the choppa'.length); // true
strEndsWith('Get to the choppa', 'choppa', 'Get to the choppa'.length + 1); // true
strEndsWith('Get to the choppa', 'choppa', 'Get to the choppa'.length - 1); // false
```

### • **str.escapeHtml / strEscapeHtml** _([Source](https://github.com/VicGUTT/strjs/blob/main/src/strEscapeHtml.ts) | [Tests](https://github.com/VicGUTT/strjs/blob/main/tests/str/strEscapeHtml.test.ts))_

Convert certain characters that have special significance in HTML to HTML entities.

**Signature**

```ts
/**
 * @param {string} value - The string to be converted
 * @returns {string}
 */
function strEscapeHtml(value: string): string;
```

**Example**

```js
strEscapeHtml('<div>Hey</div>'); // '&lt;div&gt;Hey&lt;/div&gt;'
strEscapeHtml('a && b'); // 'a &amp;&amp; b'
strEscapeHtml('"foo"'); // '&quot;foo&quot;'
```

### • **str.escapeHtmlComment / strEscapeHtmlComment** _([Source](https://github.com/VicGUTT/strjs/blob/main/src/strEscapeHtmlComment.ts) | [Tests](https://github.com/VicGUTT/strjs/blob/main/tests/str/strEscapeHtmlComment.test.ts))_

Strip out HTML comment symbols.

**Signature**

```ts
/**
 * @param {string} value - The string to be stripped out
 * @returns {string}
 */
function strEscapeHtmlComment(value: string): string;
```

**Example**

```js
strEscapeHtmlComment('<!-- -->'); // ' '
strEscapeHtmlComment('<!- ->'); // '<!- ->'
strEscapeHtmlComment('<!-->'); // '>'
strEscapeHtmlComment('<!-- Comment -->'); // 'Comment'
strEscapeHtmlComment('<!- Comment ->'); // '<!- Comment ->'
```

### • **str.finish / strFinish** _([Source](https://github.com/VicGUTT/strjs/blob/main/src/strFinish.ts) | [Tests](https://github.com/VicGUTT/strjs/blob/main/tests/str/strFinish.test.ts))_

Cap a string with a single instance of a given value.

This function adds a single instance of the given value
to a string if it does not already end with that value.

**Signature**

```ts
/**
 * @param {string} value - The target string
 * @param {string} cap - The value the target should end with
 * @returns {string}
 */
function strFinish(value: string, cap: string): string;
```

**Example**

```js
strFinish('this/string', '/'); // 'this/string/'
strFinish('this/string/', '/'); // 'this/string/'
strFinish('this/string////', '/'); // 'this/string/'
```

### • **str.stringable / Stringable** _([Source](https://github.com/VicGUTT/strjs/blob/main/src/Stringable.ts) | [Tests](https://github.com/VicGUTT/strjs/blob/main/tests/str/Stringable.test.ts))_

Return the remainder of a string after the first occurrence of a given value.
The entire string will be returned if the value does not exist within the string.

### • **str.is / strIs** _([Source](https://github.com/VicGUTT/strjs/blob/main/src/strIs.ts) | [Tests](https://github.com/VicGUTT/strjs/blob/main/tests/str/strIs.test.ts))_

Determine if a given string matches a given pattern.

This function determines if a given string matches a given pattern.
Asterisks may be used as wildcard values.

**Signature**

```ts
/**
 * @param {string | string[]} pattern - The pattern to be matched against
 * @param {string} value - The value the match against the pattern
 * @returns {boolean}
 */
function strIs(pattern: string | string[], value: string): boolean;
```

**Example**

```js
strIs('foo/*', 'foo/bar/baz'); // true
strIs('*bar*', 'foo/bar/baz'); // true
strIs('*Bar*', 'foo/bar/baz'); // false
strIs('foo', 'foo/bar/baz'); // false
strIs(['foo/*', 'nope'], 'foo/bar/baz'); // true
```

### • **str.isAscii / strIsAscii** _([Source](https://github.com/VicGUTT/strjs/blob/main/src/strIsAscii.ts) | [Tests](https://github.com/VicGUTT/strjs/blob/main/tests/str/strIsAscii.test.ts))_

Determine if a given string is 7 bit ASCII.

**Signature**

```ts
/**
 * @param {string} value - The string being checked
 * @returns {boolean}
 */
function strIsAscii(value: string): boolean;
```

**Example**

```js
strIsAscii('Gutt'); // true
strIsAscii('Gütt'); // false
strIsAscii('ü'); // false
```

### • **str.isUuid / strIsUuid** _([Source](https://github.com/VicGUTT/strjs/blob/main/src/strIsUuid.ts) | [Tests](https://github.com/VicGUTT/strjs/blob/main/tests/str/strIsUuid.test.ts))_

Determine if a given string is a valid UUID.

**Signature**

```ts
/**
 * @param {unknown} value - The string being checked
 * @returns {boolean}
 */
function strIsUuid(value: unknown): boolean;
```

**Example**

```js
strIsUuid('a0a2a2d2-0b87-4a18-83f2-2529882be2de'); // true
strIsUuid('ff6f8cb0-c57da-51e1-9b21-0800200c9a66'); // false
```

### • **str.kebab / strKebab** _([Source](https://github.com/VicGUTT/strjs/blob/main/src/strKebab.ts) | [Tests](https://github.com/VicGUTT/strjs/blob/main/tests/str/strKebab.test.ts))_

Convert a string to "kebab-case".

**Signature**

```ts
/**
 * @param {string} value - The string to be converted
 * @returns {string}
 */
function strKebab(value: string): string;
```

**Example**

```js
strKebab('loLLIPop'); // 'lo-l-l-i-pop'
strKebab('Will the real Slim Shady please stand up?'); // 'will-the-real-slim-shady-please-stand-up?'
```

### • **str.lcfirst / strLcfirst** _([Source](https://github.com/VicGUTT/strjs/blob/main/src/strLcfirst.ts) | [Tests](https://github.com/VicGUTT/strjs/blob/main/tests/str/strLcfirst.test.ts))_

Make a string's first character lowercase.

**Signature**

```ts
/**
 * @param {string} value - The target string
 * @returns {string}
 */
function strLcfirst(value: string): string;
```

**Example**

```js
strLcfirst('Victoria'); // 'victoria'
```

### • **str.limit / strLimit** _([Source](https://github.com/VicGUTT/strjs/blob/main/src/strLimit.ts) | [Tests](https://github.com/VicGUTT/strjs/blob/main/tests/str/strLimit.test.ts))_

Limit the number of characters in a string.
This function truncates the given string to the specified length.

**Signature**

```ts
/**
 * @param {string} value - The string to be truncated
 * @param {number} [limit=100] - The maximum truncated length
 * @param {string} [end='...'] - The string that will be appended to the end of the truncated string
 * @returns {string}
 */
function strLimit(value: string, limit: number = 100, end: string = '...'): string;
```

**Example**

```js
strLimit("It's a new dawn, it's a new day, it's a new life for me, And I'm feelin' good", 15); // "It's a new dawn..."
strLimit("It's a new dawn, it's a new day, it's a new life for me, And I'm feelin' good", 15, ' (...)'); // "It's a new dawn (...)"
```

### • **str.lowerFirst / strLowerFirst** _([Source](https://github.com/VicGUTT/strjs/blob/main/src/strLowerFirst.ts) | [Tests](https://github.com/VicGUTT/strjs/blob/main/tests/str/strLowerFirst.test.ts))_

This function is an alias of the [`strLcfirst`](#-strLcfirst--strLcfirst-source--tests) function.

### • **str.ltrim / strLtrim** _([Source](https://github.com/VicGUTT/strjs/blob/main/src/strLtrim.ts) | [Tests](https://github.com/VicGUTT/strjs/blob/main/tests/str/strLtrim.test.ts))_

Trim the left side (start) of a string of the given characters.

**Signature**

```ts
/**
 * @param {string} value - The target string
 * @param {string | string[]} [characters=[' ', '\t', '\r', '\n', '\r\n', '\f', '\v', '\0']] - The characters to be trimmed off
 * @returns {string}
 */
function strLtrim(
    value: string,
    characters: string | string[] = [' ', '\t', '\r', '\n', '\r\n', '\f', '\v', '\0']
): string;
```

**Example**

```js
strLtrim(' yolo'); // 'yolo'
strLtrim('/yolo', '/'); // 'yolo'
```

### • **str.padBoth / strPadBoth** _([Source](https://github.com/VicGUTT/strjs/blob/main/src/strPadBoth.ts) | [Tests](https://github.com/VicGUTT/strjs/blob/main/tests/str/strPadBoth.test.ts))_

Pad both sides of a string with another.

This function adds padding to both sides of a string with
another string until the final string reaches the desired length.

**Signature**

```ts
/**
 * @param {string} value - The string to add padding to
 * @param {number} length - The desired length the final string should reach
 * @param {string} [pad=' '] - The string to pad the current string with
 * @returns {string}
 */
function strPadBoth(value: string, length: number, pad: string = ' '): string;
```

**Example**

```js
strPadBoth("Feelin' good", 17); // "  Feelin' good   "
strPadBoth("Feelin' good", 17, '*'); // "**Feelin' good***"
```

### • **str.parseCallback / strParseCallback** _([Source](https://github.com/VicGUTT/strjs/blob/main/src/strParseCallback.ts) | [Tests](https://github.com/VicGUTT/strjs/blob/main/tests/str/strParseCallback.test.ts))_

Parse a Class[@]method style callback into class and method.

**Signature**

```ts
/**
 * @param {string} callback - The string representing a "Class"
 * @param {string | null} [fallback=null] - The string representing a "method"
 * @returns {(string | null)[]}
 */
function strParseCallback(callback: string, fallback: string | null = null): (string | null)[];
```

**Example**

```js
strParseCallback('Class@method', 'foo'); // ['Class', 'method']
strParseCallback('Class', 'foo'); // ['Class', 'foo']
strParseCallback('Class'); // ['Class', null]
strParseCallback('@method'); // ['', 'method']
strParseCallback('Class@method@hey', 'foo'); // ['Class', 'method']
```

### • **str.portion / strPortion** _([Source](https://github.com/VicGUTT/strjs/blob/main/src/strPortion.ts) | [Tests](https://github.com/VicGUTT/strjs/blob/main/tests/str/strPortion.test.ts))_

Get the portion of a string before the first/last occurrence of a given value,
or return the remainder of a string after the first/last occurrence of a given value.
The entire string will be returned if the value does not exist within the string.

**Signature**

```ts
/**
 * @param {string} subject - The string being searched on, otherwise known as the haystack
 * @param {string} search - The value being searched for, otherwise known as the needle
 * @param {boolean} before - Should we get the portion of a string before or after a given value
 * @param {boolean} firstOccurrence - Should we get the first or the last occurence of the found value
 * @returns {string}
 */
function strPortion(subject: string, search: string, before: boolean, firstOccurrence: boolean): string;
```

**Example**

```js
strPortion('hannah', 'n', true, true); // 'ha' | Same as: `strBefore('hannah', 'n');`
strPortion('yvette', 't', true, false); // 'yvet' | Same as: `strBeforeLast('yvette', 't');`
strPortion('hannah', 'n', false, true); // 'nah' | Same as: `strAfter('hannah', 'n');`
strPortion('yvette', 't', false, false); // 'e' | Same as: `strAfterLast('yvette', 't');`
```

### • **str.prepend / strPrepend** _([Source](https://github.com/VicGUTT/strjs/blob/main/src/strPrepend.ts) | [Tests](https://github.com/VicGUTT/strjs/blob/main/tests/str/strPrepend.test.ts))_

Prepend the given values to the string.

**Signature**

```ts
/**
 * @param {string} value - The string to prepend the values on
 * @param {string[]} ...values - The values to be prepended to the value
 * @returns {string}
 */
function strPrepend(value: string, ...values: string[]): string;
```

**Example**

```js
strPrepend('world!', 'Hello', ' beautiful,', ' awesome,', ' incredible '); // 'Hello beautiful, awesome, incredible world!'
```

### • **str.random / strRandom** _([Source](https://github.com/VicGUTT/strjs/blob/main/src/strRandom.ts) | [Tests](https://github.com/VicGUTT/strjs/blob/main/tests/str/strRandom.test.ts))_

Generates a "pseudo" random string of the specified length.
Note: This implementation uses `Math.random` under the hood.

**Signature**

```ts
/**
 * @param {number} [length=16] - The maximum characters to generate
 * @returns {string}
 */
function strRandom(length: number = 16): string;
```

**Example**

```js
strRandom(); // Randomly generates a string similar to 'dabFOpWqY8utbKz9'
strRandom(20); // Randomly generates a string similar to 'trUmxY0iWjrhu1IKmkcT'
```

### • **str.remove / strRemove** _([Source](https://github.com/VicGUTT/strjs/blob/main/src/strRemove.ts) | [Tests](https://github.com/VicGUTT/strjs/blob/main/tests/str/strRemove.test.ts))_

Remove any occurrence of the given string in the subject.

**Signature**

```ts
/**
 * @param {string | string[]} search - The value being searched for, otherwise known as the needle
 * @param {string} subject - The string being searched on, otherwise known as the haystack
 * @param {boolean} [caseSensitive=true] - Should the search be case-sensitive
 * @returns {string}
 */
function strRemove(search: string | string[], subject: string, caseSensitive: boolean = true): string;
```

**Example**

```js
strRemove('e', 'Peter Piper picked a peck of pickled peppers.'); // 'Ptr Pipr pickd a pck of pickld ppprs.'
```

### • **str.replaceArray / strReplaceArray** _([Source](https://github.com/VicGUTT/strjs/blob/main/src/strReplaceArray.ts) | [Tests](https://github.com/VicGUTT/strjs/blob/main/tests/str/strReplaceArray.test.ts))_

Replace a given value in the string sequentially with an array.

**Signature**

```ts
/**
 * @param {string} search - The value being searched for, otherwise known as the needle
 * @param {string[]} replace - The replacement value that replaces found search values
 * @param {string} subject - The string being searched on, otherwise known as the haystack
 * @returns {string}
 */
function strReplaceArray(search: string, replace: string[], subject: string): string;
```

**Example**

```js
strReplaceArray('?', ['7:00', '15:30'], 'My flight spans from ? to ?'); // 'My flight spans from 7:00 to 15:30'
```

### • **str.replaceFirst / strReplaceFirst** _([Source](https://github.com/VicGUTT/strjs/blob/main/src/strReplaceFirst.ts) | [Tests](https://github.com/VicGUTT/strjs/blob/main/tests/str/strReplaceFirst.test.ts))_

Replace the first occurrence of a given value in the string.

**Signature**

```ts
/**
 * @param {string} search - The value being searched for, otherwise known as the needle
 * @param {string} replace - The replacement value that replaces found search values
 * @param {string} subject - The string being searched on, otherwise known as the haystack
 * @returns {string}
 */
function strReplaceFirst(search: string, replace: string, subject: string): string;
```

**Example**

```js
strReplaceFirst('father', 'dad', 'The father of the father is the grand-father'); // 'The dad of the father is the grand-father'
```

### • **str.replaceLast / strReplaceLast** _([Source](https://github.com/VicGUTT/strjs/blob/main/src/strReplaceLast.ts) | [Tests](https://github.com/VicGUTT/strjs/blob/main/tests/str/strReplaceLast.test.ts))_

Replace the last occurrence of a given value in the string.

**Signature**

```ts
/**
 * @param {string} search - The value being searched for, otherwise known as the needle
 * @param {string} replace - The replacement value that replaces found search values
 * @param {string} subject - The string being searched on, otherwise known as the haystack
 * @returns {string}
 */
function strReplaceLast(search: string, replace: string, subject: string): string;
```

**Example**

```js
strReplaceLast('father', 'dad', 'The father of the father is the grand-father'); // 'The father of the father is the grand-dad'
```

### • **str.replaceMany / strReplaceMany** _([Source](https://github.com/VicGUTT/strjs/blob/main/src/strReplaceMany.ts) | [Tests](https://github.com/VicGUTT/strjs/blob/main/tests/str/strReplaceMany.test.ts))_

Replace all occurrences of the search string with the replacement string.

This function is inspired by PHP's "str_replace" function but has some key differences:

-   It doesn't throw an error when `replace` is not an array but `search` is
-   The 4th parameter is to control the casing but the 5th is to get the replace count
-   In order to get the replace count we must pass the function an object with a "value" property

**Signature**

```ts
/**
 * @param {string | string[]} search - The value being searched for, otherwise known as the needle
 * @param {string | string[]} replace - The replacement value that replaces found search values
 * @param {string | string[]} subject - The value being searched on, otherwise known as the haystack.
                                     If subject is an array, then the search and replace is performed with
                                     every entry of subject, and the return value is an array as well.
 * @param {boolean} [caseSensitive=true] - Should the search be case-sensitive
 * @param {Object} [replacedCount={ value: 0 }] - If passed, the value will be set to the number of replacements performed
 * @returns {string | string[]}
 */
function strReplaceMany(
    search: string | string[],
    replace: string | string[],
    subject: string | string[],
    caseSensitive: boolean = true,
    replacedCount: Object = { value: 0 }
): string | string[];
```

**Example**

```js
strReplaceMany('o', '', 'Foobar'); // 'Fbar'
strReplaceMany(['o', 'a'], '', 'Foobar'); // 'Fbr'
strReplaceMany('o', ['x', '-'], 'Foobar'); // 'Fxxbar'
strReplaceMany(['o', 'a'], ['x', '-'], 'Foobar'); // 'Fxxb-r'
strReplaceMany(['B', ' '], ['#B', ''], 'Black Lives Matter'); // '#BlackLivesMatter'
strReplaceMany(['B', ' '], ['#B', ''], ['Black Lives Matter']); // ['#BlackLivesMatter']
strReplaceMany(['B', ' '], ['#B', ''], ['Black Lives Matter', 'Be Better Bruh']); // ['#BlackLivesMatter', '#Be#Better#Bruh']
```

### • **str.rtrim / strRtrim** _([Source](https://github.com/VicGUTT/strjs/blob/main/src/strRtrim.ts) | [Tests](https://github.com/VicGUTT/strjs/blob/main/tests/str/strRtrim.test.ts))_

Trim the right side (end) of a string of the given characters.

**Signature**

```ts
/**
 * @param {string} value - The target string
 * @param {string | string[]} [characters=[' ', '\t', '\r', '\n', '\r\n', '\f', '\v', '\0']] - The characters to be trimmed off
 * @returns {string}
 */
function strRtrim(
    value: string,
    characters: string | string[] = [' ', '\t', '\r', '\n', '\r\n', '\f', '\v', '\0']
): string;
```

**Example**

```js
strRtrim('yolo '); // 'yolo'
strRtrim('yolo/', '/'); // 'yolo'
```

### • **str.sanitize / strSanitize** _([Source](https://github.com/VicGUTT/strjs/blob/main/src/strSanitize.ts) | [Tests](https://github.com/VicGUTT/strjs/blob/main/tests/str/strSanitize.test.ts))_

"Sanitize" a string.
Only allow [a-zA-Z0-9] characters, plus "-" and "\_".

**Signature**

```ts
/**
 * @param {string} value - The string to be converted
 * @returns {string}
 */
function strSanitize(value: string): string;
```

**Example**

```js
strSanitize('abc~def#t--123@456à0'); // 'abcdeft--1234560'
```

### • **str.slug / strSlug** _([Source](https://github.com/VicGUTT/strjs/blob/main/src/strSlug.ts) | [Tests](https://github.com/VicGUTT/strjs/blob/main/tests/str/strSlug.test.ts))_

Generate a URL friendly "slug" from a given string.

**Signature**

```ts
/**
 * @param {string} value - The string to be converted
 * @param {string} [separator='-'] - A string used to separate each word
 * @returns {string}
 */
function strSlug(value: string, separator: string = '-'): string;
```

**Example**

```js
strSlug('loL#LI_Pöp'); // 'lolli-pop'
strSlug('loL#LI-Pöp', '_'); // 'lolli_pop'
strSlug('loL@LI_Pöp'); // 'lol-at-li-pop'
strSlug('Will the real Slim Shady please stand up?'); // 'will-the-real-slim-shady-please-stand-up'
```

### • **str.snake / strSnake** _([Source](https://github.com/VicGUTT/strjs/blob/main/src/strSnake.ts) | [Tests](https://github.com/VicGUTT/strjs/blob/main/tests/str/strSnake.test.ts))_

Convert a string to "snake_case".

**Signature**

```ts
/**
 * @param {string} value - The string to be converted
 * @param {string} [delimiter='-'] - A string used to separate each word
 * @returns {string}
 */
function strSnake(value: string, delimiter: string = '-'): string;
```

**Example**

```js
strSnake('loLL-i_pop'); // 'lo_l_l-i_pop'
strSnake('loLL-i_pop', '-'); // 'lo-l-l-i_pop'
strSnake('Will the real Slim Shady please stand up?'); // 'will_the_real_slim_shady_please_stand_up?'
```

### • **str.start / strStart** _([Source](https://github.com/VicGUTT/strjs/blob/main/src/strStart.ts) | [Tests](https://github.com/VicGUTT/strjs/blob/main/tests/str/strStart.test.ts))_

Begin a string with a single instance of a given value.

This function adds a single instance of the given value
to a string if it does not already start with that value.

**Signature**

```ts
/**
 * @param {string} value - The target string
 * @param {string} prefix - The value the target should start with
 * @returns {string}
 */
function strStart(value: string, prefix: string): string;
```

**Example**

```js
strStart('test/string', '/'); // '/test/string'
strStart('/test/string', '/'); // '/test/string'
strStart('//test/string', '/'); // '/test/string'
```

### • **str.startsWith / strStartsWith** _([Source](https://github.com/VicGUTT/strjs/blob/main/src/strStartsWith.ts) | [Tests](https://github.com/VicGUTT/strjs/blob/main/tests/str/strStartsWith.test.ts))_

Determine if a given string starts with a given substring.

Performs a case-sensitive check indicating if the haystack
starts in any of the needles.

**Signature**

```ts
/**
 * @param {string} haystack - The string to search in
 * @param {string | string[]} needles - The substrings to be searched for at the start of haystack
 * @param {number} [position] - The position in haystack at which to begin searching for the needles
 * @returns {boolean}
 */
function strStartsWith(haystack: string, needles: string | string[], position?: number): boolean;
```

**Example**

```js
strStartsWith('Get to the choppa', 'Get to'); // true
strStartsWith('Get to the choppa', 'get to'); // false
strStartsWith('Get to the choppa', ['Get to', 'nope']); // true
strStartsWith('Get to the choppa', 'Get to', 1); // false
```

### • **str.stripHtml / strStripHtml** _([Source](https://github.com/VicGUTT/strjs/blob/main/src/strStripHtml.ts) | [Tests](https://github.com/VicGUTT/strjs/blob/main/tests/str/strStripHtml.test.ts))_

Strip HTML tags from a string.

**Signature**

```ts
/**
 * @param {string} value - The value to be stripped out
 * @returns {string}
 */
function strStripHtml(value: string): string;
```

**Example**

```js
strStripHtml('<div>Hey</div>'); // 'Hey'
strStripHtml('<b>sample</b> text with <div>tags</div>'); // 'sample text with tags'
```

### • **str.studly / strStudly** _([Source](https://github.com/VicGUTT/strjs/blob/main/src/strStudly.ts) | [Tests](https://github.com/VicGUTT/strjs/blob/main/tests/str/strStudly.test.ts))_

Convert a value to "StudlyCase".

**Signature**

```ts
/**
 * @param {string} value - The string to be converted
 * @returns {string}
 */
function strStudly(value: string): string;
```

**Example**

```js
strStudly('loLL-i_pop'); // 'LoLLIPop'
strStudly('Will the real Slim Shady please stand up?'); // 'WillTheRealSlimShadyPleaseStandUp?'
```

### • **str.substrCount / strSubstrCount** _([Source](https://github.com/VicGUTT/strjs/blob/main/src/strSubstrCount.ts) | [Tests](https://github.com/VicGUTT/strjs/blob/main/tests/str/strSubstrCount.test.ts))_

Returns the number of substring occurrences.

**Signature**

```ts
/**
 * @param {string} haystack - The string to search in
 * @param {string} needle - The substring to search for
 * @param {number} [offset] - The offset where to start counting.
                             If the offset is negative, counting starts from the end of the string.
 * @param {number} [length] - The maximum length after the specified offset to search for the substring.
 * @returns {number}
 */
function strSubstrCount(haystack: string, needle: string, offset?: number, length?: number): number;
```

**Example**

```js
strSubstrCount('You Only Live Once', 'o'); // 1
```

### • **str.title / strTitle** _([Source](https://github.com/VicGUTT/strjs/blob/main/src/strTitle.ts) | [Tests](https://github.com/VicGUTT/strjs/blob/main/tests/str/strTitle.test.ts))_

Convert the given string to "Title Case".

**Signature**

```ts
/**
 * @param {string} value - The string to be converted
 * @returns {string}
 */
function strTitle(value: string): string;
```

**Example**

```js
strCamel('loLLIPop'); // 'Lollipop'
strCamel('Will the real Slim Shady please stand up?'); // 'Will The Real Slim Shady Please Stand Up?'
```

### • **str.trim / strTrim** _([Source](https://github.com/VicGUTT/strjs/blob/main/src/strTrim.ts) | [Tests](https://github.com/VicGUTT/strjs/blob/main/tests/str/strTrim.test.ts))_

Trim the string of the given characters.

**Signature**

```ts
/**
 * @param {string} value - The target string
 * @param {string | string[]} [characters=[' ', '\t', '\r', '\n', '\r\n', '\f', '\v', '\0']] - The characters to be trimmed off
 * @param {'left' | 'right' | 'both'} [side='both'] - The side of a string to be trimmed off
 * @returns {string}
 */
function strTrim(
    value: string,
    characters: string | string[] = [' ', '\t', '\r', '\n', '\r\n', '\f', '\v', '\0'],
    side: 'left' | 'right' | 'both' = 'both'
): string;
```

**Example**

```js
strTrim(' yolo '); // 'yolo'
strTrim('/yolo/', '/'); // 'yolo'
```

### • **str.trimEnd / strTrimEnd** _([Source](https://github.com/VicGUTT/strjs/blob/main/src/strTrimEnd.ts) | [Tests](https://github.com/VicGUTT/strjs/blob/main/tests/str/strTrimEnd.test.ts))_

This function is an alias of the [`strRtrim`](#-strRtrim--strRtrim-source--tests) function.

### • **str.trimStart / strTrimStart** _([Source](https://github.com/VicGUTT/strjs/blob/main/src/strTrimStart.ts) | [Tests](https://github.com/VicGUTT/strjs/blob/main/tests/str/strTrimStart.test.ts))_

This function is an alias of the [`strLtrim`](#-strLtrim--strLtrim-source--tests) function.

### • **str.ucfirst / strUcfirst** _([Source](https://github.com/VicGUTT/strjs/blob/main/src/strUcfirst.ts) | [Tests](https://github.com/VicGUTT/strjs/blob/main/tests/str/strUcfirst.test.ts))_

Make a string's first character uppercase.

**Signature**

```ts
/**
 * @param {string} value - The target string
 * @returns {string}
 */
function strUcfirst(value: string): string;
```

**Example**

```js
strLcfirst('victoria'); // 'Victoria'
```

### • **str.ucwords / strUcwords** _([Source](https://github.com/VicGUTT/strjs/blob/main/src/strUcwords.ts) | [Tests](https://github.com/VicGUTT/strjs/blob/main/tests/str/strUcwords.test.ts))_

Uppercase the first character of each word in a string.

**Signature**

```ts
/**
 * @param {string} value - The target string
 * @param {string | string[]} [separators=[' ', '\t', '\r', '\n', '\r\n', '\f', '\v']] - The characters used to separate words
 * @returns {string}
 */
function strUcwords(value: string, separators: string | string[] = [' ', '\t', '\r', '\n', '\r\n', '\f', '\v']): string;
```

**Example**

```js
strUcwords('hello world!'); // 'Hello World!'
strUcwords('hello|world!'); // 'Hello|world!'
strUcwords('hello|world!', '|'); // 'Hello|World!'
strUcwords("mike o'hara"); // "Mike O'hara"
strUcwords("mike o'hara", "'"); // "Mike o'Hara"
strUcwords("mike o'hara", [' ', "'"]); // "Mike O'Hara"
```

### • **str.upperFirst / strUpperFirst** _([Source](https://github.com/VicGUTT/strjs/blob/main/src/strUpperFirst.ts) | [Tests](https://github.com/VicGUTT/strjs/blob/main/tests/str/strUpperFirst.test.ts))_

This function is an alias of the [`strUcfirst`](#-strUcfirst--strUcfirst-source--tests) function.

### • **str.upperWords / strUpperWords** _([Source](https://github.com/VicGUTT/strjs/blob/main/src/strUpperWords.ts) | [Tests](https://github.com/VicGUTT/strjs/blob/main/tests/str/strUpperWords.test.ts))_

This function is an alias of the [`strUcwords`](#-strUcwords--strUcwords-source--tests) function.

### • **str.when / strWhen** _([Source](https://github.com/VicGUTT/strjs/blob/main/src/strWhen.ts) | [Tests](https://github.com/VicGUTT/strjs/blob/main/tests/str/strWhen.test.ts))_

Apply the callback's string changes if the given "value" is truthy.

**Signature**

```ts
/**
 * @param {boolean | unknown} condition - Determine if the callback should be called
 * @param {unknown} instance - The target value
 * @param {function} callback - The function to be called upon the condition truthyness
 * @param {function} [fallback] - The function to be called upon the condition falsyness
 * @returns {unknown}
 */
function strWhen(condition: boolean | unknown, instance: unknown, callback: function, fallback?: function): unknown;
```

**Example**

```js
strWhen(true, 'hello', (instance, condition) => {
    console.log(instance, condition); // 'hello', true
}); // 'hello'

strWhen(true, 'hello', (instance, condition) => {
    return 'bye';
}); // 'bye'

str.when(
    false,
    'hello',
    (instance, condition) => {
        return 'bye';
    },
    (instance, condition) => {
        return 'from fallback';
    }
); // 'from fallback'
```

### • **str.whenEmpty / strWhenEmpty** _([Source](https://github.com/VicGUTT/strjs/blob/main/src/strWhenEmpty.ts) | [Tests](https://github.com/VicGUTT/strjs/blob/main/tests/str/strWhenEmpty.test.ts))_

Execute the given callback if the string is empty.

**Signature**

```ts
/**
 * @param {string} value - The value's emptyness to be checked
 * @param {unknown} instance - The target value
 * @param {function} callback - The function to be called when the string has a `length` of 0
 * @returns {unknown}
 */
function strWhenEmpty(value: string, instance: unknown, callback: function): unknown;
```

**Example**

```js
strWhenEmpty('', 'hello', (instance) => {
    console.log(instance); // 'hello'
}); // 'hello'

strWhenEmpty('', 'hello', (instance) => {
    return 'bye';
}); // 'bye'
```

### • **str.words / strWords** _([Source](https://github.com/VicGUTT/strjs/blob/main/src/strWords.ts) | [Tests](https://github.com/VicGUTT/strjs/blob/main/tests/str/strWords.test.ts))_

Limit the number of words in a string.

**Signature**

```ts
/**
 * @param {string} value - The string to be truncated
 * @param {number} [words=100] - The maximum words
 * @param {string} [end='...'] - The string that will be appended to the end of the truncated string
 * @returns {string}
 */
function strWords(value: string, words: number = 100, end: string = '...'): string;
```

**Example**

```js
strWords("It's a new dawn, it's a new day, it's a new life for me, And I'm feelin' good", 4); // "It's a new dawn, ..."
strWords("It's a new dawn, it's a new day, it's a new life for me, And I'm feelin' good", 4, ' (...)'); // "It's a new dawn, (...)"
```

<!-- /{{ CONTENT }} -->

## Stringable

The Stringable class provides a more fluent and more readable syntax for working with string values; allowing you to chain multiple string operations together.

The Stringable class also extends the base [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#constructor) object and therefore has access to all the native string methods and properties and behaviors.

Example:

```js
str('hello').length; // 5
str('hello') + ' world'; // 'hello world'
+str('7') + ' world'; // 7
```

**Note:** It's important to note that some inherited methods may have been altered to either be a little more convenient or to simply return an instance of `Stringable` instead of `String` where appropriate.
[Read more](#base-string-method-overrides).

### `str*` methods mapping

All [previously listed](#available-functions) `str*` functions are available from the Stringable class, minus the **str** prefix.

Here's some quick mapping examples:

```js
str('my string').prepend('This ', 'is ').raw(); // 'This is my string'
str('This is my string').slug('*').raw(); // 'this*is*my*string'
str(
    'Our ability to reach unity in diversity will be the beauty and the test of our civilization. ~Mahatma Gandhi'
).contains(['unity', 'diversity']); // true
```

### Base `String` method overrides

As previously state, some methods inherited from the base `String` object may have been overriden in order to be a little more convenient or to simply return an instance of `Stringable` instead of `String` where appropriate.

The following methods have the exact same behavior but return an instance or instances of `Stringable`:

-   charAt
-   concat
-   normalize
-   padEnd
-   padStart
-   repeat
-   replace
-   slice
-   split
-   substr
-   substring
-   toLocaleLowerCase
-   toLocaleUpperCase
-   toLowerCase
-   toUpperCase

The following methods have been sligthly altered and mapped to a corresponding `str*` function:

-   endsWith -> strEndsWith
-   startsWith -> strStartsWith
-   trim -> strTrim
-   trimEnd -> rtrim
-   trimStart -> ltrim

```js
{
    // ...
}
```

### Own methods

The following methods are only available from a `Stringable` instance:

```ts
/**
 * Determine if the string is an exact match with the given value.
 */
exactly(value: string): boolean
```

```ts
/**
 * Determine if the given string is empty.
 */
isEmpty(): boolean
```

```ts
/**
 * Determine if the given string is not empty.
 */
isNotEmpty(): boolean
```

```ts
/**
 * Determine if the given string is empty after being trimmed.
 */
isBlank(): boolean
```

```ts
/**
 * Determine if the given string is not empty after being trimmed.
 */
isNotBlank(): boolean
```

```ts
/**
 * Determine if the given string is not empty after being trimmed.
 * @alias isNotBlank This method is an alias of the `isNotBlank` method.
 */
isFilled(): boolean
```

```ts
/**
 * Dump (console.log) the string.
 */
dump(): Stringable
```

```ts
/**
 * Dump (console.log) the string and end the script.
 */
dd(): void
```

```ts
/**
 * Convert the given string to lowercase.
 *
 * @alias toLowerCase This method is an alias of the `toLowerCase` method.
 */
lower(): Stringable
```

```ts
/**
 * Get the raw string value.
 */
raw(): string
```

```ts
/**
 * Convert the given string to uppercase.
 *
 * @alias toUpperCase This method is an alias of the `toUpperCase` method.
 */
upper(): Stringable
```

<!-- ## Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information what has changed recently. -->

## Contributing

If you're interested in contributing to the project, please read our [contributing docs](https://github.com/VicGUTT/strjs/blob/main/.github/CONTRIBUTING.md) **before submitting a pull request**.

The _"Available functions"_ portion of this README is generated by parsing each function's jsDoc.

## License

The MIT License (MIT). Please see [License File](LICENSE) for more information.
