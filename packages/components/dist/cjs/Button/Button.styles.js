"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledButton = void 0;
// Types
var types_1 = __importDefault(require("../types"));
exports.StyledButton = types_1.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    color: ", ";\n    background-color: ", ";\n"], ["\n    color: ", ";\n    background-color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.secondary;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
});
var templateObject_1;
//# sourceMappingURL=Button.styles.js.map