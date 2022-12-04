import { describe, it, expect } from 'vitest';
import strRemove from '../../src/strRemove.js';

describe('str/strRemove', () => {
    it('works', () => {
        expect(strRemove('o', 'Foobar')).toEqual('Fbar');
        expect(strRemove('bar', 'Foobar')).toEqual('Foo');
        expect(strRemove('F', 'Foobar')).toEqual('oobar');
        expect(strRemove('f', 'Foobar')).toEqual('Foobar');
        expect(strRemove('f', 'Foobar', false)).toEqual('oobar');

        expect(strRemove(['o', 'a'], 'Foobar')).toEqual('Fbr');
        expect(strRemove(['f', 'b'], 'Foobar')).toEqual('Fooar');
        expect(strRemove(['f', 'b'], 'Foobar', false)).toEqual('ooar');
        expect(strRemove(['f', '|'], 'Foo|bar')).toEqual('Foobar');
    });
});
