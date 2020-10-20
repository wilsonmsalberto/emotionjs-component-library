import * as React from 'react';
export declare type ButtonTypes = {
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
declare const Button: ({ children, }: ButtonTypes) => React.ReactElement;
export default Button;
