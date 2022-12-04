import { describe, it, expect } from 'vitest';
import strReplaceFirst from '../../src/strReplaceFirst.js';

describe('str/strReplaceFirst', () => {
    it('works', () => {
        expect(strReplaceFirst('', 'abc', 'hello awesome world')).toEqual('hello awesome world');
        expect(strReplaceFirst('hello', '', 'hello awesome world')).toEqual(' awesome world');
        expect(strReplaceFirst('hello', 'abc', '')).toEqual('');

        expect(strReplaceFirst('1st', 'actual__1st', 'hey__1st__2nd_1st')).toEqual('hey__actual__1st__2nd_1st');

        expect(strReplaceFirst('bar', 'qux', 'foobar foobar')).toEqual('fooqux foobar');
        expect(strReplaceFirst('bar?', 'qux?', 'foo/bar? foo/bar?')).toEqual('foo/qux? foo/bar?');
        expect(strReplaceFirst('bar', '', 'foobar foobar')).toEqual('foo foobar');
        expect(strReplaceFirst('xxx', 'yyy', 'foobar foobar')).toEqual('foobar foobar');
        expect(strReplaceFirst('', 'yyy', 'foobar foobar')).toEqual('foobar foobar');
    });

    it('has multibyte string support', () => {
        expect(strReplaceFirst('ö', 'xxx', 'Jönköping Malmö')).toEqual('Jxxxnköping Malmö');
        expect(strReplaceFirst('', 'yyy', 'Jönköping Malmö')).toEqual('Jönköping Malmö');
    });

    it('is case sensitive', () => {
        expect(strReplaceFirst('r', 'ria', 'Victor')).toEqual('Victoria');
        expect(strReplaceFirst('R', 'ria', 'Victor')).toEqual('Victor');
    });
});
