"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@storybook/react");
var react_2 = __importDefault(require("react"));
var button_1 = __importDefault(require("../components/button"));
var select_1 = __importDefault(require("../components/select"));
require("./styles/select.css");
var stories = react_1.storiesOf("Select", module);
var items = [
    {
        id: 1,
        name: "Car",
        variant: "primary",
    },
    {
        id: 2,
        name: "Bike",
        variant: "primary",
    },
    {
        id: 3,
        name: "Plane",
        variant: "secondary",
    },
];
stories.add("Default", function () { return (react_2.default.createElement("div", null,
    react_2.default.createElement(select_1.default, { items: items, value: "id", selected: "3" }))); });
stories.add("Icon", function () { return (react_2.default.createElement("div", null,
    react_2.default.createElement(select_1.default, { items: items, value: "id", leftIcon: "close", selected: "3" }),
    react_2.default.createElement("br", null),
    react_2.default.createElement("br", null),
    react_2.default.createElement(select_1.default, { items: items, value: "id", rightIcon: "filter", rightIconColor: "primary", selected: "3" }),
    react_2.default.createElement("br", null),
    react_2.default.createElement("br", null),
    react_2.default.createElement(select_1.default, { items: items, value: "id", leftIcon: "filter", leftIconColor: "primary", rightIcon: "close", selected: "3" }),
    react_2.default.createElement("br", null),
    react_2.default.createElement("br", null),
    react_2.default.createElement("div", { className: "flex" },
        react_2.default.createElement(select_1.default, { className: "select-w40", items: items, value: "id", leftIcon: "filter", leftIconColor: "primary", rightIcon: "close", selected: "3" }),
        react_2.default.createElement(button_1.default, { className: "button-w60", fluid: true }, "Hello World")))); });
stories.add("Fluid", function () { return (react_2.default.createElement("div", null,
    react_2.default.createElement(select_1.default, { fluid: true, items: items, rightIcon: "close", selected: "3" }))); });
stories.add("Disabled", function () { return (react_2.default.createElement("div", null,
    react_2.default.createElement(select_1.default, { disabled: true, items: items, rightIcon: "close", selected: "3" }))); });
stories.add("Error", function () { return (react_2.default.createElement("div", null,
    react_2.default.createElement(select_1.default, { error: true, items: items, rightIcon: "close", selected: "3" }))); });
//# sourceMappingURL=select.stories.js.map