"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
// Styles
var Button_styles_1 = require("./Button.styles");
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
var Button = function (_a) {
    var children = _a.children;
    return (React.createElement(Button_styles_1.StyledButton, { "data-testid": "Button" }, children));
};
exports.default = Button;
//# sourceMappingURL=Button.js.map