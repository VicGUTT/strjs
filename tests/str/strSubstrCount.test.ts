import { describe, it, expect } from 'vitest';
import strSubstrCount from '../../src/strSubstrCount.js';

describe('str/strSubstrCount', () => {
    it('works', () => {
        expect(strSubstrCount('This is a string.', ' is')).toEqual(1);
        expect(strSubstrCount('This is a string.', 'is ')).toEqual(2);
        expect(strSubstrCount('This is a string.', ' is ')).toEqual(1);
        expect(strSubstrCount('This is a string.', 'is')).toEqual(2);
        expect(strSubstrCount('laravelPHPFramework', 'a')).toEqual(3);
        expect(strSubstrCount('laravelPHPFramework', 'z')).toEqual(0);

        expect(strSubstrCount('laravelPHPFramework', 'l', -'PHPFramework'.length)).toEqual(0);
        expect(strSubstrCount('laravelPHPFramework', 'l', -'lPHPFramework'.length)).toEqual(1);
        expect(strSubstrCount('laravelPHPFramework', 'l', -'elPHPFramework'.length)).toEqual(1);
        expect(strSubstrCount('laravelPHPFramework', 'l', -1)).toEqual(0);
        expect(strSubstrCount('laravelPHPFramework', 'l', 0)).toEqual(2);
        expect(strSubstrCount('laravelPHPFramework', 'l', 1)).toEqual(1);
        expect(strSubstrCount('laravelPHPFramework', 'l', 2)).toEqual(1);
        expect(strSubstrCount('laravelPHPFramework', 'l', 3)).toEqual(1);
        expect(strSubstrCount('laravelPHPFramework', 'l', 4)).toEqual(1);
        expect(strSubstrCount('laravelPHPFramework', 'l', 5)).toEqual(1);
        expect(strSubstrCount('laravelPHPFramework', 'l', 6)).toEqual(1);
        expect(strSubstrCount('laravelPHPFramework', 'l', 7)).toEqual(0);
        expect(strSubstrCount('laravelPHPFramework', 'z', 2)).toEqual(0);
        expect(strSubstrCount('laravelPHPFramework', 'k', -1)).toEqual(1);
        expect(strSubstrCount('laravelPHPFramework', 'r', -2)).toEqual(1);

        expect(strSubstrCount('laravelPHPFramework', 'a', 0, 0)).toEqual(0);
        expect(strSubstrCount('laravelPHPFramework', 'a', 0, 1)).toEqual(0);
        expect(strSubstrCount('laravelPHPFramework', 'a', 0, 2)).toEqual(1);
        expect(strSubstrCount('laravelPHPFramework', 'a', 0, 3)).toEqual(1);
        expect(strSubstrCount('laravelPHPFramework', 'a', 0, 4)).toEqual(2);

        expect(strSubstrCount('laravelPHPFramework', 'a', 1, 0)).toEqual(0);
        expect(strSubstrCount('laravelPHPFramework', 'a', 1, 1)).toEqual(1);
        expect(strSubstrCount('laravelPHPFramework', 'a', 1, 2)).toEqual(1);
        expect(strSubstrCount('laravelPHPFramework', 'a', 1, 3)).toEqual(2);
        expect(strSubstrCount('laravelPHPFramework', 'a', 1, 4)).toEqual(2);
        expect(strSubstrCount('laravelPHPFramework', 'a', 1, 5)).toEqual(2);
        expect(strSubstrCount('laravelPHPFramework', 'a', 1, 'laravelPHPFra'.length)).toEqual(3);
        expect(strSubstrCount('laravelPHPFramework', 'a', 1, -2)).toEqual(3);
        expect(strSubstrCount('laravelPHPFramework', 'a', -10, -3)).toEqual(1);
    });

    it('is case sensitive', () => {
        expect(strSubstrCount('This is a string.', ' Is')).toEqual(0);
        expect(strSubstrCount('This is a string.', ' iS')).toEqual(0);

        expect(strSubstrCount('laravelPHPFramework', 'L', 1)).toEqual(0);
        expect(strSubstrCount('laravelPHPFramework', 'L', 2)).toEqual(0);
        expect(strSubstrCount('laravelPHPFramework', 'L', 7)).toEqual(0);
        expect(strSubstrCount('laravelPHPFramework', 'K', -1)).toEqual(0);
        expect(strSubstrCount('laravelPHPFramework', 'R', -2)).toEqual(0);

        expect(strSubstrCount('laravelPHPFramework', 'A', 1, 2)).toEqual(0);
        expect(strSubstrCount('laravelPHPFramework', 'A', 1, 2)).toEqual(0);
        expect(strSubstrCount('laravelPHPFramework', 'A', 1, -2)).toEqual(0);
        expect(strSubstrCount('laravelPHPFramework', 'A', -10, -3)).toEqual(0);
    });
});
