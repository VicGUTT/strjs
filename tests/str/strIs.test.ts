import { describe, it, expect } from 'vitest';
import strIs from '../../src/strIs.js';

describe('str/strIs', () => {
    it('works', () => {
        expect(strIs('/', '/')).toEqual(true);
        expect(strIs('/', ' /')).toEqual(false);
        expect(strIs('/', '/a')).toEqual(false);
        expect(strIs('foo/*', 'foo/bar/baz')).toEqual(true);

        expect(strIs('*@*', 'App\\Class@method')).toEqual(true);
        expect(strIs('*@*', 'app\\Class@')).toEqual(true);
        expect(strIs('*@*', '@method')).toEqual(true);

        expect(strIs('*/foo', 'blah/baz/foo')).toEqual(true);
    });

    it('is case sensitive', () => {
        expect(strIs('*baz*', 'foo/bar/baz')).toEqual(true);
        expect(strIs('*foo*', 'foo/bar/baz')).toEqual(true);
        expect(strIs('a', 'a')).toEqual(true);
        expect(strIs('A', 'A')).toEqual(true);

        expect(strIs('*FOO*', 'foo/bar/baz')).toEqual(false);
        expect(strIs('A', 'a')).toEqual(false);
        expect(strIs('a', 'A')).toEqual(false);

        expect(strIs('*Baz*', 'foo/bar/baz')).toEqual(false);
        expect(strIs('*BAz*', 'foo/bar/baz')).toEqual(false);
        expect(strIs('*BAZ*', 'foo/bar/baz')).toEqual(false);
        expect(strIs('*BaZ*', 'foo/bar/baz')).toEqual(false);
        expect(strIs('*baZ*', 'foo/bar/baz')).toEqual(false);
        expect(strIs('*bAZ*', 'foo/bar/baz')).toEqual(false);
    });

    it('accepts an array of patterns', () => {
        expect(strIs(['a*', 'b*'], 'a/')).toEqual(true);
        expect(strIs(['a*', 'b*'], 'b/')).toEqual(true);
        expect(strIs(['a*', 'b*'], 'f/')).toEqual(false);
        expect(strIs(['x*', 'y*'], 'z/')).toEqual(false);
    });

    it('accepts numeric values and patterns', () => {
        expect(strIs(['a*', 'b*'], '123')).toEqual(false);
        expect(strIs(['*2*', 'b*'], '11211')).toEqual(true);
    });

    it('accepts empty patterns', () => {
        expect(strIs([], 'test')).toEqual(false);
    });
});
