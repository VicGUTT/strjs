import { describe, it, expect } from 'vitest';
import strUcwords from '../../src/strUcwords';
import strUpperWords from '../../src/strUpperWords';

describe('str/strUpperWords', () => {
    it('works', () => {
        expect(strUpperWords).toEqual(strUcwords);

        expect(strUpperWords('hello world!')).toEqual(strUcwords('hello world!'));
        expect(strUpperWords('HELLO WORLD!')).toEqual(strUcwords('HELLO WORLD!'));

        expect(strUpperWords('hello|world!')).toEqual(strUcwords('hello|world!'));
        expect(strUpperWords('hello|world!', '|')).toEqual(strUcwords('hello|world!', '|'));

        expect(strUpperWords("mike o'hara")).toEqual(strUcwords("mike o'hara"));
        expect(strUpperWords("mike o'hara", [' ', "'"])).toEqual(strUcwords("mike o'hara", [' ', "'"]));
    });
});
