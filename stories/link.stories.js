"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@storybook/react");
var react_2 = __importDefault(require("react"));
var link_1 = __importDefault(require("../components/link"));
var stories = react_1.storiesOf("Link", module);
var url = "https://github.com/Trendyol/quarkify";
stories.add("Variants", function () { return (react_2.default.createElement("div", null,
    react_2.default.createElement(link_1.default, { to: url }, "Google"),
    "\u00A0",
    react_2.default.createElement(link_1.default, { to: url, variant: "secondary" }, "Google"),
    "\u00A0",
    react_2.default.createElement(link_1.default, { to: url, variant: "gray" }, "Google"))); });
stories.add("Disabled", function () { return (react_2.default.createElement(link_1.default, { to: url, disabled: true }, "Disabled Google")); });
stories.add("Blank", function () { return (react_2.default.createElement(link_1.default, { target: "_blank", to: url, variant: "primary" }, "Google in new tab")); });
//# sourceMappingURL=link.stories.js.map