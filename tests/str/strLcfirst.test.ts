import strLcfirst from '../../src/strLcfirst';

describe('str:strLcfirst', () => {
    it('works', () => {
        expect(strLcfirst('Laravel')).toEqual('laravel');
        expect(strLcfirst('Laravel framework')).toEqual('laravel framework');
        expect(strLcfirst('Laravel Framework')).toEqual('laravel Framework');
        expect(strLcfirst('Мама')).toEqual('мама');
        expect(strLcfirst('Мама мыла раму')).toEqual('мама мыла раму');
    });
});
