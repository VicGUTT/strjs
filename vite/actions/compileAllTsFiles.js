/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import fs from 'fs';
import execAsync from '../helpers/execAsync';
import consoleMessage from '../helpers/consoleMessage';

export default async function compileAllTsFiles() {
    const paths = {
        index: './dist/index.js',
    };

    consoleMessage('Running `tsc`...');

    const hasIndexFile = await execAsync('tsc', () => fs.existsSync(paths.index));

    if (hasIndexFile) {
        consoleMessage('Removing the `./dist/index.js` & `./dist/index.js.map` files...');

        fs.unlinkSync(paths.index);
        fs.unlinkSync(`${paths.index}.map`);
    }
}

/* eslint-enable */
