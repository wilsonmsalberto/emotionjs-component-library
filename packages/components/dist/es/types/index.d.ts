import { CreateStyled } from '@emotion/styled';
export declare interface ThemeProps {
    colors: {
        [key: string]: string;
    };
}
export interface EmotionProps {
    theme?: ThemeProps;
}
declare const _default: CreateStyled<ThemeProps>;
export default _default;
