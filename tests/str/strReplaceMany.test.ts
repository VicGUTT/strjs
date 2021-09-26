import strReplaceMany from '../../src/strReplaceMany';

describe('str:strReplaceMany', () => {
    it('works with string parameters', () => {
        expect(strReplaceMany('o', '', 'Foobar')).toEqual('Fbar');
        expect(strReplaceMany('bar', '', 'Foobar')).toEqual('Foo');
        expect(strReplaceMany('F', '', 'Foobar')).toEqual('oobar');
        expect(strReplaceMany('f', '', 'Foobar')).toEqual('Foobar');
        expect(strReplaceMany('Bar', '', 'Foobar')).toEqual('Foobar');
        expect(strReplaceMany('bAr', '', 'Foobar')).toEqual('Foobar');

        expect(strReplaceMany('f', '', 'Foobar', false)).toEqual('oobar');
        expect(strReplaceMany('Bar', '', 'Foobar', false)).toEqual('Foo');
        expect(strReplaceMany('bAr', '', 'Foobar', false)).toEqual('Foo');

        expect(strReplaceMany('o', '--', 'Foobar')).toEqual('F----bar');
        expect(strReplaceMany('bar', '--', 'Foobar')).toEqual('Foo--');
        expect(strReplaceMany('F', '--', 'Foobar')).toEqual('--oobar');

        expect(strReplaceMany('f', '--', 'Foobar')).toEqual('Foobar');
        expect(strReplaceMany('Bar', '--', 'Foobar')).toEqual('Foobar');
        expect(strReplaceMany('bAr', '--', 'Foobar')).toEqual('Foobar');

        expect(strReplaceMany('f', '--', 'Foobar', false)).toEqual('--oobar');
        expect(strReplaceMany('Bar', '--', 'Foobar', false)).toEqual('Foo--');
        expect(strReplaceMany('bAr', '--', 'Foobar', false)).toEqual('Foo--');
    });

    it('works with the `search` parameter being an array', () => {
        expect(strReplaceMany(['o', 'a'], '', 'Foobar')).toEqual('Fbr');
        expect(strReplaceMany(['f', 'b'], '', 'Foobar')).toEqual('Fooar');
        expect(strReplaceMany(['f', 'b'], '', 'Foobar', false)).toEqual('ooar');
        expect(strReplaceMany(['f', '|'], '', 'Foo|bar')).toEqual('Foobar');

        expect(strReplaceMany(['o', 'a'], '*', 'Foobar')).toEqual('F**b*r');
        expect(strReplaceMany(['f', 'b'], '*', 'Foobar')).toEqual('Foo*ar');
        expect(strReplaceMany(['f', 'b'], '*', 'Foobar', false)).toEqual('*oo*ar');
        expect(strReplaceMany(['f', '|'], '*', 'Foo|bar')).toEqual('Foo*bar');

        expect(strReplaceMany([''], '*', 'hey')).toEqual('hey');
        expect(strReplaceMany([' '], '👏', 'Black Lives Matter')).toEqual('Black👏Lives👏Matter');
    });

    it('works with the `replace` parameter being an array', () => {
        expect(strReplaceMany('o', ['x', '-'], 'Foobar')).toEqual('Fxxbar');
        expect(strReplaceMany('oo', ['x', '-'], 'Foobar')).toEqual('Fxbar');
        expect(strReplaceMany('f', ['x', '-'], 'Foobar')).toEqual('Foobar');
        expect(strReplaceMany('f', ['x', '-'], 'Foobar', false)).toEqual('xoobar');
        expect(strReplaceMany('|', ['', '-'], 'Foo|bar')).toEqual('Foobar');

        expect(strReplaceMany(['o', 'a'], ['x', '-'], 'Foobar')).toEqual('Fxxb-r');
        expect(strReplaceMany(['f', 'b'], ['x', '-'], 'Foobar')).toEqual('Foo-ar');
        expect(strReplaceMany(['f', 'b'], ['x', '-'], 'Foobar', false)).toEqual('xoo-ar');
        expect(strReplaceMany(['f', '|'], ['x', '-'], 'Foo|bar')).toEqual('Foo-bar');

        expect(strReplaceMany(['B', ' '], ['#B', ''], 'Black Lives Matter')).toEqual('#BlackLivesMatter');
    });

    it('works with the `subject` parameter being an array', () => {
        expect(strReplaceMany('o', '', ['Foobar'])).toEqual(['Fbar']);
        expect(strReplaceMany('oo', '', ['Foobar'])).toEqual(['Fbar']);
        expect(strReplaceMany('o', '', ['Foobar', 'Loonar'])).toEqual(['Fbar', 'Lnar']);
        expect(strReplaceMany('f', '', ['Foobar'])).toEqual(['Foobar']);
        expect(strReplaceMany('f', '', ['Foobar'], false)).toEqual(['oobar']);
        expect(strReplaceMany('|', '', ['Foo|bar'])).toEqual(['Foobar']);
        expect(strReplaceMany('o', '', ['Foobar', 'Loonar'])).toEqual(['Fbar', 'Lnar']);

        expect(strReplaceMany('o', ['x', '-'], ['Foobar'])).toEqual(['Fxxbar']);
        expect(strReplaceMany('oo', ['x', '-'], ['Foobar'])).toEqual(['Fxbar']);
        expect(strReplaceMany('o', ['x', '-'], ['Foobar', 'Loonar'])).toEqual(['Fxxbar', 'Lxxnar']);
        expect(strReplaceMany('f', ['x', '-'], ['Foobar', 'Loonar'])).toEqual(['Foobar', 'Loonar']);
        expect(strReplaceMany('f', ['x', '-'], ['Foobar', 'Loonar'], false)).toEqual(['xoobar', 'Loonar']);
        expect(strReplaceMany('|', ['', '-'], ['Foo|bar', 'Loo|nar'])).toEqual(['Foobar', 'Loonar']);
        expect(strReplaceMany('o', [''], ['Foobar', 'Loonar'])).toEqual(['Fbar', 'Lnar']);

        expect(strReplaceMany(['o'], ['x', '-'], ['Foobar', 'Loonar'])).toEqual(['Fxxbar', 'Lxxnar']);
        expect(strReplaceMany(['oo'], ['x', '-'], ['Foobar', 'Loonar'])).toEqual(['Fxbar', 'Lxnar']);
        expect(strReplaceMany(['o', 'a'], ['x', '-'], ['Foobar', 'Loonar'])).toEqual(['Fxxb-r', 'Lxxn-r']);
        expect(strReplaceMany(['f', 'l'], ['x', '-'], ['Foobar', 'Loonar'])).toEqual(['Foobar', 'Loonar']);
        expect(strReplaceMany(['f', 'l'], ['x', '-'], ['Foobar', 'Loonar'], false)).toEqual(['xoobar', '-oonar']);
        expect(strReplaceMany(['|', '-'], ['', 'p'], ['Foo|bar', 'Loo-nar'])).toEqual(['Foobar', 'Loopnar']);

        expect(
            //
            strReplaceMany(
                //
                ['Black', '!', 'Too'],
                ['All', '?', 'Exactly!'],
                ['Black Lives Matter!', 'Too']
            )
        ).toEqual(['All Lives Matter?', 'Exactly!']);
    });

    it('returns an array when the `subject` parameter is an array', () => {
        expect(strReplaceMany('o', '', 'Foobar')).toEqual('Fbar');
        expect(strReplaceMany('o', '', ['Foobar'])).toEqual(['Fbar']);
    });

    it('returns `subject` if the `search` or `subject` parameters are empty', () => {
        expect(strReplaceMany('', '*', 'hey')).toEqual('hey');
        expect(strReplaceMany('', '*', 'hey', false)).toEqual('hey');
        expect(strReplaceMany([], '*', 'hey')).toEqual('hey');
        expect(strReplaceMany([''], '*', 'hey')).toEqual('hey');
        expect(strReplaceMany([''], '*', 'hey', false)).toEqual('hey');
        expect(strReplaceMany(['', 'a'], '*', 'hey')).toEqual('hey');

        expect(strReplaceMany('hey', '*', '')).toEqual('');
        expect(strReplaceMany('hey', '*', '', false)).toEqual('');
        expect(strReplaceMany('hey', '*', [])).toEqual([]);
        expect(strReplaceMany('hey', '*', [''])).toEqual(['']);
        expect(strReplaceMany('hey', '*', [''], false)).toEqual(['']);
        expect(strReplaceMany('hey', '*', ['', 'a'])).toEqual(['', 'a']);
    });

    it('can keeps a record of the amount of matches', () => {
        const replacedCount = { value: 0 };

        strReplaceMany('', '*', 'heey', true, replacedCount);
        expect(replacedCount.value).toEqual(0);

        strReplaceMany('e', '*', '', true, replacedCount);
        expect(replacedCount.value).toEqual(0);

        strReplaceMany('e', '*', 'heey', true, replacedCount);
        expect(replacedCount.value).toEqual(2);

        strReplaceMany('e', '*', 'heeey', true, replacedCount);
        expect(replacedCount.value).toEqual(3);

        strReplaceMany('e', '*', 'heEy', true, replacedCount);
        expect(replacedCount.value).toEqual(1);

        // array params

        expect(strReplaceMany(['B', ' '], ['#B', ''], 'Black Lives Matter', true, replacedCount)).toEqual(
            '#BlackLivesMatter'
        );
        expect(replacedCount.value).toEqual(3);

        strReplaceMany(
            ['Black', '!', 'Too'],
            ['All', '?', 'Exactly!'],
            ['Black Lives Matter!', 'Too'],
            true,
            replacedCount
        );
        expect(replacedCount.value).toEqual(3);
    });
});
