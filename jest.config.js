module.exports = {
    collectCoverage    : true,
    collectCoverageFrom: [
        'packages/components/**/*.{js,jsx,ts,tsx}',
        '!packages/**/*.story.{js,jsx,ts,tsx}',
        '!**/dist/**/*.{js,jsx,ts,tsx}',
    ],
    coverageThreshold: {
        global: {
            branches  : 80,
            functions : 80,
            lines     : 80,
            statements: 80,
        },
    },
    setupFilesAfterEnv: [
        '<rootDir>/jest.setup.js',
        '<rootDir>/utils/tests.js',
    ],
    moduleNameMapper: {
        '@emotion-ui/(.+)$': '<rootDir>packages/$1/src',
        '^utils/(.*)$'     : '<rootDir>utils/$1',
    },
    moduleFileExtensions    : [ 'ts', 'tsx', 'js', 'jsx' ],
    modulePathIgnorePatterns: [ '<rootDir>/coverage/' ],
    testPathIgnorePatterns  : [ 'dist' ],
    transform               : {
        '^.+\\.[tj]sx?$': 'babel-jest',
    },
    verbose: true,
};
