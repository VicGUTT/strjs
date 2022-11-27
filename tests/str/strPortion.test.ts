import { describe, it, expect } from 'vitest';
import strPortion from '../../src/strPortion';

describe('str/strPortion', () => {
    it('works as a long form of `strBefore`', () => {
        expect(strPortion('hannah', 'nah', true, true)).toEqual('han');
        expect(strPortion('hannah', 'n', true, true)).toEqual('ha');
        expect(strPortion('ééé hannah', 'han', true, true)).toEqual('ééé ');
        expect(strPortion('hannah', 'xxxx', true, true)).toEqual('hannah');
        expect(strPortion('hannah', '', true, true)).toEqual('hannah');
        expect(strPortion('han0nah', '0', true, true)).toEqual('han');
        expect(strPortion('han2nah', '2', true, true)).toEqual('han');
    });

    it('works as a long form of `strBeforeLast`', () => {
        expect(strPortion('yvette', 'tte', true, false)).toEqual('yve');
        expect(strPortion('yvette', 't', true, false)).toEqual('yvet');
        expect(strPortion('ééé yvette', 'yve', true, false)).toEqual('ééé ');
        expect(strPortion('yvette', 'yve', true, false)).toEqual('');
        expect(strPortion('yvette', 'xxxx', true, false)).toEqual('yvette');
        expect(strPortion('yvette', '', true, false)).toEqual('yvette');
        expect(strPortion('yv0et0te', '0', true, false)).toEqual('yv0et');
        expect(strPortion('yv2et2te', '2', true, false)).toEqual('yv2et');
    });

    it('works as a long form of `strAfter`', () => {
        expect(strPortion('hannah', 'han', false, true)).toEqual('nah');
        expect(strPortion('hannah', 'n', false, true)).toEqual('nah');
        expect(strPortion('ééé hannah', 'han', false, true)).toEqual('nah');
        expect(strPortion('han0nah', '0', false, true)).toEqual('nah');
        expect(strPortion('han2nah', '2', false, true)).toEqual('nah');
    });

    it('works as a long form of `strAfterLast`', () => {
        expect(strPortion('yvette', 'yve', false, false)).toEqual('tte');
        expect(strPortion('yvette', 't', false, false)).toEqual('e');
        expect(strPortion('ééé yvette', 't', false, false)).toEqual('e');
        expect(strPortion('yvette', 'tte', false, false)).toEqual('');
        expect(strPortion('yvette', 'xxxx', false, false)).toEqual('yvette');
        expect(strPortion('yvette', '', false, false)).toEqual('yvette');
        expect(strPortion('yv0et0te', '0', false, false)).toEqual('te');
        expect(strPortion('yv2et2te', '2', false, false)).toEqual('te');
        expect(strPortion('----foo', '---', false, false)).toEqual('foo');

        expect(strPortion('hannah', 'han', false, false)).toEqual('nah');
        expect(strPortion('hannah', 'n', false, false)).toEqual('ah');
        expect(strPortion('ééé hannah', 'han', false, false)).toEqual('nah');
        expect(strPortion('han0nah', '0', false, false)).toEqual('nah');
        expect(strPortion('han2nah', '2', false, false)).toEqual('nah');
    });

    it('returns an empty string if an empty string is given as the subject', () => {
        expect(strPortion('', 'hey', true, true)).toEqual('');
        expect(strPortion('', 'hey', true, false)).toEqual('');
        expect(strPortion('', 'hey', false, true)).toEqual('');
        expect(strPortion('', 'hey', false, false)).toEqual('');

        expect(strPortion('', '', true, true)).toEqual('');
        expect(strPortion('', '', true, false)).toEqual('');
        expect(strPortion('', '', false, true)).toEqual('');
        expect(strPortion('', '', false, false)).toEqual('');
    });

    it('returns the subject if an empty string is given as the search target', () => {
        expect(strPortion('hey', '', true, true)).toEqual('hey');
        expect(strPortion('hey', '', true, false)).toEqual('hey');
        expect(strPortion('hey', '', false, true)).toEqual('hey');
        expect(strPortion('hey', '', false, false)).toEqual('hey');
    });

    it('returns an empty string if the subject and the search target are the same', () => {
        expect(strPortion('hey', 'hey', true, true)).toEqual('');
        expect(strPortion('hey', 'hey', true, false)).toEqual('');
        expect(strPortion('hey', 'hey', false, true)).toEqual('');
        expect(strPortion('hey', 'hey', false, false)).toEqual('');
    });

    it('returns the subject if the given string is not a substring of the subject', () => {
        expect(strPortion('hannah', '', true, true)).toEqual('hannah');
        expect(strPortion('hannah', '', true, false)).toEqual('hannah');
        expect(strPortion('hannah', '', false, true)).toEqual('hannah');
        expect(strPortion('hannah', '', false, false)).toEqual('hannah');

        expect(strPortion('hannah', 'nax', true, true)).toEqual('hannah');
        expect(strPortion('hannah', 'nax', true, false)).toEqual('hannah');
        expect(strPortion('hannah', 'nax', false, true)).toEqual('hannah');
        expect(strPortion('hannah', 'nax', false, false)).toEqual('hannah');

        expect(strPortion('hannah', 'xna', true, true)).toEqual('hannah');
        expect(strPortion('hannah', 'xna', true, false)).toEqual('hannah');
        expect(strPortion('hannah', 'xna', false, true)).toEqual('hannah');
        expect(strPortion('hannah', 'xna', false, false)).toEqual('hannah');

        expect(strPortion('hannah', 'na ', true, true)).toEqual('hannah');
        expect(strPortion('hannah', 'na ', true, false)).toEqual('hannah');
        expect(strPortion('hannah', 'na ', false, true)).toEqual('hannah');
        expect(strPortion('hannah', 'na ', false, false)).toEqual('hannah');

        expect(strPortion('hannah', ' na', true, true)).toEqual('hannah');
        expect(strPortion('hannah', ' na', true, false)).toEqual('hannah');
        expect(strPortion('hannah', ' na', false, true)).toEqual('hannah');
        expect(strPortion('hannah', ' na', false, false)).toEqual('hannah');

        expect(strPortion('hannah', 'xxxx', true, true)).toEqual('hannah');
        expect(strPortion('hannah', 'xxxx', true, false)).toEqual('hannah');
        expect(strPortion('hannah', 'xxxx', false, true)).toEqual('hannah');
        expect(strPortion('hannah', 'xxxx', false, false)).toEqual('hannah');
    });
});
