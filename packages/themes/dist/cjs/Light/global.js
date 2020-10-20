"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@emotion/core");
// Theme
var common_1 = __importDefault(require("../common"));
var colors_1 = require("./colors");
exports.default = core_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    ", "\n\n    body {\n        color: ", ";\n        background-color: ", ";\n    }\n"], ["\n    ", "\n\n    body {\n        color: ", ";\n        background-color: ", ";\n    }\n"])), common_1.default, colors_1.colors.primary, colors_1.colors.secondary);
var templateObject_1;
//# sourceMappingURL=global.js.map