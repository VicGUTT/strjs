import { describe, it, expect } from 'vitest';
import strUcfirst from '../../src/strUcfirst';

describe('str/strUcfirst', () => {
    it('works', () => {
        expect(strUcfirst('laravel')).toEqual('Laravel');
        expect(strUcfirst('laravel framework')).toEqual('Laravel framework');
        expect(strUcfirst('laravel Framework')).toEqual('Laravel Framework');
        expect(strUcfirst('мама')).toEqual('Мама');
        expect(strUcfirst('мама мыла раму')).toEqual('Мама мыла раму');
    });
});
