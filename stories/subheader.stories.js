"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@storybook/react");
var faker_1 = __importDefault(require("faker"));
var react_2 = __importDefault(require("react"));
var subheader_1 = __importDefault(require("../components/subheader"));
var stories = react_1.storiesOf("SubHeader", module);
var action = function () { return alert("Clicked"); };
stories.add("Default", function () { return (react_2.default.createElement("div", null,
    react_2.default.createElement(subheader_1.default, { title: faker_1.default.lorem.lines(10) }))); });
stories.add("Icons", function () { return (react_2.default.createElement("div", null,
    react_2.default.createElement(subheader_1.default, { leftIcon: "back-button", title: faker_1.default.lorem.lines(1) }),
    react_2.default.createElement("br", null),
    react_2.default.createElement("br", null),
    react_2.default.createElement("br", null),
    react_2.default.createElement("br", null),
    react_2.default.createElement("br", null),
    react_2.default.createElement(subheader_1.default, { rightIcon: "close", title: faker_1.default.lorem.lines(1) }),
    react_2.default.createElement("br", null),
    react_2.default.createElement("br", null),
    react_2.default.createElement("br", null),
    react_2.default.createElement("br", null),
    react_2.default.createElement("br", null),
    react_2.default.createElement(subheader_1.default, { leftIcon: "search", rightIcon: "thumbs-up", title: faker_1.default.lorem.lines(1) }))); });
stories.add("Icon with action", function () { return (react_2.default.createElement("div", null,
    react_2.default.createElement(subheader_1.default, { leftIcon: "back-button", leftIconOnClick: action, title: faker_1.default.lorem.lines(1) }))); });
//# sourceMappingURL=subheader.stories.js.map