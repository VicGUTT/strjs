import strKebab from '../../src/strKebab';

describe('str:strKebab', () => {
    it('works', () => {
        expect(strKebab('LaravelPhpFramework')).toEqual('laravel-php-framework');
    });
});
