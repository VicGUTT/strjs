/* eslint-disable @typescript-eslint/ban-ts-comment, @typescript-eslint/explicit-module-boundary-types */
// @ts-nocheck

import fs from 'fs';
import jsdoc2md from 'jsdoc-to-markdown';
import consoleMessage from '../helpers/consoleMessage';
import execAsync from '../helpers/execAsync';

export default async function generateReadme() {
    consoleMessage('Generating `README.md`...');

    const data = await getData();
    const content = data
        .map((item) => {
            const meta = getFileMeta(item);
            const heading = makeHeading(item, meta);
            const see = handleSee(item, meta);
            const alias = handleAlias(item, meta);
            const signature = handleSignature(item, meta);

            const examples = item.examples?.length ? `**Example**\n\n${item.examples.join('\n\n')}\n` : '';
            const description = item.description || '';

            let result = heading;

            if (!alias.text) {
                result += `\n\n${description}`;
            }
            if (alias.text) {
                result += `\n\n${alias.text}`;
            }
            if (see) {
                result += `\n\n${see}`;
            }
            if (signature) {
                result += `\n\n${signature}`;
            }
            if (examples) {
                result += `\n\n${examples}`;
            }

            return result.trim();
        })
        .join('\n\n');

    if (!content.trim().length) {
        return;
    }

    const readme = fs.readFileSync('./README.md', 'utf-8');

    const oldContent = readme.substring(
        readme.lastIndexOf('<!-- {{ CONTENT }} -->') + '<!-- {{ CONTENT }} -->'.length,
        readme.lastIndexOf('<!-- /{{ CONTENT }} -->')
    );

    fs.writeFileSync('./README.md', readme.replace(oldContent, `\n${content}\n`));

    consoleMessage('Formatting `README.md`...');

    await execAsync('prettier README.md --write');
    await execAsync('git status', async (_, stdout) => {
        if (!stdout.replace(/\s/g, '').includes('modified:README.md')) {
            return;
        }

        consoleMessage('Committing `README.md`...');

        await execAsync('git add README.md');
        await execAsync('git commit -m "docs: `README.md` update"');
    });
}

async function getData() {
    const fileNames = new Set();
    return (await jsdoc2md.getJsdocData({ files: 'dist/*.js' }))
        .filter((item) => item.comment?.trim().length && item.meta)
        .filter((item) => {
            if (fileNames.has(item.meta.filename)) {
                return false;
            }

            fileNames.add(item.meta.filename);

            return true;
        });
}

function getFileMeta(item) {
    return {
        fileName: item.meta.filename,
        get testFileName() {
            return this.fileName.replace(/\.js$/, '.test.ts');
        },
        get functionName() {
            return this.fileName.replace(/\.js$/, '');
        },
        get methodName() {
            const name = this.functionName.replace(/^str/, '');

            return name.charAt(0).toLowerCase() + name.slice(1);
        },
    };
}

function makeHeading(_, { testFileName, functionName, methodName }) {
    const lib = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
    const libName = lib.name.split('/')[1] ?? lib.name;
    const repo = `https://github.com/VicGUTT/${libName}/blob/main`;

    return `### • **str.${methodName} / ${functionName}** _([Source](${repo}/src/${functionName}.ts) | [Tests](${repo}/tests/str/${testFileName}))_`;
}

function handleSee(item) {
    return item.see?.length
        ? item.see.reduce((acc, current) => (acc += `- [${current}](${current})\n`), `See:\n`).trim()
        : '';
}

function handleAlias(item) {
    return {
        value: item.alias || '',
        get target() {
            return this.value.substring(0, this.value.indexOf(' '));
        },
        get description() {
            return this.value.substring(this.value.indexOf(' ')).trim();
        },
        get text() {
            if (!this.value.trim().length) {
                return '';
            }

            return this.description.replace(
                `\`${this.target}\``,
                `[\`${this.target}\`](#-${this.target}--${this.target}-source--tests)`
            );
        },
    };
}

function handleSignature({ params, returns }, { functionName }) {
    if (!params || !returns) {
        return '';
    }

    /*
        Example template :

        \**
        * @param {string} p1 - A string param.
        * @param {string} [p2] - An optional param (Closure syntax)
        * @param {string} [p3] - Another optional param (JSDoc syntax).
        * @param {string} [p4="test"] - An optional param with a default value
        * @returns {string} This is the result
        *\
        function strAfter(p1: string, p2?: string, p3?: string, p4: string = 'test'): string
     */

    const _params = params
        .map((param) => {
            if (!param.type?.names?.length || !param.name) {
                return '';
            }

            const name = (() => {
                const defaultvalue = param.defaultvalue === null ? 'null' : param.defaultvalue;
                const name = param.name + (defaultvalue ? `=${defaultvalue}` : '');

                return param.optional || defaultvalue ? `[${name}]` : name;
            })();
            const description = param.description ? `- ${param.description}` : '';

            return `@param {${param.type.names.join(' | ')}} ${name} ${description}`.trim();
        })
        .join('\n * ');
    const _returns = returns
        .map((item) => {
            if (!item.type?.names?.length) {
                return '';
            }

            return `@returns {${item.type.names.join(' | ')}} ${item.description || ''}`.trim();
        })
        .join('\n * ');

    const comment = `/**\n * ${_params}\n * ${_returns}\n */`;
    const signature = (() => {
        const _params = params
            .map((param) => {
                if (!param.type?.names?.length || !param.name) {
                    return '';
                }

                const defaultvalue = param.defaultvalue === null ? 'null' : param.defaultvalue;
                const questionMark = param.optional && !defaultvalue ? '?' : '';
                const _defaultvalue = defaultvalue ? `= ${defaultvalue}` : '';

                return `${param.name}${questionMark}: ${param.type.names.join(' | ')} ${_defaultvalue}`.trim();
            })
            .join(', ');
        const _returns = returns
            .map((item) => {
                if (!item.type?.names?.length) {
                    return '';
                }

                return item.type.names.join(' | ');
            })
            .join(' | ');

        return `function ${functionName}(${_params})${_returns.length ? `: ${_returns}` : ''}`;
    })();

    const format = (value) => {
        value = value.replace(/Array\.<string>/g, 'string[]');
        value = value.replace(/Array.<\(string\|null\)>/g, '(string | null)[]');

        return value;
    };

    return format(`**Signature**\n\n\`\`\`ts\n${comment}\n${signature}\n\`\`\``);
}

/* eslint-enable */
