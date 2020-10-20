import * as React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

// Theme Switcher
import ThemeKnob from 'utils/ThemeKnob';

// Utils
import { Story } from 'utils/types';

// Component
import Button, { ButtonTypes } from './Button';

export default {
    title     : 'Components/Button',
    component : Button,
    decorators: [ withKnobs ],
};

// Story Template
const Template: Story<ButtonTypes> = (args: any) => <ThemeKnob><Button { ...args } /></ThemeKnob>;

// Simple Button example
export const Primary = Template.bind({});
Primary.args = {
    children: 'Primary Button',
};