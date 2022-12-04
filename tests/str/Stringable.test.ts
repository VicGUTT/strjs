import { describe, it, expect } from 'vitest';
import Stringable from '../../src/Stringable.js';
import strAfter from '../../src/strAfter.js';
import strAfterLast from '../../src/strAfterLast.js';
import strAppend from '../../src/strAppend.js';
import strBasename from '../../src/strBasename.js';
import strBefore from '../../src/strBefore.js';
import strBeforeLast from '../../src/strBeforeLast.js';
import strBetween from '../../src/strBetween.js';
import strCamel from '../../src/strCamel.js';
import strContains from '../../src/strContains.js';
import strContainsAll from '../../src/strContainsAll.js';
import strDirname from '../../src/strDirname.js';
import strEndsWith from '../../src/strEndsWith.js';
import strEscapeHtml from '../../src/strEscapeHtml.js';
import strEscapeHtmlComment from '../../src/strEscapeHtmlComment.js';
import strFinish from '../../src/strFinish.js';
import strIs from '../../src/strIs.js';
import strIsAscii from '../../src/strIsAscii.js';
import strIsUuid from '../../src/strIsUuid.js';
import strKebab from '../../src/strKebab.js';
import strLcfirst from '../../src/strLcfirst.js';
import strLimit from '../../src/strLimit.js';
import strLtrim from '../../src/strLtrim.js';
import strPadBoth from '../../src/strPadBoth.js';
import strParseCallback from '../../src/strParseCallback.js';
import strPortion from '../../src/strPortion.js';
import strPrepend from '../../src/strPrepend.js';
import strRandom from '../../src/strRandom.js';
import strRemove from '../../src/strRemove.js';
import strReplaceArray from '../../src/strReplaceArray.js';
import strReplaceFirst from '../../src/strReplaceFirst.js';
import strReplaceLast from '../../src/strReplaceLast.js';
import strReplaceMany from '../../src/strReplaceMany.js';
import strRtrim from '../../src/strRtrim.js';
import strSanitize from '../../src/strSanitize.js';
import strSlug from '../../src/strSlug.js';
import strSnake from '../../src/strSnake.js';
import strStart from '../../src/strStart.js';
import strStartsWith from '../../src/strStartsWith.js';
import strStripHtml from '../../src/strStripHtml.js';
import strStudly from '../../src/strStudly.js';
import strSubstrCount from '../../src/strSubstrCount.js';
import strTitle from '../../src/strTitle.js';
import strTrim from '../../src/strTrim.js';
import strUcfirst from '../../src/strUcfirst.js';
import strUcwords from '../../src/strUcwords.js';
import strWords from '../../src/strWords.js';
import asciiCharacters from '../__Fixtures/ascii-characters.js';
import nonAsciiCharacters from '../__Fixtures/non-ascii-characters.js';

const hoax = require('hoax.js'); // eslint-disable-line @typescript-eslint/no-var-requires

