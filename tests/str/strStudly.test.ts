import { describe, it, expect } from 'vitest';
import strStudly from '../../src/strStudly';

describe('str/strStudly', () => {
    it('works', () => {
        expect(strStudly('laravel_php_framework')).toEqual('LaravelPhpFramework');
        expect(strStudly('laravel-phP-framework')).toEqual('LaravelPhPFramework');
        expect(strStudly('laravel  -_-  php   -_-   framework   ')).toEqual('LaravelPhpFramework');

        expect(strStudly('fooBar')).toEqual('FooBar');
        expect(strStudly('foo_bar')).toEqual('FooBar');
        expect(strStudly('foo_bar')).toEqual('FooBar'); // test cache
        expect(strStudly('foo-barBaz')).toEqual('FooBarBaz');
        expect(strStudly('foo-bar_baz')).toEqual('FooBarBaz');
    });
});
