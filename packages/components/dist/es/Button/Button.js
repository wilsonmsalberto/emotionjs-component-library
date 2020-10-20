import * as React from 'react';
// Styles
import { StyledButton } from './Button.styles';
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
const Button = ({ children, }) => (React.createElement(StyledButton, { "data-testid": "Button" }, children));
export default Button;
//# sourceMappingURL=Button.js.map