import escapeRegExp from '../../src/utils/escapeRegExp';

describe('utils:escapeRegExp', () => {
    it('works', () => {
        expect(escapeRegExp('The Quick Brown Fox')).toEqual('The\\ Quick\\ Brown\\ Fox');
        expect(escapeRegExp('Our ability*')).toEqual('Our\\ ability\\*');
        expect(escapeRegExp('Buy it. use it. break it. fix it.')).toEqual(
            'Buy\\ it\\.\\ use\\ it\\.\\ break\\ it\\.\\ fix\\ it\\.'
        );
        expect(escapeRegExp('(*.*)')).toEqual('\\(\\*\\.\\*\\)');
        expect(escapeRegExp('｡^･ｪ･^｡')).toEqual('｡\\^･ｪ･\\^｡');
        expect(escapeRegExp('😊 *_* +_+ ... 👍')).toEqual('😊\\ \\*_\\*\\ \\+_\\+\\ \\.\\.\\.\\ 👍');
        expect(escapeRegExp('d D (?:)')).toEqual('d\\ D\\ \\(\\?:\\)');
    });
});
