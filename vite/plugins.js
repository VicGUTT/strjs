/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import consoleMessage from './helpers/consoleMessage.js';
import compileAllTsFiles from './actions/compileAllTsFiles.js';
import generateReadme from './actions/generateReadme.js';

export default [
    {
        name: 'after-bundling-actions',
        closeBundle: async () => {
            await compileAllTsFiles();
            await generateReadme();

            consoleMessage('All done!');
        },
    },
];

/* eslint-enable */
