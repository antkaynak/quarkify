"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@storybook/react");
var react_2 = __importDefault(require("react"));
var badge_1 = __importDefault(require("../components/badge"));
var stories = react_1.storiesOf("Badge", module);
stories.add("Badge", function () { return (react_2.default.createElement(react_2.default.Fragment, null,
    react_2.default.createElement("div", { style: { display: "flex", alignItems: "center" } },
        react_2.default.createElement(badge_1.default, { color: "primary" }, "Sepette %30 indirim"),
        react_2.default.createElement(badge_1.default, { color: "dark-gray", icon: "cargo-box" }),
        react_2.default.createElement(badge_1.default, { color: "dark-gray", icon: "cargo-box" }, "Kargo Bedava")))); });
//# sourceMappingURL=badge.stories.js.map