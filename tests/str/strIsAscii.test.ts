import strIsAscii from '../../src/strIsAscii';
import asciiCharacters from '../__Fixtures/ascii-characters';
import nonAsciiCharacters from '../__Fixtures/non-ascii-characters';

describe('str:strIsAscii', () => {
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
