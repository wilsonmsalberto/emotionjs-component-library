/* eslint-disable react/prop-types */
import * as React from 'react';
import { render } from '@testing-library/react';

// ThemeKnob is used for Storybook and tests
import ThemeKnob from './ThemeKnob';

// Themes
import * as EmotionThemes from '@emotion-ui/themes';

export const themesList = Object.keys(EmotionThemes);

const AllTheProviders = ({ children, theme }) => (
    <ThemeKnob theme={ theme }>
        { children }
    </ThemeKnob>
);

const customRender = (ui, options) => render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };