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

        // manifest: true,
        // minify: false,

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
            fileName: (format) => `${libName}.${format}.js`,
        },
    },
    plugins,
});
