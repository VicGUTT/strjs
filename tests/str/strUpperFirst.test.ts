import { describe, it, expect } from 'vitest';
import strUcfirst from '../../src/strUcfirst.js';
import strUpperFirst from '../../src/strUpperFirst.js';

describe('str/strUpperFirst', () => {
    it('works', () => {
        expect(strUpperFirst).toEqual(strUcfirst);

        expect(strUpperFirst('laravel')).toEqual(strUcfirst('laravel'));
        expect(strUpperFirst('laravel framework')).toEqual(strUcfirst('laravel framework'));
        expect(strUpperFirst('laravel Framework')).toEqual(strUcfirst('laravel Framework'));
        expect(strUpperFirst('мама')).toEqual(strUcfirst('мама'));
        expect(strUpperFirst('мама мыла раму')).toEqual(strUcfirst('мама мыла раму'));
    });
});
