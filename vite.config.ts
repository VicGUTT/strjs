/// <reference types="vitest" />

import fs from 'fs';
import path from 'path';
import { defineConfig } from 'vite';
import plugins from './vite/plugins';

const lib = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
const libName = lib.name.split('/')[1] ?? lib.name;
const year = new Date().getFullYear();

export default defineConfig({
    build: {
        /**
         * @see https://vitejs.dev/config/#build-target
         */
        target: `es${year - 2 < 2021 ? 2021 : year - 2}`,

        /**
         * @see https://vitejs.dev/config/#build-chunksizewarninglimit
         */
        chunkSizeWarningLimit: 10, // 10 kbs

        /**
         * @see https://vitejs.dev/config/#build-rollupoptions
         * @see https://rollupjs.org/guide/en/#big-list-of-options
         */
        rollupOptions: {
            input: './src/index.ts',
        },

        /**
         * @see https://vitejs.dev/config/#build-lib
         * @see https://vitejs.dev/guide/build.html#library-mode
         */
        lib: {
            entry: path.resolve(__dirname, './src/index.ts'),
            name: libName
                .split('-')
                .map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1).toLowerCase()}`)
                .join(''),
            fileName: (format) => `_${libName}.${format}.${format === 'umd' ? 'c' : ''}js`,
        },
    },
    plugins,
    /**
     * @see https://vitest.dev/config/#configuration
     */
    test: {
        // global: true,
        environment: 'node',
        /**
         * @see https://github.com/vitest-dev/vitest/blob/95b1ba4c17df1677136b39762c19d859db3f4cb2/packages/vitest/src/types/coverage.ts
         */
        coverage: {
            reportsDirectory: '.coverage',
            include: ['src/**/*.{ts,js}'],
            // Threshold
            statements: 90,
            branches: 90,
            functions: 90,
            lines: 90,
        },
    },
});
