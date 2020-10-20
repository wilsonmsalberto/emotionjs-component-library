module.exports = {
    presets: [
        '@babel/preset-env',
        '@babel/preset-react',
        '@babel/preset-typescript',
        '@emotion/babel-preset-css-prop',
    ],
    env: {
        build: {
            ignore: [
                './**/*.story.{ts,tsx,js,jsx}',
                './**/*.test.{ts,tsx,js,jsx}',
                '.storybook',
                'coverage',
                'utils',
            ],
        },
    },
    ignore : [ 'node_modules' ],
    plugins: [
        [ 'module-resolver', {
            root : [ './' ],
            alias: {
                '@emotion-ui/components': [ './packages/components/src' ],
                '@emotion-ui/themes'    : [ './packages/themes/src' ],
                '@utils'                : [ './utils' ],
            },
        } ],
    ],
};
