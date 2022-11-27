import { describe, test, expect } from 'vitest';
import strWhenEmpty from '../../src/strWhenEmpty';

describe('str/strWhenEmpty', () => {
    test('when empty', () => {
        const dummy = new Dummy();

        const callback1 = (instance: Dummy) => {
            expect(instance instanceof Dummy).toEqual(true);

            return instance.hey();
        };
        const callback2 = (instance: Dummy) => {
            expect(instance instanceof Dummy).toEqual(true);

            return false;
        };
        const callback3 = (instance: Dummy) => {
            expect(instance instanceof Dummy).toEqual(true);

            return null;
        };

        expect(strWhenEmpty('', dummy, callback1)).toEqual('hey');
        expect(strWhenEmpty('', dummy, callback2)).toEqual(false);
        expect(strWhenEmpty('', dummy, callback3) instanceof Dummy).toEqual(true);
    });

    test('when not empty', () => {
        const dummy = new Dummy();

        const callback1 = (instance: Dummy) => {
            expect(instance instanceof Dummy).toEqual(true);

            return instance.hey();
        };
        const callback2 = (instance: Dummy) => {
            expect(instance instanceof Dummy).toEqual(true);

            return false;
        };
        const callback3 = (instance: Dummy) => {
            expect(instance instanceof Dummy).toEqual(true);

            return null;
        };

        expect(strWhenEmpty(' ', dummy, callback1) instanceof Dummy).toEqual(true);
        expect(strWhenEmpty('hey', dummy, callback2) instanceof Dummy).toEqual(true);
        expect(strWhenEmpty('hello', dummy, callback3) instanceof Dummy).toEqual(true);
    });
});

class Dummy {
    hey() {
        return 'hey';
    }
    hello() {
        return 'hello';
    }
    hi() {
        return 'hi';
    }
}
