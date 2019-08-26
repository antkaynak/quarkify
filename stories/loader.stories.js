"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@storybook/react");
var faker_1 = __importDefault(require("faker"));
var react_2 = __importDefault(require("react"));
var box_1 = require("../components/box");
var button_1 = __importDefault(require("../components/button"));
var loader_1 = __importDefault(require("../components/loader"));
var stories = react_1.storiesOf("Loader", module);
var onClick = function () { return alert("This should not pop up!"); };
stories.add("Loader over Box", function () { return (react_2.default.createElement("div", null,
    react_2.default.createElement(box_1.Box, { spaced: true },
        react_2.default.createElement(loader_1.default, { active: true }),
        react_2.default.createElement("h1", null, "Content 1"),
        react_2.default.createElement(button_1.default, { onClick: onClick }, "Button"),
        react_2.default.createElement("p", null, faker_1.default.lorem.lines(10))),
    react_2.default.createElement(box_1.Box, { spaced: true },
        react_2.default.createElement(loader_1.default, { active: true }),
        react_2.default.createElement("h1", null, "Content 2"),
        react_2.default.createElement("p", null, faker_1.default.lorem.lines(10))),
    react_2.default.createElement(box_1.Box, { spaced: true },
        react_2.default.createElement(loader_1.default, { active: true }),
        react_2.default.createElement("h1", null, "Content 3"),
        react_2.default.createElement("p", null, faker_1.default.lorem.lines(10))))); });
//# sourceMappingURL=loader.stories.js.map