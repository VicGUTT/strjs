import { describe, it, expect } from 'vitest';
import strRtrim from '../../src/strRtrim.js';
import strTrimEnd from '../../src/strTrimEnd.js';

describe('str/strTrimEnd', () => {
    it('works', () => {
        expect(strTrimEnd).toEqual(strRtrim);
    });
});
