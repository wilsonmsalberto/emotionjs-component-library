export const baseColors = {
    P10: '#FCFCFC',
    P11: '#333333',
};

const mapping = {
    primary  : baseColors.P10,
    secondary: baseColors.P11,
};

export const colors = {
    ...baseColors,
    ...mapping,
};
