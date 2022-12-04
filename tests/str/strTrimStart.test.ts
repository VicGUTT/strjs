import { describe, it, expect } from 'vitest';
import strLtrim from '../../src/strLtrim.js';
import strTrimStart from '../../src/strTrimStart.js';

describe('str/strTrimStart', () => {
    it('works', () => {
        expect(strTrimStart).toEqual(strLtrim);
    });
});
