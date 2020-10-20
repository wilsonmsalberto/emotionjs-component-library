import { css } from '@emotion/core';
import normalize from 'emotion-normalize';

export default css`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    html {
        height: 100%;
        font-size: 62.5%;
    }

    body {
        height: 100%;
        font-size: 1.2rem;
        -webkit-font-smoothing: antialiased;
        line-height: 1.4;
    }

    html,
    body {
        min-height: 100%;
        margin: 0;
        padding: 0;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin: 0;
        font-weight: normal;
    }

    ul,
    li {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    textarea:focus,
    input:focus {
        outline: none;
    }
`;
