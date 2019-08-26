"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@storybook/react");
var react_2 = __importDefault(require("react"));
var typography_1 = __importDefault(require("../components/typography"));
var stories = react_1.storiesOf("Typography", module);
stories.add("Default", function () { return (react_2.default.createElement("div", null,
    react_2.default.createElement(typography_1.default, { variant: "h1", component: "h2" }, "h1 Hello there"),
    react_2.default.createElement(typography_1.default, { variant: "h2", color: "green" }, "h2 Hello there color green"),
    react_2.default.createElement(typography_1.default, { variant: "h3" }, "h3 Hello there"),
    react_2.default.createElement(typography_1.default, { variant: "paragraph" }, "paragraph Hello there"),
    react_2.default.createElement(typography_1.default, { variant: "smallParagraph" }, "small-paragraph Hello there"),
    react_2.default.createElement(typography_1.default, { variant: "smallParagraph", color: "white" }, "small-paragraph White color"))); });
//# sourceMappingURL=typography.stories.js.map