const path = require('path');

module.exports = {
    stories: [
        '../packages/**/*.story.mdx',
        '../packages/**/*.story.@(js|jsx|ts|tsx)',
        '../styleguide/**/*.story.mdx',
        '../styleguide/**/*.story.@(js|jsx|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-knobs',
        '@storybook/addon-links',
        '@storybook/addon-essentials',
    ],
    babel: (config) => {
        config.presets.push(require.resolve("@emotion/babel-preset-css-prop"));
        return config;
    },
    webpackFinal: (config) => {
        config.resolve.alias = {
            '@emotion-ui/themes': path.resolve(__dirname, "../packages/themes/src"),
            '@emotion-ui/components': path.resolve(__dirname, "../packages/components/src"),
            '@utils': path.resolve(__dirname, "../utils"),
            ...config.resolve.alias
        };
        
        return config;
    },
}