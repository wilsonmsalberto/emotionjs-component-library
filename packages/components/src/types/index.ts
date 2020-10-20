import styled, { CreateStyled } from '@emotion/styled';

export declare interface ThemeProps {
    colors: {
        [key: string]: string;
    },
}

export interface EmotionProps {
    theme?: ThemeProps
}

export default styled as CreateStyled<ThemeProps>;