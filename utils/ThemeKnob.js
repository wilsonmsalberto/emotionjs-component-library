/* eslint-disable react/prop-types */
import * as React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { select } from '@storybook/addon-knobs';
import { Global } from '@emotion/core';

// Themes
import { Dark, Light } from '@emotion-ui/themes';

const themes = {
    Dark: {
        theme : Dark,
        global: Dark.globalStyles,
    },
    Light: {
        theme : Light,
        global: Light.globalStyles,
    },
};

const themeNames = Object.keys(themes);

export default ({
    children,
    theme = select(
        'Theme',
        themeNames,
        themeNames[0],
        'Themes'
    ),
}) => (
    <>
        <Global styles={ themes[theme].global } />
        <ThemeProvider theme={ themes[theme].theme || Dark }>
            { children }
        </ThemeProvider>
    </>
);