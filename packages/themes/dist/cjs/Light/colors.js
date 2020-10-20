"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.colors = exports.baseColors = void 0;
exports.baseColors = {
    P10: '#FCFCFC',
    P11: '#333333',
};
var mapping = {
    primary: exports.baseColors.P10,
    secondary: exports.baseColors.P11,
};
exports.colors = __assign(__assign({}, exports.baseColors), mapping);
//# sourceMappingURL=colors.js.map