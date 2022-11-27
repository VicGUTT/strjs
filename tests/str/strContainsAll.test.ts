import { describe, it, expect } from 'vitest';
import strContainsAll from '../../src/strContainsAll';

describe('str/strContainsAll', () => {
    it('works', () => {
        expect(strContainsAll('Victor Gutt', ['Victor', 'Gutt'])).toEqual(true);
        expect(strContainsAll('Victor Gutt', ['Victor'])).toEqual(true);

        expect(strContainsAll('Victor Gutt', ['Victor', 'Gutt '])).toEqual(false);
        expect(strContainsAll('Victor Gutt', [' Victor'])).toEqual(false);
        expect(strContainsAll('Victor Gutt', ['Victor', 'xxx'])).toEqual(false);
    });

    it('is case sensitive', () => {
        expect(strContainsAll('Victor Gutt', ['victor', 'Gutt'])).toEqual(false);
        expect(strContainsAll('Victor Gutt', ['Victor', 'gutt'])).toEqual(false);
        expect(strContainsAll('Victor Gutt', ['victor', 'gutt'])).toEqual(false);

        expect(strContainsAll('victor Gutt', ['Victor', 'Gutt'])).toEqual(false);
        expect(strContainsAll('Victor gutt', ['Victor', 'Gutt'])).toEqual(false);
        expect(strContainsAll('victor gutt', ['Victor', 'Gutt'])).toEqual(false);
    });
});
