import { describe, it, expect } from 'vitest';
import fs from 'fs';
import paths from './__utils/paths.js';
import file from './__utils/file.js';

const makeTestFileName = (file: string) => file.replace(/\.ts$/, '.test.ts');

describe('_', () => {
    describe('All `str*` functions have their own dedicated tests', () => {
        file.strSrcFiles.forEach((file) => {
            const testFileName = makeTestFileName(file);

            it(`./tests/str/${testFileName} exists`, () => {
                expect(fs.existsSync(`${paths.tests}/str/${testFileName}`)).toEqual(true);
            });
        });
    });

    describe('All `utils/*` functions have their own dedicated tests', () => {
        file.utilsSrcFiles.forEach((file) => {
            const testFileName = makeTestFileName(file);

            it(`./tests/utils/${testFileName} exists`, () => {
                expect(fs.existsSync(`${paths.tests}/utils/${testFileName}`)).toEqual(true);
            });
        });
    });
});
