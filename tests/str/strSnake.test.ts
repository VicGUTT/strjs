import strSnake from '../../src/strSnake';

describe('str:strSnake', () => {
    it('works', () => {
        expect(strSnake('LaravelPHPFramework')).toEqual('laravel_p_h_p_framework');
        expect(strSnake('LaravelPhpFramework')).toEqual('laravel_php_framework');
        expect(strSnake('LaravelPhpFramework', ' ')).toEqual('laravel php framework');
        expect(strSnake('Laravel Php Framework')).toEqual('laravel_php_framework');
        expect(strSnake('Laravel    Php      Framework   ')).toEqual('laravel_php_framework');

        // ensure cache keys don't overlap
        expect(strSnake('LaravelPhpFramework', '__')).toEqual('laravel__php__framework');
        expect(strSnake('LaravelPhpFramework_', '_')).toEqual('laravel_php_framework_');
        expect(strSnake('laravel php Framework')).toEqual('laravel_php_framework');
        expect(strSnake('laravel php FrameWork')).toEqual('laravel_php_frame_work');

        // prevent breaking changes
        expect(strSnake('foo-bar')).toEqual('foo-bar');
        expect(strSnake('Foo-Bar')).toEqual('foo-_bar');
        expect(strSnake('Foo_Bar')).toEqual('foo__bar');
        expect(strSnake('ŻółtaŁódka')).toEqual('żółtałódka');
    });
});
