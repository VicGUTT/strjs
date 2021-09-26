/**
 * @jest-environment jsdom
 */

import onWindowsOs from '../../src/utils/onWindowsOs';

const isReallyOnWindows = process.platform === 'win32';

describe('utils:onWindowsOs', () => {
    it('works', () => {
        expect(onWindowsOs()).toEqual(_onWindowsOs());
        expect(onWindowsOs()).toEqual(isReallyOnWindows);

        const descriptor = (value: string | null = null) => ({
            get: () => value,
        });

        Object.defineProperty(process, 'platform', descriptor());

        expect(onWindowsOs()).toEqual(_onWindowsOs());
        expect(onWindowsOs()).toEqual(isReallyOnWindows);

        Object.defineProperty(window.navigator, 'platform', descriptor());

        expect(onWindowsOs()).toEqual(_onWindowsOs());
        expect(onWindowsOs()).toEqual(isReallyOnWindows);

        Object.defineProperty(window.navigator, 'appVersion', descriptor('4.0'));

        expect(onWindowsOs()).toEqual(_onWindowsOs());
        expect(onWindowsOs()).toEqual(isReallyOnWindows);

        Object.defineProperty(window.navigator, 'userAgent', descriptor('Nope'));

        expect(onWindowsOs()).toEqual(_onWindowsOs());
        expect(onWindowsOs()).toEqual(isReallyOnWindows ? !isReallyOnWindows : isReallyOnWindows);

        Object.defineProperty(window, 'navigator', descriptor());

        expect(onWindowsOs()).toEqual(_onWindowsOs());
        expect(onWindowsOs()).toEqual(isReallyOnWindows ? !isReallyOnWindows : isReallyOnWindows);

        // @ts-expect-error shush
        delete window.navigator;

        expect(onWindowsOs()).toEqual(_onWindowsOs());
        expect(onWindowsOs()).toEqual(isReallyOnWindows ? !isReallyOnWindows : isReallyOnWindows);
    });
});

function _os(): string | null {
    let os = null;

    if (typeof process !== 'undefined' && process.platform) {
        os = process.platform;
    }

    if (!os && typeof window !== 'undefined' && 'navigator' in window) {
        os =
            window.navigator?.platform ||
            (window.navigator?.appVersion !== '4.0' ? window.navigator?.appVersion : window.navigator?.userAgent);
    }

    return os;
}

function _onWindowsOs(): boolean {
    return !!_os()?.toLowerCase()?.includes('win');
}
