import { describe, it, expect } from 'vitest';
import strIsAscii from '../../src/strIsAscii.js';
import asciiCharacters from '../__Fixtures/ascii-characters.js';
import nonAsciiCharacters from '../__Fixtures/non-ascii-characters.js';

describe('str/strIsAscii', () => {
    it('works', () => {
        expect(strIsAscii('Gutt')).toEqual(true);
        expect(strIsAscii('Gütt')).toEqual(false);
        expect(strIsAscii('ü')).toEqual(false);

        asciiCharacters.forEach((char) => {
            expect(strIsAscii(char)).toEqual(true);
            expect(strIsAscii(`Yo${char}lo`)).toEqual(true);
        });

        nonAsciiCharacters.forEach((char) => {
            expect(strIsAscii(char)).toEqual(false);
            expect(strIsAscii(`Yo${char}lo`)).toEqual(false);
        });
    });
});
