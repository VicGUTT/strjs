import { describe, it, expect } from 'vitest';
import strRtrim from '../../src/strRtrim.js';
import strTrim, { STR_TRIM_RIGHT } from '../../src/strTrim.js';

describe('str/strRtrim', () => {
    it('works', () => {
        expect(strRtrim('Hello World')).toEqual(strTrim('Hello World', undefined, STR_TRIM_RIGHT));
        expect(strRtrim(' foo ')).toEqual(strTrim(' foo ', undefined, STR_TRIM_RIGHT));

        expect(strRtrim(' ___foo ', '_')).toEqual(strTrim(' ___foo ', '_', STR_TRIM_RIGHT));
        expect(strRtrim('___foo ', '_')).toEqual(strTrim('___foo ', '_', STR_TRIM_RIGHT));
        expect(strRtrim('___foo ', '__')).toEqual(strTrim('___foo ', '__', STR_TRIM_RIGHT));
        expect(strRtrim('___foo ', '___')).toEqual(strTrim('___foo ', '___', STR_TRIM_RIGHT));
        expect(strRtrim('___foo ', '____')).toEqual(strTrim('___foo ', '____', STR_TRIM_RIGHT));
        expect(strRtrim(' ___foo ', ['_', ' '])).toEqual(strTrim(' ___foo ', ['_', ' '], STR_TRIM_RIGHT));

        expect(strRtrim(' foo___', '_')).toEqual(strTrim(' foo___', '_', STR_TRIM_RIGHT));
        expect(strRtrim(' foo___', '__')).toEqual(strTrim(' foo___', '__', STR_TRIM_RIGHT));
        expect(strRtrim(' foo___', '___')).toEqual(strTrim(' foo___', '___', STR_TRIM_RIGHT));
        expect(strRtrim(' foo___', '____')).toEqual(strTrim(' foo___', '____', STR_TRIM_RIGHT));
        expect(strRtrim(' foo___ ', ['_', ' '])).toEqual(strTrim(' foo___ ', ['_', ' '], STR_TRIM_RIGHT));

        expect(strRtrim('\t\tThese are a few words :) ...  ')).toEqual(
            strTrim('\t\tThese are a few words :) ...  ', undefined, STR_TRIM_RIGHT)
        );
        expect(strRtrim('\t\tThese are a few words :) ...  ', ' ')).toEqual(
            strTrim('\t\tThese are a few words :) ...  ', ' ', STR_TRIM_RIGHT)
        );
        expect(strRtrim('\t\tThese are a few words :) ...  ', '\t\t')).toEqual(
            strTrim('\t\tThese are a few words :) ...  ', '\t\t', STR_TRIM_RIGHT)
        );
        expect(strRtrim('\t\tThese are a few words :) ...  ', [' '])).toEqual(
            strTrim('\t\tThese are a few words :) ...  ', [' '], STR_TRIM_RIGHT)
        );
        expect(strRtrim('\t\tThese are a few words :) ...  ', ['\t\t'])).toEqual(
            strTrim('\t\tThese are a few words :) ...  ', ['\t\t'], STR_TRIM_RIGHT)
        );
        expect(strRtrim('\t\tThese are a few words :) ...  ', [' ', '\t'])).toEqual(
            strTrim('\t\tThese are a few words :) ...  ', [' ', '\t'], STR_TRIM_RIGHT)
        );
        expect(strRtrim('\t\tThese are a few words :) ...  ', [' ', '\t', '123'])).toEqual(
            strTrim('\t\tThese are a few words :) ...  ', [' ', '\t', '123'], STR_TRIM_RIGHT)
        );

        expect(strRtrim('\x09Example string\x0A')).toEqual(
            strTrim('\x09Example string\x0A', undefined, STR_TRIM_RIGHT)
        );
    });
});
