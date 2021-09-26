/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { exec } from 'child_process';

export default async function execAsync(command, callback) {
    return await new Promise((resolve, reject) => {
        exec(command, (error, stdout, stderr) => {
            try {
                return error ? reject(error, stdout, stderr) : resolve(callback && callback(error, stdout, stderr));
            } catch (e) {
                return reject(e);
            }
        });
    });
}

/* eslint-enable */
