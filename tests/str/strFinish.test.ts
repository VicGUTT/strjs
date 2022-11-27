import { describe, it, expect } from 'vitest';
import strFinish from '../../src/strFinish';

describe('str/strFinish', () => {
    it('works', () => {
        expect(strFinish('ab', 'bc')).toEqual('abbc');
        expect(strFinish('abbcbc', 'bc')).toEqual('abbc');
        expect(strFinish('abcbbcbc', 'bc')).toEqual('abcbbc');

        expect(strFinish('this/string', '/')).toEqual('this/string/');
        expect(strFinish('this/string/', '/')).toEqual('this/string/');
        expect(strFinish('this/string////', '/')).toEqual('this/string/');
    });
});