describe('Stringable', () => {
    /* Base features
    ------------------------------------------------*/

    it('extends the native `String` object', () => {
        expect(new Stringable()).toBeInstanceOf(String);

        const nativeMethods = {
            untouched: [
                'at',
                'charCodeAt',
                'codePointAt',
                'includes',
                'indexOf',
                'lastIndexOf',
                'localeCompare',
                'match',
                'matchAll',
                'replaceAll',
                'search',
                'toString',
                'valueOf',
            ],
            overridden: [
                'charAt',
                'concat',
                'endsWith',
                'normalize',
                'padEnd',
                'padStart',
                'repeat',
                'replace',
                'slice',
                'split',
                'startsWith',
                'substring',
                'toLocaleLowerCase',
                'toLocaleUpperCase',
                'toLowerCase',
                'toUpperCase',
                'trim',
                'trimStart',
                'trimEnd',
            ],
        };

        nativeMethods.untouched.forEach((method) => {
            expect(Stringable.prototype[method as unknown as number]).toEqual(
                String.prototype[method as unknown as number]
            );
        });
        nativeMethods.overridden.forEach((method) => {
            expect(typeof Stringable.prototype[method as unknown as number]).toEqual('function');
            expect(Stringable.prototype[method as unknown as number]).not.toEqual(
                String.prototype[method as unknown as number]
            );
        });
    });

    it("can determine the length of it's value", () => {
        expect(new Stringable('hello').length).toEqual('hello'.length);
        expect(new Stringable('hey').length).toEqual('hey'.length);
    });

    it('can easily/intuitively be used in a regular string context', () => {
        expect(new Stringable('hello') + ' world').toEqual('hello world');

        // @ts-expect-error shush
        expect('bye world'.replace(new Stringable('bye'), new Stringable('hello'))).toEqual('hello world');
    });

    it('can easily/intuitively be used in a regular number context', () => {
        expect(+new Stringable('7')).toEqual(7);
        expect(+new Stringable('7.007')).toEqual(7.007);
        expect(+new Stringable('7x')).toEqual(NaN);
    });

    it('can be `for..of` looped over', () => {
        const text = `
            The greatest glory in living lies not in never falling, but in rising every time we fall.
            -Nelson Mandela
        `;

        const stringParts: string[] = [];
        const stringableParts: string[] = [];

        for (const i of text) {
            stringParts.push(i);
        }

        for (const i of new Stringable(text)) {
            stringableParts.push(i);
        }

        expect(stringableParts).toEqual(stringParts);
        expect(stringableParts).toEqual(text.split(''));
    });

    // it('is macroable', () => {
    //     expect('__macros__' in Stringable.prototype).toEqual(true);
    //     expect('hasMacro' in Stringable.prototype).toEqual(true);
    //     expect('macro' in Stringable.prototype).toEqual(true);
    //     expect('mixin' in Stringable.prototype).toEqual(true);
    // });

    // it('Stringable:polyfill', () => {
    //     class Clone extends Stringable {}

    //     Clone.polyfill([
    //         {
    //             property: 'raw',
    //             needed: true,
    //             implemention: () => 'changed',
    //         },
    //         {
    //             property: 'new',
    //             needed: true,
    //             implemention: () => 'Yep',
    //         },
    //     ]);

    //     expect(new Clone().raw()).toEqual('changed');
    //     // @ts-expect-error shush
    //     expect(new Clone().new()).toEqual('Yep');
    // });

    /* Own methods
    ------------------------------------------------*/

    it("can determine the emptiness of it's value", () => {
        expect(new Stringable('hello').isEmpty()).toEqual(false);
        expect(new Stringable('hello').isNotEmpty()).toEqual(true);

        expect(new Stringable(' ').isEmpty()).toEqual(false);
        expect(new Stringable(' ').isNotEmpty()).toEqual(true);

        expect(new Stringable('0').isEmpty()).toEqual(false);
        expect(new Stringable('0').isNotEmpty()).toEqual(true);

        expect(new Stringable('').isEmpty()).toEqual(true);
        expect(new Stringable('').isNotEmpty()).toEqual(false);

        expect(new Stringable(undefined).isEmpty()).toEqual(true);
        expect(new Stringable(undefined).isNotEmpty()).toEqual(false);
    });

    it("can determine the blankness of it's value", () => {
        expect(new Stringable('hello').isBlank()).toEqual(false);
        expect(new Stringable('hello').isNotBlank()).toEqual(true);
        expect(new Stringable('hello').isFilled()).toEqual(true);

        expect(new Stringable(' ').isBlank()).toEqual(true);
        expect(new Stringable(' ').isNotBlank()).toEqual(false);
        expect(new Stringable(' ').isFilled()).toEqual(false);

        expect(new Stringable('0').isBlank()).toEqual(false);
        expect(new Stringable('0').isNotBlank()).toEqual(true);
        expect(new Stringable('0').isFilled()).toEqual(true);

        expect(new Stringable('').isBlank()).toEqual(true);
        expect(new Stringable('').isNotBlank()).toEqual(false);
        expect(new Stringable('').isFilled()).toEqual(false);

        expect(new Stringable(undefined).isBlank()).toEqual(true);
        expect(new Stringable(undefined).isNotBlank()).toEqual(false);
        expect(new Stringable(undefined).isFilled()).toEqual(false);
    });

    it('Stringable:exactly', () => {
        const { raw, str } = makeString();

        expect(str.exactly(raw)).toEqual(true);
        expect(new Stringable('raw').exactly('raw')).toEqual(true);
        expect(new Stringable('raw').exactly('_raw')).toEqual(false);
        expect(new Stringable('raw').exactly('nope')).toEqual(false);
    });

    it('Stringable:dump', () => {
        const { str, raw } = makeString();

        const mockedConsole = hoax(console, 'log');

        str.dump();

        expect(mockedConsole.calls).toEqual([[raw]]);
        expect(str.dump() instanceof Stringable).toEqual(true);
    });

    it('Stringable:dd', () => {
        const { str, raw } = makeString();

        const mockedConsole = hoax(console, 'log');
        const mockedProcess = hoax(process, 'exit');

        str.dd();

        expect(mockedConsole.calls).toEqual([[raw]]);
        expect(mockedProcess.calls).toEqual([[1]]);
    });

    it('Stringable:lower', () => {
        const { raw, str } = makeString();

        expect(str.lower().raw()).toEqual(raw.toLowerCase());
    });

    it("can retrieve it's raw value", () => {
        expect(new Stringable('hello').raw()).toEqual('hello');
        expect(new Stringable('hey').raw()).toEqual('hey');
    });

    it('Stringable:upper', () => {
        const { raw, str } = makeString();

        expect(str.upper().raw()).toEqual(raw.toUpperCase());
    });

    /* Base `String` method overrides
    ------------------------------------------------*/

    it('Stringable:charAt', () => {
        const { raw, str } = makeString();

        expect(str.charAt(33).raw()).toEqual(raw.charAt(33));
    });

    it('Stringable:concat', () => {
        const { raw, str } = makeString();

        expect(str.concat(' , ', ' yeah', ' one more').raw()).toEqual(raw.concat(' , ', ' yeah', ' one more'));
    });

    it('Stringable:endsWith', () => {
        const { raw, str } = makeString();

        expect(str.endsWith('Gandhi')).toEqual(strEndsWith(raw, 'Gandhi'));
        expect(str.endsWith(['hey', 'Gandhi'])).toEqual(strEndsWith(raw, ['hey', 'Gandhi']));
        expect(str.endsWith(['hey', 'Gandhi'], 7)).toEqual(strEndsWith(raw, ['hey', 'Gandhi'], 7));
    });

    it('Stringable:normalize', () => {
        const str = '\u0041\u006d\u00e9\u006c\u0069\u0065';

        expect(new Stringable(str).normalize().raw()).toEqual(str.normalize());
        expect(new Stringable(str).normalize('NFD').raw()).toEqual(str.normalize('NFD'));
        expect(new Stringable(str).normalize('NFKD').raw()).toEqual(str.normalize('NFKD'));
    });

    it('Stringable:padEnd', () => {
        const { raw, str } = makeString();

        expect(str.padEnd(150).raw()).toEqual(raw.padEnd(150));
        expect(str.padEnd(150, '*').raw()).toEqual(raw.padEnd(150, '*'));
    });

    it('Stringable:padStart', () => {
        const { raw, str } = makeString();

        expect(str.padStart(150).raw()).toEqual(raw.padStart(150));
        expect(str.padStart(150, '*').raw()).toEqual(raw.padStart(150, '*'));
    });

    it('Stringable:repeat', () => {
        const { raw, str } = makeString();

        expect(str.repeat(7).raw()).toEqual(raw.repeat(7));
    });

    it('Stringable:replace', () => {
        const { raw, str } = makeString();

        expect(str.replace('Our', 'Your').raw()).toEqual(raw.replace('Our', 'Your'));
        expect(
            str
                .replace('Our', (substring, ...args) => {
                    expect(substring).toEqual('Our');
                    expect(args).toEqual([0, raw]);

                    return substring;
                })
                .raw()
        ).toEqual(
            raw.replace('Our', (substring, ...args) => {
                expect(substring).toEqual('Our');
                expect(args).toEqual([0, raw]);

                return substring;
            })
        );
    });

    it('Stringable:trim', () => {
        expect(new Stringable(' abc ').trim().raw()).toEqual(strTrim(' abc '));
    });

    it('Stringable:slice', () => {
        const { raw, str } = makeString();

        expect(str.slice(7).raw()).toEqual(raw.slice(7));
        expect(str.slice(31).raw()).toEqual(raw.slice(31));
        expect(str.slice(-4).raw()).toEqual(raw.slice(-4));
        expect(str.slice(4, 19).raw()).toEqual(raw.slice(4, 19));
        expect(str.slice(-9, -5).raw()).toEqual(raw.slice(-9, -5));
    });

    it('Stringable:split', () => {
        const { raw, str } = makeString();

        const rawParts = raw.split('');
        const stringableParts = str.split('');

        stringableParts.forEach((part, index) => {
            expect(part).toBeInstanceOf(Stringable);
            expect(part.raw()).toEqual(rawParts[index]);
        });

        expect(stringableParts.map((part) => part.raw())).toEqual(rawParts);
    });

    it('Stringable:startsWith', () => {
        const { raw, str } = makeString();

        expect(str.startsWith('o')).toEqual(strStartsWith(raw, 'o'));
        expect(str.startsWith('a', 4)).toEqual(strStartsWith(raw, 'a', 4));
    });

    it('Stringable:substr', () => {
        const { raw, str } = makeString();

        expect(str.substr(7).raw()).toEqual(raw.substr(7));
        expect(str.substr(31).raw()).toEqual(raw.substr(31));
        expect(str.substr(-4).raw()).toEqual(raw.substr(-4));
        expect(str.substr(4, 19).raw()).toEqual(raw.substr(4, 19));
        expect(str.substr(-9, -5).raw()).toEqual(raw.substr(-9, -5));
    });

    it('Stringable:substring', () => {
        const { raw, str } = makeString();

        expect(str.substring(7).raw()).toEqual(raw.substring(7));
        expect(str.substring(31).raw()).toEqual(raw.substring(31));
        expect(str.substring(-4).raw()).toEqual(raw.substring(-4));
        expect(str.substring(4, 19).raw()).toEqual(raw.substring(4, 19));
        expect(str.substring(-9, -5).raw()).toEqual(raw.substring(-9, -5));
    });

    it('Stringable:toLocaleLowerCase', () => {
        const { raw, str } = makeString();

        expect(str.toLocaleLowerCase().raw()).toEqual(raw.toLocaleLowerCase());
        expect(str.toLocaleLowerCase('fr').raw()).toEqual(raw.toLocaleLowerCase('fr'));
        expect(str.toLocaleLowerCase(['fr', 'en']).raw()).toEqual(raw.toLocaleLowerCase(['fr', 'en']));
    });

    it('Stringable:toLocaleUpperCase', () => {
        const { raw, str } = makeString();

        expect(str.toLocaleUpperCase().raw()).toEqual(raw.toLocaleUpperCase());
        expect(str.toLocaleUpperCase('fr').raw()).toEqual(raw.toLocaleUpperCase('fr'));
        expect(str.toLocaleUpperCase(['fr', 'en']).raw()).toEqual(raw.toLocaleUpperCase(['fr', 'en']));
    });

    it('Stringable:toLowerCase', () => {
        const { raw, str } = makeString();

        expect(str.toLowerCase().raw()).toEqual(raw.toLowerCase());
    });

    it('Stringable:toUpperCase', () => {
        const { raw, str } = makeString();

        expect(str.toUpperCase().raw()).toEqual(raw.toUpperCase());
    });

    it('Stringable:trimEnd', () => {
        const { str } = makeString();

        expect(str.trimEnd().raw()).toEqual(str.rtrim().raw());
        expect(new Stringable(' abc ').trimEnd().raw()).toEqual(new Stringable(' abc ').rtrim().raw());
        expect(new Stringable(' abc ').trimEnd().raw()).toEqual(' abc '.trimEnd());
    });

    it('Stringable:trimStart', () => {
        const { str } = makeString();

        expect(str.trimStart().raw()).toEqual(str.ltrim().raw());
        expect(new Stringable(' abc ').trimStart().raw()).toEqual(new Stringable(' abc ').ltrim().raw());
        expect(new Stringable(' abc ').trimStart().raw()).toEqual(' abc '.trimStart());
    });

    /* `str*` methods mapping
    ------------------------------------------------*/

    it('Stringable:after', () => {
        const { raw, str } = makeString();

        expect(str.after('Mahatma').raw()).toEqual(strAfter(raw, 'Mahatma'));
    });

    it('Stringable:afterLast', () => {
        const { raw, str } = makeString();

        expect(str.afterLast('the').raw()).toEqual(strAfterLast(raw, 'the'));
    });

    it('Stringable:append', () => {
        const { raw, str } = makeString();

        expect(str.append('1', '2', '3', '4', '5', '6', '7').raw()).toEqual(
            strAppend(raw, '1', '2', '3', '4', '5', '6', '7')
        );
    });

    it('Stringable:basename', () => {
        const raw = '/home/hello\\dir\\otherDir/lastDir\\filename.txt';
        const str = new Stringable(raw);

        expect(str.basename().raw()).toEqual(strBasename(raw));
        expect(str.basename('.txt').raw()).toEqual(strBasename(raw, '.txt'));
    });

    it('Stringable:before', () => {
        const { raw, str } = makeString();

        expect(str.before('unity').raw()).toEqual(strBefore(raw, 'unity'));
    });

    it('Stringable:beforeLast', () => {
        const { raw, str } = makeString();

        expect(str.beforeLast('unity').raw()).toEqual(strBeforeLast(raw, 'unity'));
    });

    it('Stringable:between', () => {
        const { raw, str } = makeString();

        expect(str.between('to reach', 'civilization').raw()).toEqual(strBetween(raw, 'to reach', 'civilization'));
    });

    it('Stringable:camel', () => {
        expect(new Stringable('laravel_php_framework').camel().raw()).toEqual(strCamel('laravel_php_framework'));
        expect(new Stringable('laravel-phP-framework').camel().raw()).toEqual(strCamel('laravel-phP-framework'));
        expect(new Stringable('laravel  -_-  php   -_-   framework   ').camel().raw()).toEqual(
            strCamel('laravel  -_-  php   -_-   framework   ')
        );
    });

    it('Stringable:contains', () => {
        const { raw, str } = makeString();

        expect(str.contains('diversity')).toEqual(strContains(raw, 'diversity'));
        expect(str.contains(['unity', 'diversity'])).toEqual(strContains(raw, ['unity', 'diversity']));
    });

    it('Stringable:containsAll', () => {
        const { raw, str } = makeString();

        expect(str.containsAll(['unity', 'diversity'])).toEqual(strContainsAll(raw, ['unity', 'diversity']));
    });

    it('Stringable:dirname', () => {
        expect(new Stringable('').dirname().raw()).toEqual(strDirname(''));
        expect(new Stringable('.').dirname().raw()).toEqual(strDirname('.'));
        expect(new Stringable('..').dirname().raw()).toEqual(strDirname('..'));
        expect(new Stringable('../../../../').dirname().raw()).toEqual(strDirname('../../../../'));
        expect(new Stringable('../../../../').dirname(2).raw()).toEqual(strDirname('../../../../', 2));
        expect(new Stringable('../../../../').dirname(3).raw()).toEqual(strDirname('../../../../', 3));
        expect(new Stringable('../../../../').dirname(4).raw()).toEqual(strDirname('../../../../', 4));
        expect(new Stringable('../../../../').dirname(5).raw()).toEqual(strDirname('../../../../', 5));
    });

    it('Stringable:escapeHtml', () => {
        expect(new Stringable('<div>Hey</div>').escapeHtml().raw()).toEqual(strEscapeHtml('<div>Hey</div>'));
        expect(new Stringable('<p><a>').escapeHtml().raw()).toEqual(strEscapeHtml('<p><a>'));
        expect(
            new Stringable('<p>Test paragraph.</p><!-- Comment --> <a href="#fragment">Other text</a>')
                .escapeHtml()
                .raw()
        ).toEqual(strEscapeHtml('<p>Test paragraph.</p><!-- Comment --> <a href="#fragment">Other text</a>'));
    });

    it('Stringable:escapeHtmlComment', () => {
        expect(new Stringable('<!-- Comment -->').escapeHtmlComment().raw()).toEqual(
            strEscapeHtmlComment('<!-- Comment -->')
        );
        expect(new Stringable('<!- Comment ->').escapeHtmlComment().raw()).toEqual(
            strEscapeHtmlComment('<!- Comment ->')
        );
        expect(
            new Stringable('<p>Test paragraph.</p><!-- Comment --> <a href="#fragment">Other text</a>')
                .escapeHtmlComment()
                .raw()
        ).toEqual(strEscapeHtmlComment('<p>Test paragraph.</p><!-- Comment --> <a href="#fragment">Other text</a>'));
    });

    it('Stringable:finish', () => {
        const { raw, str } = makeString();

        expect(str.finish('!!!').raw()).toEqual(strFinish(raw, '!!!'));
    });

    it('Stringable:is', () => {
        const { raw, str } = makeString();

        expect(str.is('Hey/*')).toEqual(strIs('Hey/*', raw));
    });

    it('Stringable:isAscii', () => {
        asciiCharacters.forEach((char) => {
            expect(new Stringable(char).isAscii()).toEqual(strIsAscii(char));
        });

        nonAsciiCharacters.forEach((char) => {
            expect(new Stringable(char).isAscii()).toEqual(strIsAscii(char));
        });
    });

    it('Stringable:isUuid', () => {
        const { raw, str } = makeString();

        expect(str.isUuid()).toEqual(strIsUuid(raw));
    });

    it('Stringable:kebab', () => {
        const { raw, str } = makeString();

        expect(str.kebab().raw()).toEqual(strKebab(raw));
    });

    it('Stringable:lcfirst', () => {
        const { raw, str } = makeString();

        expect(str.lcfirst().raw()).toEqual(strLcfirst(raw));
    });

    it('Stringable:limit', () => {
        const { raw, str } = makeString();

        expect(str.limit().raw()).toEqual(strLimit(raw));
        expect(str.limit(10).raw()).toEqual(strLimit(raw, 10));
        expect(str.limit(10, '***').raw()).toEqual(strLimit(raw, 10, '***'));
    });

    it('Stringable:lowerFirst', () => {
        const { str } = makeString();

        expect(str.lowerFirst().raw()).toEqual(str.lcfirst().raw());
    });

    it('Stringable:ltrim', () => {
        const { raw, str } = makeString();

        expect(str.ltrim().raw()).toEqual(strLtrim(raw));
        expect(new Stringable(' abc ').ltrim().raw()).toEqual(strLtrim(' abc '));
    });

    it('Stringable:padBoth', () => {
        const { raw, str } = makeString();

        expect(str.padBoth(150).raw()).toEqual(strPadBoth(raw, 150));
        expect(str.padBoth(150, '*').raw()).toEqual(strPadBoth(raw, 150, '*'));
    });

    it('Stringable:padLeft', () => {
        const { str } = makeString();

        expect(str.padLeft(150).raw()).toEqual(str.padStart(150).raw());
        expect(str.padLeft(150, '*').raw()).toEqual(str.padStart(150, '*').raw());
    });

    it('Stringable:padRight', () => {
        const { str } = makeString();

        expect(str.padRight(150).raw()).toEqual(str.padEnd(150).raw());
        expect(str.padRight(150, '*').raw()).toEqual(str.padEnd(150, '*').raw());
    });

    it('Stringable:parseCallback', () => {
        const { raw, str } = makeString();

        expect(str.parseCallback('nope')).toEqual(strParseCallback(raw, 'nope'));
        expect(new Stringable('Class@method').parseCallback()).toEqual(strParseCallback('Class@method'));
    });

    it('Stringable:portion', () => {
        const { raw, str } = makeString();

        expect(str.portion('diversity', true, true).raw()).toEqual(strPortion(raw, 'diversity', true, true));
        expect(str.portion('diversity', true, false).raw()).toEqual(strPortion(raw, 'diversity', true, false));
        expect(str.portion('diversity', false, true).raw()).toEqual(strPortion(raw, 'diversity', false, true));
        expect(str.portion('diversity', false, false).raw()).toEqual(strPortion(raw, 'diversity', false, false));
    });

    it('Stringable:prepend', () => {
        const { raw, str } = makeString();

        expect(str.prepend('1', '2', '3', '4', '5', '6', '7').raw()).toEqual(
            strPrepend(raw, '1', '2', '3', '4', '5', '6', '7')
        );
    });

    it('Stringable:random', () => {
        const { str } = makeString();

        expect(str.random().length).toEqual(strRandom().length);
        expect(str.random(32).length).toEqual(strRandom(32).length);

        expect(/[a-zA-Z0-9]/.test(str.random())).toEqual(/[a-zA-Z0-9]/.test(strRandom()));
        expect(/[a-zA-Z0-9]/.test(str.random(32))).toEqual(/[a-zA-Z0-9]/.test(strRandom(32)));
    });

    it('Stringable:remove', () => {
        const { raw, str } = makeString();

        expect(str.remove('o').raw()).toEqual(strRemove('o', raw));
        expect(str.remove('o', false).raw()).toEqual(strRemove('o', raw, false));
    });

    it('Stringable:replaceArray', () => {
        const subject = '?/?/?/?';
        const str = new Stringable(subject);

        expect(str.replaceArray('?', ['foo', 'bar', 'baz']).raw()).toEqual(
            strReplaceArray('?', ['foo', 'bar', 'baz'], subject)
        );
    });

    it('Stringable:replaceFirst', () => {
        const { raw, str } = makeString();

        expect(str.replaceFirst('a', 'x').raw()).toEqual(strReplaceFirst('a', 'x', raw));
    });

    it('Stringable:replaceLast', () => {
        const { raw, str } = makeString();

        expect(str.replaceLast('a', 'x').raw()).toEqual(strReplaceLast('a', 'x', raw));
    });

    it('Stringable:replaceMany', () => {
        const { raw, str } = makeString();

        const strReplacedCount = { value: 0 };
        const rawReplacedCount = { value: 0 };

        expect(str.replaceMany('Ou', '--').raw()).toEqual(strReplaceMany('Ou', '--', raw));
        expect(str.replaceMany('Ou', '--', false).raw()).toEqual(strReplaceMany('Ou', '--', raw, false));
        expect(str.replaceMany('Ou', '--', false, strReplacedCount).raw()).toEqual(
            strReplaceMany('Ou', '--', raw, false, rawReplacedCount)
        );

        expect(strReplacedCount.value).toEqual(2);
        expect(rawReplacedCount.value).toEqual(2);

        expect(str.replaceMany(['o', 'u'], '--').raw()).toEqual(strReplaceMany(['o', 'u'], '--', raw));
        expect(str.replaceMany(['o', 'u'], '--', false).raw()).toEqual(strReplaceMany(['o', 'u'], '--', raw, false));
        expect(str.replaceMany(['o', 'u'], '--', false, strReplacedCount).raw()).toEqual(
            strReplaceMany(['o', 'u'], '--', raw, false, rawReplacedCount)
        );

        expect(strReplacedCount.value).toEqual(9);
        expect(rawReplacedCount.value).toEqual(9);

        expect(str.replaceMany('o', ['-']).raw()).toEqual(strReplaceMany('o', ['-'], raw));
        expect(str.replaceMany('o', ['-'], false).raw()).toEqual(strReplaceMany('o', ['-'], raw, false));
        expect(str.replaceMany('o', ['-'], false, strReplacedCount).raw()).toEqual(
            strReplaceMany('o', ['-'], raw, false, rawReplacedCount)
        );

        expect(strReplacedCount.value).toEqual(5);
        expect(rawReplacedCount.value).toEqual(5);

        const replaced = new Stringable('Fo-o|ar').replaceMany(['|', '-'], ['b', ''], true, strReplacedCount);

        expect(replaced.raw()).toEqual('Foobar');
        expect(strReplacedCount.value).toEqual(2);
    });

    it('Stringable:rtrim', () => {
        const { raw, str } = makeString();

        expect(str.rtrim().raw()).toEqual(strRtrim(raw));
        expect(new Stringable(' abc ').rtrim().raw()).toEqual(strRtrim(' abc '));
    });

    it('Stringable:sanitize', () => {
        const { raw, str } = makeString();

        expect(str.sanitize().raw()).toEqual(strSanitize(raw));
        expect(new Stringable('abcdeft-1234560').sanitize().raw()).toEqual('abcdeft-1234560');
        expect(new Stringable('abcdeft_1234560').sanitize().raw()).toEqual('abcdeft_1234560');

        expect(new Stringable('abc~def#t--123@456à0').sanitize().raw()).toEqual('abcdeft--1234560');
        expect(new Stringable('&"{(-è_çà)=--<!:;,ù*$^?>').sanitize().raw()).toEqual('-_--');
    });

    it('Stringable:slug', () => {
        const { raw, str } = makeString();

        expect(str.slug().raw()).toEqual(strSlug(raw));
        expect(str.slug('_').raw()).toEqual(strSlug(raw, '_'));
    });

    it('Stringable:snake', () => {
        const { raw, str } = makeString();

        expect(str.snake().raw()).toEqual(strSnake(raw));
        expect(str.snake('*').raw()).toEqual(strSnake(raw, '*'));
    });

    it('Stringable:start', () => {
        const { raw, str } = makeString();

        expect(str.start('___').raw()).toEqual(strStart(raw, '___'));
    });

    it('Stringable:stripHtml', () => {
        expect(new Stringable('<div>Hey</div>').stripHtml().raw()).toEqual(strStripHtml('<div>Hey</div>'));
        expect(new Stringable('<p><a>').stripHtml().raw()).toEqual(strStripHtml('<p><a>'));
        expect(
            new Stringable('<p>Test paragraph.</p><!-- Comment --> <a href="#fragment">Other text</a>')
                .stripHtml()
                .raw()
        ).toEqual(strStripHtml('<p>Test paragraph.</p><!-- Comment --> <a href="#fragment">Other text</a>'));
    });

    it('Stringable:studly', () => {
        expect(new Stringable('laravel_php_framework').studly().raw()).toEqual(strStudly('laravel_php_framework'));
        expect(new Stringable('laravel-phP-framework').studly().raw()).toEqual(strStudly('laravel-phP-framework'));
        expect(new Stringable('laravel  -_-  php   -_-   framework   ').studly().raw()).toEqual(
            strStudly('laravel  -_-  php   -_-   framework   ')
        );
    });

    it('Stringable:substrCount', () => {
        const { raw, str } = makeString();

        expect(str.substrCount('o')).toEqual(strSubstrCount(raw, 'o'));
        expect(str.substrCount('o', 4)).toEqual(strSubstrCount(raw, 'o', 4));
        expect(str.substrCount('o', 4, 20)).toEqual(strSubstrCount(raw, 'o', 4, 20));
    });

    it('Stringable:title', () => {
        const { raw, str } = makeString();

        expect(str.title().raw()).toEqual(strTitle(raw));
    });

    it('Stringable:ucfirst', () => {
        const { raw, str } = makeString();

        expect(str.ucfirst().raw()).toEqual(strUcfirst(raw));
    });

    it('Stringable:ucwords', () => {
        expect(new Stringable('hello world!').ucwords().raw()).toEqual(strUcwords('hello world!'));
        expect(new Stringable('hello|world!').ucwords('|').raw()).toEqual(strUcwords('hello|world!', '|'));
        expect(new Stringable("mike o'hara").ucwords([' ', "'"]).raw()).toEqual(strUcwords("mike o'hara", [' ', "'"]));
    });

    it('Stringable:upperFirst', () => {
        const { str } = makeString();

        expect(str.upperFirst().raw()).toEqual(str.ucfirst().raw());
    });

    it('Stringable:upperWords', () => {
        expect(new Stringable('hello world!').upperWords().raw()).toEqual(
            new Stringable('hello world!').ucwords().raw()
        );
        expect(new Stringable('hello|world!').upperWords('|').raw()).toEqual(
            new Stringable('hello|world!').ucwords('|').raw()
        );
        expect(new Stringable("mike o'hara").upperWords([' ', "'"]).raw()).toEqual(
            new Stringable("mike o'hara").ucwords([' ', "'"]).raw()
        );
    });

    it('Stringable:when', () => {
        // When false
        const callback1 = () => {
            throw new Error('How did we get here 😱 ! Abort abort !!');
        };
        const fallback1 = (instance: Stringable, value: boolean) => {
            expect(instance instanceof Stringable).toEqual(true);
            expect(value).toEqual(false);

            return instance.append('fallbacks to default');
        };

        const _ = as;

        expect(_(new Stringable('when').when(false, callback1)).raw()).toEqual('when');
        expect(_(new Stringable('when false ').when(false, callback1, fallback1)).raw()).toEqual(
            'when false fallbacks to default'
        );

        // When True
        const callback2 = (instance: Stringable, value: boolean) => {
            expect(instance instanceof Stringable).toEqual(true);
            expect(value).toEqual(true);

            return instance.append('true');
        };
        const callback3 = (instance: Stringable, value: string) => {
            expect(instance instanceof Stringable).toEqual(true);
            expect(value).toEqual('from if');

            return instance.append(value);
        };
        const fallback2 = () => {
            throw new Error('How did we get here 😱 ! Abort abort !!');
        };

        expect(_(new Stringable('when ').when(true, callback2, fallback2)).raw()).toEqual('when true');
        expect(_(new Stringable('gets a value ').when('from if', callback3, fallback2)).raw()).toEqual(
            'gets a value from if'
        );

        expect(new Stringable('returns unknown').when(true, () => [123])).toEqual([123]);
        expect(new Stringable('returns unknown').when(true, (i) => i)).toBeInstanceOf(Stringable);
        expect(
            new Stringable('returns unknown').when(
                false,
                () => null,
                () => [123]
            )
        ).toEqual([123]);
        expect(
            new Stringable('returns unknown').when(
                false,
                () => null,
                (i) => i
            )
        ).toBeInstanceOf(Stringable);
    });

    it('Stringable:whenEmpty', () => {
        const callback1 = (instance: Stringable) => {
            expect(instance instanceof Stringable).toEqual(true);
        };
        const callback2 = (instance: Stringable) => {
            expect(instance instanceof Stringable).toEqual(true);

            return 'empty';
        };
        const callback3 = (instance: Stringable) => {
            expect(instance instanceof Stringable).toEqual(true);

            return 'empty';
        };

        expect(new Stringable().whenEmpty(callback1) instanceof Stringable).toEqual(true);
        expect(new Stringable().whenEmpty(callback2)).toEqual('empty');
        expect((new Stringable('not-empty').whenEmpty(callback3) as Stringable).raw()).toEqual('not-empty');
    });

    it('Stringable:words', () => {
        const { raw, str } = makeString();

        expect(str.words().raw()).toEqual(strWords(raw));
        expect(str.words(10).raw()).toEqual(strWords(raw, 10));
        expect(str.words(15, '!').raw()).toEqual(strWords(raw, 15, '!'));
    });
});

/* Helpers
------------------------------------------------*/

function makeString() {
    const raw =
        'Our ability to reach unity in diversity will be the beauty and the test of our civilization. ~Mahatma Gandhi';

    return {
        raw,
        str: new Stringable(raw),
    };
}

const as = (value: unknown): Stringable => value as Stringable;
