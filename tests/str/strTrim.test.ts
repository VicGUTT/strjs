import strTrim, { STR_TRIM_BOTH, STR_TRIM_LEFT, STR_TRIM_RIGHT } from '../../src/strTrim';

describe('str:strTrim', () => {
    it('can trim the left side (start)', () => {
        expect(_trimLeft('Hello World')).toEqual('Hello World');
        expect(_trimLeft(' foo ')).toEqual('foo ');

        expect(_trimLeft(' ___foo__ ', '_')).toEqual(' ___foo__ ');
        expect(_trimLeft('___foo__ ', '_')).toEqual('foo__ ');
        expect(_trimLeft('___foo__ ', '__')).toEqual('foo__ ');
        expect(_trimLeft('___foo__ ', '___')).toEqual('foo__ ');
        expect(_trimLeft('___foo__ ', '____')).toEqual('___foo__ ');
        expect(_trimLeft(' ___foo__ ', [' ', '_'])).toEqual('foo__ ');
        expect(_trimLeft(' ___foo__ ', ['_', ' '])).toEqual('foo__ ');

        expect(_trimLeft(' ___foo__', '_')).toEqual(' ___foo__');
        expect(_trimLeft(' ___foo__', '__')).toEqual(' ___foo__');
        expect(_trimLeft(' ___foo__', '___')).toEqual(' ___foo__');
        expect(_trimLeft(' ___foo__', '____')).toEqual(' ___foo__');

        expect(_trimLeft('\t\tThese are a few words :) ...  ')).toEqual('These are a few words :) ...  ');
        expect(_trimLeft('\t\tThese are a few words :) ...  ', ' ')).toEqual('\t\tThese are a few words :) ...  ');
        expect(_trimLeft('\t\tThese are a few words :) ...  ', '\t\t')).toEqual('These are a few words :) ...  ');
        expect(_trimLeft('\t\tThese are a few words :) ...  ', [' '])).toEqual('\t\tThese are a few words :) ...  ');
        expect(_trimLeft('\t\tThese are a few words :) ...  ', ['\t\t'])).toEqual('These are a few words :) ...  ');
        expect(_trimLeft('\t\tThese are a few words :) ...  ', [' ', '\t'])).toEqual('These are a few words :) ...  ');
        expect(_trimLeft('\t\tThese are a few words :) ...  ', [' ', '\t', '123'])).toEqual(
            'These are a few words :) ...  '
        );

        expect(_trimLeft('\x09Example string\x0A')).toEqual('Example string\x0A');
    });

    it('can trim the right side (end)', () => {
        expect(_trimRight('Hello World')).toEqual('Hello World');
        expect(_trimRight(' foo ')).toEqual(' foo');

        expect(_trimRight(' ___foo__ ', '_')).toEqual(' ___foo__ ');
        expect(_trimRight(' ___foo__', '_')).toEqual(' ___foo');
        expect(_trimRight(' ___foo__', '__')).toEqual(' ___foo');
        expect(_trimRight(' ___foo__', '___')).toEqual(' ___foo__');
        expect(_trimRight(' ___foo__', '____')).toEqual(' ___foo__');
        expect(_trimRight(' ___foo__ ', [' ', '_'])).toEqual(' ___foo');
        expect(_trimRight(' ___foo__ ', ['_', ' '])).toEqual(' ___foo');

        expect(_trimRight('___foo__ ', '_')).toEqual('___foo__ ');
        expect(_trimRight('___foo__ ', '__')).toEqual('___foo__ ');
        expect(_trimRight('___foo__ ', '___')).toEqual('___foo__ ');
        expect(_trimRight('___foo__ ', '____')).toEqual('___foo__ ');

        expect(_trimRight('  These are a few words :) ...\t\t')).toEqual('  These are a few words :) ...');
        expect(_trimRight('  These are a few words :) ...\t\t', ' ')).toEqual('  These are a few words :) ...\t\t');
        expect(_trimRight('  These are a few words :) ...\t\t', '\t\t')).toEqual('  These are a few words :) ...');
        expect(_trimRight('  These are a few words :) ...\t\t', [' '])).toEqual('  These are a few words :) ...\t\t');
        expect(_trimRight('  These are a few words :) ...\t\t', ['\t\t'])).toEqual('  These are a few words :) ...');
        expect(_trimRight('  These are a few words :) ...\t\t', [' ', '\t'])).toEqual('  These are a few words :) ...');
        expect(_trimRight('  These are a few words :) ...\t\t', [' ', '\t', '123'])).toEqual(
            '  These are a few words :) ...'
        );

        expect(_trimRight('\x09Example string\x0A')).toEqual('\x09Example string');
    });

    it('can trim both sides', () => {
        expect(_trimBoth('Hello World')).toEqual('Hello World');
        expect(_trimBoth(' foo ')).toEqual('foo');

        expect(_trimBoth(' ___foo__ ', '_')).toEqual(' ___foo__ ');
        expect(_trimBoth(' ___foo__ ', '_')).toEqual(' ___foo__ ');
        expect(_trimBoth(' ___foo__ ', '__')).toEqual(' ___foo__ ');
        expect(_trimBoth(' ___foo__ ', '___')).toEqual(' ___foo__ ');
        expect(_trimBoth(' ___foo__ ', '____')).toEqual(' ___foo__ ');
        expect(_trimBoth(' ___foo__ ', [' ', '_'])).toEqual('foo');
        expect(_trimBoth(' ___foo__ ', ['_', ' '])).toEqual('foo');

        expect(_trimBoth('___foo__', '_')).toEqual('foo');
        expect(_trimBoth('___foo__', '__')).toEqual('foo');
        expect(_trimBoth('___foo__', '___')).toEqual('foo__');
        expect(_trimBoth('___foo__', '____')).toEqual('___foo__');

        expect(_trimBoth('\t\tThese are a few words :) ...  ')).toEqual('These are a few words :) ...');
        expect(_trimBoth('\t\tThese are a few words :) ...  ', ' ')).toEqual('\t\tThese are a few words :) ...');
        expect(_trimBoth('\t\tThese are a few words :) ...  ', '\t\t')).toEqual('These are a few words :) ...  ');
        expect(_trimBoth('\t\tThese are a few words :) ...  ', [' '])).toEqual('\t\tThese are a few words :) ...');
        expect(_trimBoth('\t\tThese are a few words :) ...  ', ['\t\t'])).toEqual('These are a few words :) ...  ');
        expect(_trimBoth('\t\tThese are a few words :) ...  ', [' ', '\t'])).toEqual('These are a few words :) ...');
        expect(_trimBoth('\t\tThese are a few words :) ...  ', [' ', '\t', '123'])).toEqual(
            'These are a few words :) ...'
        );

        expect(_trimBoth('\x09Example string\x0A')).toEqual('Example string');
    });
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function _trimLeft(value: string, characters: any = undefined): string {
    return strTrim(value, characters, STR_TRIM_LEFT);
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function _trimRight(value: string, characters: any = undefined): string {
    return strTrim(value, characters, STR_TRIM_RIGHT);
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function _trimBoth(value: string, characters: any = undefined): string {
    return strTrim(value, characters, STR_TRIM_BOTH);
}
