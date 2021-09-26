import strBeforeLast from './strBeforeLast';
import strAfter from './strAfter';

/**
 * Get the portion of a string between two given values.
 *
 * @param {string} subject - The string being searched on, otherwise known as the haystack
 * @param {string} from - The value from which to start the search
 * @param {string} to - The value until which to end the search
 * @returns {string}
 *
 * @example
 * ```js
 * strBetween('I no da wae broda', 'no', 'broda'); // ' da wae '
 * strBetween('I no da wae broda', 'nope', 'broda'); // 'I no da wae '
 * strBetween('I no da wae broda', 'no', 'nope'); // ' da wae broda'
 * ```
 */
export default function strBetween(subject: string, from: string, to: string): string {
    if (from === '' || to === '') {
        return subject;
    }

    return strBeforeLast(strAfter(subject, from), to);
}
