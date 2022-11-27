import { describe, it, expect } from 'vitest';
import strBeforeLast from '../../src/strBeforeLast';
import strPortion from '../../src/strPortion';

const _strPortion = (subject: string, search: string) => strPortion(subject, search, true, false);

describe('str/strBeforeLast', () => {
    it('works', () => {
        expect(strBeforeLast('yvette', 'tte')).toEqual(_strPortion('yvette', 'tte'));
        expect(strBeforeLast('yvette', 't')).toEqual(_strPortion('yvette', 't'));
        expect(strBeforeLast('ééé yvette', 'yve')).toEqual(_strPortion('ééé yvette', 'yve'));
        expect(strBeforeLast('yvette', 'yve')).toEqual(_strPortion('yvette', 'yve'));
        expect(strBeforeLast('yvette', 'xxxx')).toEqual(_strPortion('yvette', 'xxxx'));
        expect(strBeforeLast('yvette', '')).toEqual(_strPortion('yvette', ''));
        expect(strBeforeLast('yv0et0te', '0')).toEqual(_strPortion('yv0et0te', '0'));
        expect(strBeforeLast('yv2et2te', '2')).toEqual(_strPortion('yv2et2te', '2'));
    });

    it('returns an empty string if an empty string is given as the subject', () => {
        expect(strBeforeLast('', 'hey')).toEqual(_strPortion('', 'hey'));
        expect(strBeforeLast('', '')).toEqual(_strPortion('', ''));
    });

    it('returns the subject if an empty string is given as the search target', () => {
        expect(strBeforeLast('hey', '')).toEqual(_strPortion('hey', ''));
    });

    it('returns an empty string if the subject and the search target are the same', () => {
        expect(strBeforeLast('hey', 'hey')).toEqual(_strPortion('hey', 'hey'));
    });

    it('returns the subject if the given string is not a substring of the subject', () => {
        expect(strBeforeLast('hannah', '')).toEqual(_strPortion('hannah', ''));
        expect(strBeforeLast('hannah', 'nax')).toEqual(_strPortion('hannah', 'nax'));
        expect(strBeforeLast('hannah', 'xna')).toEqual(_strPortion('hannah', 'xna'));
        expect(strBeforeLast('hannah', 'na ')).toEqual(_strPortion('hannah', 'na '));
        expect(strBeforeLast('hannah', ' na')).toEqual(_strPortion('hannah', ' na'));
        expect(strBeforeLast('hannah', 'xxxx')).toEqual(_strPortion('hannah', 'xxxx'));
    });
});
