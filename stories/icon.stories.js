"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@storybook/react");
var react_2 = __importDefault(require("react"));
var icon_1 = __importDefault(require("../components/icon"));
var layout_1 = __importDefault(require("../components/layout"));
var stories = react_1.storiesOf("Icon", module);
stories.add("Icons", function () { return (react_2.default.createElement(layout_1.default, { style: { height: "100vh" } },
    react_2.default.createElement(icon_1.default, { name: "search" }),
    react_2.default.createElement(icon_1.default, { name: "search", disabled: true }),
    react_2.default.createElement(icon_1.default, { name: "checkmark-full" }),
    react_2.default.createElement("br", null),
    react_2.default.createElement(icon_1.default, { color: "green", name: "cargo-box", size: "small", circular: true }),
    react_2.default.createElement(icon_1.default, { color: "green", name: "alarm", circular: true }),
    react_2.default.createElement(icon_1.default, { color: "red", name: "heart", size: "large", circular: true }),
    react_2.default.createElement(icon_1.default, { color: "primary", name: "discount-shape", size: "xlarge", circular: true }))); });
//# sourceMappingURL=icon.stories.js.map