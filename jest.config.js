const lastArg = process.argv[process.argv.length - 1];
const isTestingSingleFile = lastArg.startsWith('--testPathPattern') && lastArg.endsWith('.test.ts');

/** @type {import('@ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    preset: 'ts-jest',
    bail: true,
    maxWorkers: isTestingSingleFile ? 1 : '50%',
    errorOnDeprecated: true,
    roots: ['<rootDir>/src/', '<rootDir>/tests/'],
    testEnvironment: 'node',
    coverageDirectory: '.coverage',
    collectCoverageFrom: ['src/**/*.{ts,js}'],
    coverageThreshold: {
        global: {
            statements: 90,
            branches: 90,
            functions: 90,
            lines: 90,
        },
    },
};
