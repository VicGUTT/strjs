import { describe, it, expect } from 'vitest';
import strPrepend from '../../src/strPrepend';

describe('str/strPrepend', () => {
    it('works', () => {
        expect(strPrepend('hey', 'world')).toEqual('worldhey');
        expect(strPrepend('hey', ' world')).toEqual(' worldhey');
        expect(strPrepend('hey', ' awesome', ' world')).toEqual(' awesome worldhey');
        expect(strPrepend('hey', '1', '2', '3', '4', '5', '6', '7')).toEqual('1234567hey');
    });
});
