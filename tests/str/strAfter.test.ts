import strAfter from '../../src/strAfter';
import strPortion from '../../src/strPortion';

const _strPortion = (subject: string, search: string) => strPortion(subject, search, false, true);

describe('str:strAfter', () => {
    it('works', () => {
        expect(strAfter('hannah', 'han')).toEqual(_strPortion('hannah', 'han'));
        expect(strAfter('hannah', 'n')).toEqual(_strPortion('hannah', 'n'));
        expect(strAfter('ééé hannah', 'han')).toEqual(_strPortion('ééé hannah', 'han'));
        expect(strAfter('han0nah', '0')).toEqual(_strPortion('han0nah', '0'));
        expect(strAfter('han2nah', '2')).toEqual(_strPortion('han2nah', '2'));
    });

    it('returns an empty string if an empty string is given as the subject', () => {
        expect(strAfter('', 'hey')).toEqual(_strPortion('', 'hey'));
        expect(strAfter('', '')).toEqual(_strPortion('', ''));
    });

    it('returns the subject if an empty string is given as the search target', () => {
        expect(strAfter('hey', '')).toEqual(_strPortion('hey', ''));
    });

    it('returns an empty string if the subject and the search target are the same', () => {
        expect(strAfter('hey', 'hey')).toEqual(_strPortion('hey', 'hey'));
    });

    it('returns the subject if the given string is not a substring of the subject', () => {
        expect(strAfter('hannah', '')).toEqual(_strPortion('hannah', ''));
        expect(strAfter('hannah', 'nax')).toEqual(_strPortion('hannah', 'nax'));
        expect(strAfter('hannah', 'xna')).toEqual(_strPortion('hannah', 'xna'));
        expect(strAfter('hannah', 'na ')).toEqual(_strPortion('hannah', 'na '));
        expect(strAfter('hannah', ' na')).toEqual(_strPortion('hannah', ' na'));
        expect(strAfter('hannah', 'xxxx')).toEqual(_strPortion('hannah', 'xxxx'));
    });
});
