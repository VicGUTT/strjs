import path from 'path';

export default {
    root: path.resolve(`${__dirname}/../..`),
    get tests(): string {
        return path.resolve(`${this.root}/tests`);
    },
    get src(): string {
        return path.resolve(`${this.root}/src`);
    },
};
