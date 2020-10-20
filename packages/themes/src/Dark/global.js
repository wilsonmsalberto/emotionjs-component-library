import { css } from '@emotion/core';

// Theme
import commonStyles from '../common';

import { colors } from './colors';

export default css`
    ${commonStyles}

    body {
        color: ${colors.primary};
        background-color: ${colors.secondary};
    }
`;
