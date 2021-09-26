import strReplaceLast from '../../src/strReplaceLast';

describe('str:strReplaceLast', () => {
    it('works', () => {
        expect(strReplaceLast('', 'abc', 'hello awesome world')).toEqual('hello awesome world');
        expect(strReplaceLast('world', '', 'hello awesome world')).toEqual('hello awesome ');
        expect(strReplaceLast('world', 'abc', '')).toEqual('');

        expect(strReplaceLast('1st', 'not__1st', 'hey__1st__2nd_1st')).toEqual('hey__1st__2nd_not__1st');
        expect(strReplaceLast('1st', 'not__1st', 'hey__1st__2nd_1st__end')).toEqual('hey__1st__2nd_not__1st__end');

        expect(strReplaceLast('bar', 'qux', 'foobar foobar')).toEqual('foobar fooqux');
        expect(strReplaceLast('bar?', 'qux?', 'foo/bar? foo/bar?')).toEqual('foo/bar? foo/qux?');
        expect(strReplaceLast('bar', '', 'foobar foobar')).toEqual('foobar foo');
        expect(strReplaceLast('xxx', 'yyy', 'foobar foobar')).toEqual('foobar foobar');
        expect(strReplaceLast('', 'yyy', 'foobar foobar')).toEqual('foobar foobar');
    });

    it('has multibyte string support', () => {
        expect(strReplaceLast('ö', 'xxx', 'Jönköping Malmö')).toEqual('Jönköping Malmxxx');
        expect(strReplaceLast('ö', 'xxx', 'Malmö Jönköping')).toEqual('Malmö Jönkxxxping');
        expect(strReplaceLast('', 'yyy', 'Malmö Jönköping')).toEqual('Malmö Jönköping');
    });

    it('is case sensitive', () => {
        expect(strReplaceLast('r', 'ria', 'Victor')).toEqual('Victoria');
        expect(strReplaceLast('R', 'ria', 'Victor')).toEqual('Victor');
    });
});
