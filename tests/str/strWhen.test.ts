import strWhen from '../../src/strWhen';

describe('str:strWhen', () => {
    test('when truthy', () => {
        const dummy = new Dummy();

        const callback1 = (instance: Dummy, value: number) => {
            expect(instance instanceof Dummy).toEqual(true);
            expect(value).toEqual(1);

            return instance.hey();
        };
        const callback2 = (instance: Dummy, value: string) => {
            expect(instance instanceof Dummy).toEqual(true);
            expect(value).toEqual('yolo');

            return false;
        };
        const callback3 = (instance: Dummy, value: unknown[]) => {
            expect(instance instanceof Dummy).toEqual(true);
            expect(value).toEqual([]);

            return null;
        };

        const fallback = () => {
            throw new Error('How did we get here 😱 ! Abort abort !!');
        };

        expect(strWhen(1, dummy, callback1, fallback)).toEqual('hey');
        expect(strWhen('yolo', dummy, callback2, fallback)).toEqual(false);
        expect(strWhen([], dummy, callback3, fallback) instanceof Dummy).toEqual(true);
    });

    test('when falsy', () => {
        const dummy = new Dummy();

        const callback = () => {
            throw new Error('How did we get here 😱 ! Abort abort !!');
        };

        const fallback1 = (instance: Dummy, value: number) => {
            expect(instance instanceof Dummy).toEqual(true);
            expect(value).toEqual(0);

            return instance.hey();
        };
        const fallback2 = (instance: Dummy, value: string) => {
            expect(instance instanceof Dummy).toEqual(true);
            expect(value).toEqual('');

            return false;
        };
        const fallback3 = (instance: Dummy, value: boolean) => {
            expect(instance instanceof Dummy).toEqual(true);
            expect(value).toEqual(false);

            return null;
        };

        expect(strWhen(0, dummy, callback, fallback1)).toEqual('hey');
        expect(strWhen('', dummy, callback, fallback2)).toEqual(false);
        expect(strWhen(false, dummy, callback, fallback3) instanceof Dummy).toEqual(true);
        expect(strWhen(undefined, dummy, callback) instanceof Dummy).toEqual(true);
        expect(strWhen(null, dummy, callback, undefined) instanceof Dummy).toEqual(true);
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
