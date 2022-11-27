import { describe, it, expect } from 'vitest';
import strWords from '../../src/strWords';

describe('str/strWords', () => {
    it('works', () => {
        expect(strWords('', 1)).toEqual('');
        expect(strWords(' ', 1)).toEqual(' ');
        expect(strWords('Victor Gutt', 0)).toEqual('Victor Gutt');
        expect(strWords('Victor Gutt', 1)).toEqual('Victor ...');
        expect(strWords('Victor Gutt', 1, '___')).toEqual('Victor ___');
        expect(strWords('Victor Gutt', 3)).toEqual('Victor Gutt');
        expect(strWords('Victor Gutt', 999)).toEqual('Victor Gutt');

        expect(strWords('', -1)).toEqual('');
        expect(strWords(' ', -1)).toEqual(' ');
        expect(strWords('Victor Gutt', -0)).toEqual('Victor Gutt');
        expect(strWords('Victor Gutt', -1)).toEqual('Victor Gutt');
        expect(strWords('Victor Gutt', -1, '___')).toEqual('Victor Gutt');
        expect(strWords('Victor Gutt', -3)).toEqual('Victor Gutt');
        expect(strWords('Victor Gutt', -999)).toEqual('Victor Gutt');

        // // String trimmed only where necessary
        // expect(strWords(' Victor Gutt ', 3)).toEqual(' Victor Gutt ');
        // expect(strWords(' Victor Gutt ', 1)).toEqual(' Victor...');

        // String not trimmed
        expect(strWords(' Victor Gutt ', 3)).toEqual(' Victor Gutt ');
        expect(strWords(' Victor Gutt ', 1)).toEqual(' Victor ...');
    });
});
