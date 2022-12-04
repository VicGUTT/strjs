import { describe, it, expect } from 'vitest';
import strAppend from '../../src/strAppend.js';

describe('str/strAppend', () => {
    it('works', () => {
        expect(strAppend('hey', 'world')).toEqual('heyworld');
        expect(strAppend('hey', ' world')).toEqual('hey world');
        expect(strAppend('hey ', ' awesome   ', ' world')).toEqual('hey  awesome    world');
        expect(strAppend('hey', '1', '2', '3', '4', '5', '6', '7')).toEqual('hey1234567');
    });
});
