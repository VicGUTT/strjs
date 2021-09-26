import strBefore from '../../src/strBefore';
import strPortion from '../../src/strPortion';

const _strPortion = (subject: string, search: string) => strPortion(subject, search, true, true);

describe('str:strBefore', () => {
    it('works', () => {
        expect(strBefore('hannah', 'nah')).toEqual(_strPortion('hannah', 'nah'));
        expect(strBefore('hannah', 'n')).toEqual(_strPortion('hannah', 'n'));
        expect(strBefore('ééé hannah', 'han')).toEqual(_strPortion('ééé hannah', 'han'));
        expect(strBefore('hannah', 'xxxx')).toEqual(_strPortion('hannah', 'xxxx'));
        expect(strBefore('hannah', '')).toEqual(_strPortion('hannah', ''));
        expect(strBefore('han0nah', '0')).toEqual(_strPortion('han0nah', '0'));
        expect(strBefore('han2nah', '2')).toEqual(_strPortion('han2nah', '2'));
    });

    it('returns an empty string if an empty string is given as the subject', () => {
        expect(strBefore('', 'hey')).toEqual(_strPortion('', 'hey'));
        expect(strBefore('', '')).toEqual(_strPortion('', ''));
    });

    it('returns the subject if an empty string is given as the search target', () => {
        expect(strBefore('hey', '')).toEqual(_strPortion('hey', ''));
    });

    it('returns an empty string if the subject and the search target are the same', () => {
        expect(strBefore('hey', 'hey')).toEqual(_strPortion('hey', 'hey'));
    });

    it('returns the subject if the given string is not a substring of the subject', () => {
        expect(strBefore('hannah', '')).toEqual(_strPortion('hannah', ''));
        expect(strBefore('hannah', 'nax')).toEqual(_strPortion('hannah', 'nax'));
        expect(strBefore('hannah', 'xna')).toEqual(_strPortion('hannah', 'xna'));
        expect(strBefore('hannah', 'na ')).toEqual(_strPortion('hannah', 'na '));
        expect(strBefore('hannah', ' na')).toEqual(_strPortion('hannah', ' na'));
        expect(strBefore('hannah', 'xxxx')).toEqual(_strPortion('hannah', 'xxxx'));
    });
});
