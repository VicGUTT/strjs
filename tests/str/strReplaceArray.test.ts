import strReplaceArray from '../../src/strReplaceArray';

describe('str:strReplaceArray', () => {
    it('works', () => {
        expect(strReplaceArray('?', ['foo', 'bar', 'baz'], '?/?/?')).toEqual('foo/bar/baz');
        expect(strReplaceArray('?', ['foo', 'bar', 'baz'], '?/?/?/?')).toEqual('foo/bar/baz/?');
        expect(strReplaceArray('?', ['foo', 'bar', 'baz'], '?/?')).toEqual('foo/bar');
        expect(strReplaceArray('x', ['foo', 'bar', 'baz'], '?/?/?')).toEqual('?/?/?');
        expect(strReplaceArray('?', [], '?/?/?')).toEqual('?/?/?');

        expect(strReplaceArray('?', ['8:30', '9:00'], 'The event will take place between ? and ?')).toEqual(
            'The event will take place between 8:30 and 9:00'
        );

        // Ensure recursive replacements are avoided
        expect(strReplaceArray('?', ['foo?', 'bar', 'baz'], '?/?/?')).toEqual('foo?/bar/baz');

        // TODO: Add Object support ?

        // Test for associative array support
        // expect(strReplaceArray('?', [1 => 'foo', 2 => 'bar'], '?/?')).toEqual('foo/bar');
        // expect(strReplaceArray('?', ['x' => 'foo', 'y' => 'bar'], '?/?')).toEqual('foo/bar');
    });
});
