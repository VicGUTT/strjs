import { describe, it, expect } from 'vitest';
import strAfterLast from '../../src/strAfterLast';
import strPortion from '../../src/strPortion';

const _strPortion = (subject: string, search: string) => strPortion(subject, search, false, false);

describe('str/strAfterLast', () => {
    it('works', () => {
        expect(strAfterLast('yvette', 'yve')).toEqual(_strPortion('yvette', 'yve'));
        expect(strAfterLast('yvette', 't')).toEqual(_strPortion('yvette', 't'));
        expect(strAfterLast('ééé yvette', 't')).toEqual(_strPortion('ééé yvette', 't'));
        expect(strAfterLast('yvette', 'tte')).toEqual(_strPortion('yvette', 'tte'));
        expect(strAfterLast('yvette', 'xxxx')).toEqual(_strPortion('yvette', 'xxxx'));
        expect(strAfterLast('yvette', '')).toEqual(_strPortion('yvette', ''));
        expect(strAfterLast('yv0et0te', '0')).toEqual(_strPortion('yv0et0te', '0'));
        expect(strAfterLast('yv2et2te', '2')).toEqual(_strPortion('yv2et2te', '2'));
        expect(strAfterLast('----foo', '---')).toEqual(_strPortion('----foo', '---'));

        expect(strAfterLast('hannah', 'han')).toEqual(_strPortion('hannah', 'han'));
        expect(strAfterLast('hannah', 'n')).toEqual(_strPortion('hannah', 'n'));
        expect(strAfterLast('ééé hannah', 'han')).toEqual(_strPortion('ééé hannah', 'han'));
        expect(strAfterLast('han0nah', '0')).toEqual(_strPortion('han0nah', '0'));
        expect(strAfterLast('han2nah', '2')).toEqual(_strPortion('han2nah', '2'));
    });

    it('returns an empty string if an empty string is given as the subject', () => {
        expect(strAfterLast('', 'hey')).toEqual(_strPortion('', 'hey'));
        expect(strAfterLast('', '')).toEqual(_strPortion('', ''));
    });

    it('returns the subject if an empty string is given as the search target', () => {
        expect(strAfterLast('hey', '')).toEqual(_strPortion('hey', ''));
    });

    it('returns an empty string if the subject and the search target are the same', () => {
        expect(strAfterLast('hey', 'hey')).toEqual(_strPortion('hey', 'hey'));
    });

    it('returns the subject if the given string is not a substring of the subject', () => {
        expect(strAfterLast('hannah', '')).toEqual(_strPortion('hannah', ''));
        expect(strAfterLast('hannah', 'nax')).toEqual(_strPortion('hannah', 'nax'));
        expect(strAfterLast('hannah', 'xna')).toEqual(_strPortion('hannah', 'xna'));
        expect(strAfterLast('hannah', 'na ')).toEqual(_strPortion('hannah', 'na '));
        expect(strAfterLast('hannah', ' na')).toEqual(_strPortion('hannah', ' na'));
        expect(strAfterLast('hannah', 'xxxx')).toEqual(_strPortion('hannah', 'xxxx'));
    });
});
