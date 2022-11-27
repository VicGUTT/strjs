import { describe, it, expect } from 'vitest';
import strLcfirst from '../../src/strLcfirst';
import strLowerFirst from '../../src/strLowerFirst';

describe('str/strLowerFirst', () => {
    it('works', () => {
        expect(strLowerFirst).toEqual(strLcfirst);

        expect(strLowerFirst('Laravel')).toEqual(strLcfirst('Laravel'));
        expect(strLowerFirst('Laravel framework')).toEqual(strLcfirst('Laravel framework'));
        expect(strLowerFirst('Laravel Framework')).toEqual(strLcfirst('Laravel Framework'));
        expect(strLowerFirst('Мама')).toEqual(strLcfirst('Мама'));
        expect(strLowerFirst('Мама мыла раму')).toEqual(strLcfirst('Мама мыла раму'));
    });
});
