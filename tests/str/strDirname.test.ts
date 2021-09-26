import strDirname from '../../src/strDirname';
import onWindowsOs from '../../src/utils/onWindowsOs';

let _ = onWindowsOs() ? '\\' : '/';

describe('str:strDirname', () => {
    it('works', () => {
        expect(strDirname('')).toEqual('');
        expect(strDirname('/etc/passwd')).toEqual(`${_}etc`);
        expect(strDirname('/etc/')).toEqual(_);
        expect(strDirname('C:\\')).toEqual(`C:${_}`);
        expect(strDirname('.')).toEqual('.');
        expect(strDirname('..')).toEqual('..');
        expect(strDirname('../../../../')).toEqual(`..${_}..${_}..`);
        expect(strDirname('../../../../', 2)).toEqual(`..${_}..`);
        expect(strDirname('/usr/local/lib', 2)).toEqual(`${_}usr`);

        const path = '/home/hello\\dir\\otherDir/lastDir\\filename.txt';

        expect(strDirname(path)).toEqual(`${_}home${_}hello${_}dir${_}otherDir${_}lastDir`);
        expect(strDirname(path, -999)).toEqual(`${_}home${_}hello${_}dir${_}otherDir${_}lastDir`);
        expect(strDirname(path, -1)).toEqual(`${_}home${_}hello${_}dir${_}otherDir${_}lastDir`);
        expect(strDirname(path, 0)).toEqual(`${_}home${_}hello${_}dir${_}otherDir${_}lastDir`);
        expect(strDirname(path, 1)).toEqual(`${_}home${_}hello${_}dir${_}otherDir${_}lastDir`);
        expect(strDirname(path, 2)).toEqual(`${_}home${_}hello${_}dir${_}otherDir`);
        expect(strDirname(path, 3)).toEqual(`${_}home${_}hello${_}dir`);
        expect(strDirname(path, 4)).toEqual(`${_}home${_}hello`);
        expect(strDirname(path, 5)).toEqual(`${_}home`);
        expect(strDirname(path, 6)).toEqual(`${_}`);
        expect(strDirname(path, 7)).toEqual(`${_}`);
        expect(strDirname(path, 8)).toEqual(`${_}`);
        expect(strDirname(path, 999)).toEqual(`${_}`);

        _ = '*';

        expect(strDirname(path, undefined, _)).toEqual(`${_}home${_}hello${_}dir${_}otherDir${_}lastDir`);
        expect(strDirname(path, -999, _)).toEqual(`${_}home${_}hello${_}dir${_}otherDir${_}lastDir`);
        expect(strDirname(path, -1, _)).toEqual(`${_}home${_}hello${_}dir${_}otherDir${_}lastDir`);
        expect(strDirname(path, 0, _)).toEqual(`${_}home${_}hello${_}dir${_}otherDir${_}lastDir`);
        expect(strDirname(path, 1, _)).toEqual(`${_}home${_}hello${_}dir${_}otherDir${_}lastDir`);
        expect(strDirname(path, 2, _)).toEqual(`${_}home${_}hello${_}dir${_}otherDir`);
        expect(strDirname(path, 3, _)).toEqual(`${_}home${_}hello${_}dir`);
        expect(strDirname(path, 4, _)).toEqual(`${_}home${_}hello`);
        expect(strDirname(path, 5, _)).toEqual(`${_}home`);
        expect(strDirname(path, 6, _)).toEqual(`${_}`);
        expect(strDirname(path, 7, _)).toEqual(`${_}`);
        expect(strDirname(path, 8, _)).toEqual(`${_}`);
        expect(strDirname(path, 999, _)).toEqual(`${_}`);
    });
});
