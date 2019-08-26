"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@storybook/react");
var faker_1 = __importDefault(require("faker"));
var react_2 = __importDefault(require("react"));
var box_1 = require("../components/box");
var layout_1 = __importDefault(require("../components/layout"));
var stories = react_1.storiesOf("Layout", module);
stories.add("Default", function () { return (react_2.default.createElement(layout_1.default, null,
    react_2.default.createElement(box_1.Box, null,
        react_2.default.createElement("p", null, faker_1.default.lorem.lines(10))))); });
stories.add("Fluid", function () { return (react_2.default.createElement(layout_1.default, { fitted: true },
    react_2.default.createElement(box_1.Box, null,
        react_2.default.createElement("p", null, faker_1.default.lorem.lines(10))))); });
//# sourceMappingURL=layout.stories.js.map