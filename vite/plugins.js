/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import consoleMessage from './helpers/consoleMessage';
import compileAllTsFiles from './actions/compileAllTsFiles';
import generateReadme from './actions/generateReadme';

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
