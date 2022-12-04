import { describe, it, expect } from 'vitest';
import strKebab from '../../src/strKebab.js';

describe('str/strKebab', () => {
    it('works', () => {
        expect(strKebab('LaravelPhpFramework')).toEqual('laravel-php-framework');
    });
});
