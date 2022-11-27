import { describe, it, expect } from 'vitest';
import strLtrim from '../../src/strLtrim';
import strTrimStart from '../../src/strTrimStart';

describe('str/strTrimStart', () => {
    it('works', () => {
        expect(strTrimStart).toEqual(strLtrim);
    });
});
