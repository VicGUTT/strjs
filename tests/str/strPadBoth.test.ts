import strPadBoth from '../../src/strPadBoth';

describe('str:strPadBoth', () => {
    it('works', () => {
        expect(strPadBoth('Alien', 10)).toEqual('  Alien   ');
        expect(strPadBoth('Alien', 10, '_')).toEqual('__Alien___');

        expect(strPadBoth('Alien', 'Alien'.length, '*')).toEqual('Alien');
        expect(strPadBoth('Alien', 'Alien'.length + 1, '*')).toEqual('Alien*');
        expect(strPadBoth('Alien', 'Alien'.length + 2, '*')).toEqual('*Alien*');
        expect(strPadBoth('Alien', 'Alien'.length + 3, '*')).toEqual('*Alien**');
        expect(strPadBoth('Alien', 'Alien'.length + 4, '*')).toEqual('**Alien**');

        expect(strPadBoth('Alien', 0, '*')).toEqual('Alien');
        expect(strPadBoth('Alien', -1, '*')).toEqual('Alien');
        expect(strPadBoth('Alien', 'Alien'.length - 1, '*')).toEqual('Alien');
    });
});
