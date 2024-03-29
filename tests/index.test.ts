import { describe, it, test, expect } from 'vitest';
import file from './__utils/file.js';
import Stringable from '../src/Stringable.js';
import str from '../src/index.js';

type _Meta = {
    glob: (...args: unknown[]) => Record<string, { default: () => unknown }>;
};

const strFiles = (import.meta as unknown as _Meta).glob('../src/*.ts', { eager: true });

describe('index', () => {
    it('returns an instance of `Stringable` when invoked', () => {
        expect(typeof str).toEqual('function');
        expect(str() instanceof Stringable).toEqual(true);

        const string = str("don't be the knight you wish to see")
            .after("don't")
            .trim()
            .prepend('please ')
            .remove('kn')
            .replace('ight', 'light')
            .ucfirst()
            .finish('!');

        expect(string.isEmpty()).toEqual(false);
        expect(string.isBlank()).toEqual(false);
        expect(string + '-!!').toEqual('Please be the light you wish to see!-!!');
        expect(string.title() + '').toEqual('Please Be The Light You Wish To See!');
        expect(string.slug() + '').toEqual('please-be-the-light-you-wish-to-see');
        expect(string.limit(19) + '').toEqual('Please be the light...');
    });

    file.strSrcFiles.forEach((file) => {
        const imported = {
            name: file.replace('.ts', ''),
            run: strFiles[`../src/${file}`].default,
        };
        const method = {
            get name(): string {
                return this.makeName(imported.name);
            },
            get run(): (...args: unknown[]) => unknown {
                return str[this.name];
            },
            makeName(val: string): string {
                return (val = val.replace(/^str/, '')) && val.charAt(0).toLowerCase() + val.slice(1);
            },
        };

        test(`str.${method.name} === ${imported.name}`, () => {
            expect(method.run).toEqual(imported.run);
        });
    });
});
