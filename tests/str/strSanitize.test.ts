import { describe, it, expect } from 'vitest';
import strSanitize from '../../src/strSanitize.js';

describe('str/strSanitize', () => {
    it('works', () => {
        expect(strSanitize('abcdeft-1234560')).toEqual('abcdeft-1234560');
        expect(strSanitize('abcdeft_1234560')).toEqual('abcdeft_1234560');

        expect(strSanitize('abc~def#t--123@456à0')).toEqual('abcdeft--1234560');
        expect(strSanitize('&"{(-è_çà)=--<!:;,ù*$^?>')).toEqual('-_--');
    });
});
