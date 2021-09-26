/**
 * Try to determine whether the current environment is Windows based.
 */
export default function onWindowsOs(): boolean {
    let os = null;

    if (typeof process !== 'undefined' && process.platform) {
        os = process.platform;
    }

    if (!os && typeof window !== 'undefined' && 'navigator' in window) {
        os =
            window.navigator?.platform ||
            (window.navigator?.appVersion !== '4.0' ? window.navigator?.appVersion : window.navigator?.userAgent);
    }

    return !!os?.toLowerCase()?.includes('win');
}
