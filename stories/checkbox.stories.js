"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@storybook/react");
var react_2 = __importDefault(require("react"));
var checkbox_1 = __importDefault(require("../components/checkbox"));
var stories = react_1.storiesOf("CheckBox", module);
stories.add("Default", function () { return (react_2.default.createElement("div", null,
    react_2.default.createElement(checkbox_1.default, { name: "vehicle1", value: "Bike", label: "I have a bike" }),
    react_2.default.createElement("br", null),
    react_2.default.createElement("br", null),
    react_2.default.createElement(checkbox_1.default, { name: "vehicle2", value: "Car", label: "I have a car" }),
    react_2.default.createElement("br", null),
    react_2.default.createElement("br", null),
    react_2.default.createElement(checkbox_1.default, { name: "vehicle2", value: "Car2", label: "I have a car", checked: true }),
    react_2.default.createElement("br", null),
    react_2.default.createElement("br", null),
    react_2.default.createElement(checkbox_1.default, { error: true, name: "vehicle3", value: "Plane", label: "I have a plane" }),
    react_2.default.createElement("br", null),
    react_2.default.createElement("br", null),
    react_2.default.createElement(checkbox_1.default, { disabled: true, name: "vehicle4", value: "Boat", label: "I have a boat" }))); });
//# sourceMappingURL=checkbox.stories.js.map