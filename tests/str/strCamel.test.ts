import { describe, it, expect } from 'vitest';
import strCamel from '../../src/strCamel.js';

describe('str/strCamel', () => {
    it('works', () => {
        expect(strCamel('Laravel_p_h_p_framework')).toEqual('laravelPHPFramework');
        expect(strCamel('Laravel_php_framework')).toEqual('laravelPhpFramework');
        expect(strCamel('Laravel-phP-framework')).toEqual('laravelPhPFramework');
        expect(strCamel('Laravel  -_-  php   -_-   framework   ')).toEqual('laravelPhpFramework');

        expect(strCamel('FooBar')).toEqual('fooBar');
        expect(strCamel('foo_bar')).toEqual('fooBar');
        expect(strCamel('foo_bar')).toEqual('fooBar'); // test cache
        expect(strCamel('Foo-barBaz')).toEqual('fooBarBaz');
        expect(strCamel('foo-bar_baz')).toEqual('fooBarBaz');
    });
});
