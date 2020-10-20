// Types
import styled, { EmotionProps } from '../types';

export const StyledButton = styled.button<EmotionProps>`
    color: ${({ theme }) => theme.colors.secondary};
    background-color: ${({ theme }) => theme.colors.primary};
`;