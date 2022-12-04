import { describe, it, expect } from 'vitest';
import strBetween from '../../src/strBetween.js';

describe('str/strBetween', () => {
    it('works', () => {
        expect(strBetween('abc', 'a', 'c')).toEqual('b');
        expect(strBetween('dddabc', 'a', 'c')).toEqual('b');
        expect(strBetween('abcddd', 'a', 'c')).toEqual('b');
        expect(strBetween('dddabcddd', 'a', 'c')).toEqual('b');
        expect(strBetween('hannah', 'ha', 'ah')).toEqual('nn');
        expect(strBetween('[a]ab[b]', '[', ']')).toEqual('a]ab[b');
        expect(strBetween('foofoobar', 'foo', 'bar')).toEqual('foo');
        expect(strBetween('foobarbar', 'foo', 'bar')).toEqual('bar');
    });

    it('returns an empty string if an empty string is given as the subject', () => {
        expect(strBetween('', 'hey', '')).toEqual('');
        expect(strBetween('', '', 'hey')).toEqual('');
        expect(strBetween('', '', '')).toEqual('');
    });

    it('returns the subject if empty strings other than the subject are given', () => {
        expect(strBetween('abc', '', 'c')).toEqual('abc');
        expect(strBetween('abc', 'a', '')).toEqual('abc');
        expect(strBetween('abc', '', '')).toEqual('abc');
    });

    it('returns an empty string if the subject and any of the search targets are the same', () => {
        expect(strBetween('abc', 'abc', 'abc')).toEqual('');
    });

    it('returns an empty string if any of the search targets are not a substring of the subject', () => {
        expect(strBetween('abc', 'abc', 'xabc')).toEqual('');
        expect(strBetween('abc', 'abc', 'abcx')).toEqual('');
        expect(strBetween('abc', 'abc', 'xxx')).toEqual('');

        expect(strBetween('abc', 'xabc', 'abc')).toEqual('');
        expect(strBetween('abc', 'abcx', 'abc')).toEqual('');
        expect(strBetween('abc', 'xxx', 'abc')).toEqual('');
    });
});
