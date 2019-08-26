"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@storybook/react");
var react_2 = __importDefault(require("react"));
var switch_1 = __importDefault(require("../components/switch"));
var stories = react_1.storiesOf("Switch", module);
stories.add("Default", function () { return (react_2.default.createElement("div", null,
    react_2.default.createElement("form", null,
        react_2.default.createElement(switch_1.default, { name: "gender", value: "female", label: "Female", checked: true }),
        react_2.default.createElement("br", null),
        react_2.default.createElement("br", null),
        react_2.default.createElement(switch_1.default, { name: "gender", value: "male", label: "Male" }),
        react_2.default.createElement("br", null),
        react_2.default.createElement("br", null),
        react_2.default.createElement(switch_1.default, { name: "gender", value: "other", label: "Other" }),
        react_2.default.createElement("br", null),
        react_2.default.createElement("br", null),
        react_2.default.createElement(switch_1.default, { name: "gender", value: "error", label: "Error", error: true }),
        react_2.default.createElement("br", null),
        react_2.default.createElement("br", null),
        react_2.default.createElement(switch_1.default, { name: "gender", value: "disabled", label: "Disabled", disabled: true })))); });
stories.add("As radio", function () { return (react_2.default.createElement("div", null,
    react_2.default.createElement("form", null,
        react_2.default.createElement(switch_1.default, { type: "radio", name: "gender", value: "female", label: "Female" }),
        react_2.default.createElement("br", null),
        react_2.default.createElement("br", null),
        react_2.default.createElement(switch_1.default, { type: "radio", name: "gender", value: "male", label: "Male" }),
        react_2.default.createElement("br", null),
        react_2.default.createElement("br", null),
        react_2.default.createElement(switch_1.default, { type: "radio", name: "gender", value: "other", label: "Other" }),
        react_2.default.createElement("br", null),
        react_2.default.createElement("br", null),
        react_2.default.createElement(switch_1.default, { type: "radio", name: "gender", value: "error", label: "Error", error: true }),
        react_2.default.createElement("br", null),
        react_2.default.createElement("br", null),
        react_2.default.createElement(switch_1.default, { type: "radio", name: "gender", value: "disabled", label: "Disabled", disabled: true })))); });
//# sourceMappingURL=switch.stories.js.map