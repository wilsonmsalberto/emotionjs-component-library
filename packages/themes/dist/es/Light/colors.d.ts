export namespace baseColors {
    const P10: string;
    const P11: string;
}
export namespace colors {
    import primary = P10;
    export { primary };
    import secondary = P11;
    export { secondary };
}
