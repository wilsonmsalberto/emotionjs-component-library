import * as React from 'react';

// Styles
import { StyledButton } from './Button.styles';

// Types
export type ButtonTypes =  {
    children: React.ReactNode;
};

/**
 * Button.
 *
 * Renders a Button component.
 * @param {object} props - Component Props.
 * @param {object} props.children - Components children.
 * @returns {React.ReactElement} - React element.
 * @example
 * <Button isLoading={true} isSecondary/>
 */
const Button = (
    {
        children,
    }
    : ButtonTypes
) : React.ReactElement => (
    <StyledButton data-testid="Button">
        { children }
    </StyledButton>
);

export default Button;
