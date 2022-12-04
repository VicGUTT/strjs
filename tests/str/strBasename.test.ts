import { describe, it, expect } from 'vitest';
import strBasename from '../../src/strBasename.js';

describe('str/strBasename', () => {
    it('works', () => {
        expect(strBasename('/etc/sudoers.d', '.d')).toEqual('sudoers');
        expect(strBasename('/etc/sudoers.d')).toEqual('sudoers.d');
        expect(strBasename('/etc/passwd')).toEqual('passwd');
        expect(strBasename('/etc/')).toEqual('etc');
        expect(strBasename('.')).toEqual('.');
        expect(strBasename('..')).toEqual('..');
        expect(strBasename('../')).toEqual('..');
        expect(strBasename('../../../../')).toEqual('..');
        expect(strBasename('/')).toEqual('');

        expect(strBasename('\\etc\\sudoers.d', '.d')).toEqual('sudoers');
        expect(strBasename('\\etc\\sudoers.d')).toEqual('sudoers.d');
        expect(strBasename('\\etc\\passwd')).toEqual('passwd');
        expect(strBasename('\\etc\\')).toEqual('etc');
        expect(strBasename('..\\')).toEqual('..');
        expect(strBasename('..\\..\\..\\..\\')).toEqual('..');
        expect(strBasename('\\')).toEqual('');

        expect(strBasename('\\etc/sudoers.d', '.d')).toEqual('sudoers');
        expect(strBasename('/etc\\sudoers.d')).toEqual('sudoers.d');
        expect(strBasename('/home/hello\\dir\\otherDir/lastDir\\filename.txt')).toEqual('filename.txt');
        expect(strBasename('/home/hello\\dir\\otherDir/lastDir\\filename.txt', '.txt')).toEqual('filename');
    });
});
