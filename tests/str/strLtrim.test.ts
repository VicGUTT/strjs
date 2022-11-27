import { describe, it, expect } from 'vitest';
import strLtrim from '../../src/strLtrim';
import strTrim, { STR_TRIM_LEFT } from '../../src/strTrim';

describe('str/strLtrim', () => {
    it('works', () => {
        expect(strLtrim('Hello World')).toEqual(strTrim('Hello World', undefined, STR_TRIM_LEFT));
        expect(strLtrim(' foo ')).toEqual(strTrim(' foo ', undefined, STR_TRIM_LEFT));

        expect(strLtrim(' ___foo ', '_')).toEqual(strTrim(' ___foo ', '_', STR_TRIM_LEFT));
        expect(strLtrim('___foo ', '_')).toEqual(strTrim('___foo ', '_', STR_TRIM_LEFT));
        expect(strLtrim('___foo ', '__')).toEqual(strTrim('___foo ', '__', STR_TRIM_LEFT));
        expect(strLtrim('___foo ', '___')).toEqual(strTrim('___foo ', '___', STR_TRIM_LEFT));
        expect(strLtrim('___foo ', '____')).toEqual(strTrim('___foo ', '____', STR_TRIM_LEFT));
        expect(strLtrim(' ___foo ', ['_', ' '])).toEqual(strTrim(' ___foo ', ['_', ' '], STR_TRIM_LEFT));

        expect(strLtrim(' foo___', '_')).toEqual(strTrim(' foo___', '_', STR_TRIM_LEFT));
        expect(strLtrim(' foo___', '__')).toEqual(strTrim(' foo___', '__', STR_TRIM_LEFT));
        expect(strLtrim(' foo___', '___')).toEqual(strTrim(' foo___', '___', STR_TRIM_LEFT));
        expect(strLtrim(' foo___', '____')).toEqual(strTrim(' foo___', '____', STR_TRIM_LEFT));
        expect(strLtrim(' foo___ ', ['_', ' '])).toEqual(strTrim(' foo___ ', ['_', ' '], STR_TRIM_LEFT));

        expect(strLtrim('\t\tThese are a few words :) ...  ')).toEqual(
            strTrim('\t\tThese are a few words :) ...  ', undefined, STR_TRIM_LEFT)
        );
        expect(strLtrim('\t\tThese are a few words :) ...  ', ' ')).toEqual(
            strTrim('\t\tThese are a few words :) ...  ', ' ', STR_TRIM_LEFT)
        );
        expect(strLtrim('\t\tThese are a few words :) ...  ', '\t\t')).toEqual(
            strTrim('\t\tThese are a few words :) ...  ', '\t\t', STR_TRIM_LEFT)
        );
        expect(strLtrim('\t\tThese are a few words :) ...  ', [' '])).toEqual(
            strTrim('\t\tThese are a few words :) ...  ', [' '], STR_TRIM_LEFT)
        );
        expect(strLtrim('\t\tThese are a few words :) ...  ', ['\t\t'])).toEqual(
            strTrim('\t\tThese are a few words :) ...  ', ['\t\t'], STR_TRIM_LEFT)
        );
        expect(strLtrim('\t\tThese are a few words :) ...  ', [' ', '\t'])).toEqual(
            strTrim('\t\tThese are a few words :) ...  ', [' ', '\t'], STR_TRIM_LEFT)
        );
        expect(strLtrim('\t\tThese are a few words :) ...  ', [' ', '\t', '123'])).toEqual(
            strTrim('\t\tThese are a few words :) ...  ', [' ', '\t', '123'], STR_TRIM_LEFT)
        );

        expect(strLtrim('\x09Example string\x0A')).toEqual(strTrim('\x09Example string\x0A', undefined, STR_TRIM_LEFT));
    });
});
