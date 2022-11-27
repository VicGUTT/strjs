import { describe, it, expect } from 'vitest';
import strContains from '../../src/strContains';

describe('str/strContains', () => {
    it('works', () => {
        expect(strContains('Victor', 'Vi')).toEqual(true);
        expect(strContains('Victor', 'ctor')).toEqual(true);
        expect(strContains('Victor', 'Victor')).toEqual(true);
        expect(strContains('Victor', ['Vi'])).toEqual(true);
        expect(strContains('Victor', ['ctor'])).toEqual(true);
        expect(strContains('Victor', ['Vi', 'ctor'])).toEqual(true);
        expect(strContains('Victor', ['xxx', 'Vi'])).toEqual(true);
        expect(strContains('Victor', ['xxx', 'ctor'])).toEqual(true);
        expect(strContains('Victor', ['xxx', 'Vi', 'ctor'])).toEqual(true);
        expect(strContains('Victor', ['Vi', 'xxx'])).toEqual(true);
        expect(strContains('Victor', ['ctor', 'xxx'])).toEqual(true);
        expect(strContains('Victor', ['Vi', 'ctor', 'xxx'])).toEqual(true);

        expect(strContains('Victor', 'xxx')).toEqual(false);
        expect(strContains('Victor', ['xxx'])).toEqual(false);
        expect(strContains('Victor', '')).toEqual(false);
        expect(strContains('', '')).toEqual(false);

        expect(strContains('Victor', 'Vi ')).toEqual(false);
        expect(strContains('Victor', ' Vi')).toEqual(false);
        expect(strContains('Victor', ' Victor')).toEqual(false);
        expect(strContains('Victor', 'Victor ')).toEqual(false);

        expect(strContains('Victor', ['Vi '])).toEqual(false);
        expect(strContains('Victor', [' Vi'])).toEqual(false);
        expect(strContains('Victor', [' Victor'])).toEqual(false);
        expect(strContains('Victor', ['Victor '])).toEqual(false);
    });

    it('is case sensitive', () => {
        expect(strContains('Victor', 'vic')).toEqual(false);
        expect(strContains('victor', 'Vic')).toEqual(false);

        expect(strContains('Victor', 'toR')).toEqual(false);
        expect(strContains('victor', 'Tor')).toEqual(false);

        expect(strContains('Victor', 'victor')).toEqual(false);
        expect(strContains('victor', 'Victor')).toEqual(false);

        expect(strContains('Victor', ['vic'])).toEqual(false);
        expect(strContains('victor', ['Vic'])).toEqual(false);

        expect(strContains('Victor', ['toR'])).toEqual(false);
        expect(strContains('victor', ['Tor'])).toEqual(false);

        expect(strContains('Victor', ['victor'])).toEqual(false);
        expect(strContains('victor', ['Victor'])).toEqual(false);

        expect(strContains('Victor', ['xxx', 'vic'])).toEqual(false);
        expect(strContains('victor', ['xxx', 'Vic'])).toEqual(false);

        expect(strContains('Victor', ['xxx', 'toR'])).toEqual(false);
        expect(strContains('victor', ['xxx', 'Tor'])).toEqual(false);

        expect(strContains('Victor', ['xxx', 'victor'])).toEqual(false);
        expect(strContains('victor', ['xxx', 'Victor'])).toEqual(false);

        expect(strContains('Victor', ['vic', 'xxx'])).toEqual(false);
        expect(strContains('victor', ['Vic', 'xxx'])).toEqual(false);

        expect(strContains('Victor', ['toR', 'xxx'])).toEqual(false);
        expect(strContains('victor', ['Tor', 'xxx'])).toEqual(false);

        expect(strContains('Victor', ['victor', 'xxx'])).toEqual(false);
        expect(strContains('victor', ['Victor', 'xxx'])).toEqual(false);
    });
});
