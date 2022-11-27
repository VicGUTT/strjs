import { describe, it, expect } from 'vitest';
import strRandom from '../../src/strRandom';

describe('str/strRandom', () => {
    it('works', () => {
        // if (!window.crypto) {
        //     // @ts-ignore
        //     window.crypto = {
        //         getRandomValues(buffer: Uint8Array): string {
        //             return require('crypto').randomFillSync(buffer);
        //         }
        //     };
        // }

        expect(strRandom(16).length).toEqual(16);

        const randomInteger = Math.floor(Math.random() * 100);

        expect(strRandom(randomInteger).length).toEqual(randomInteger);
        expect(/[a-zA-Z0-9]/.test(strRandom(randomInteger))).toEqual(true);
        expect(typeof strRandom(randomInteger)).toEqual('string');
    });
});
