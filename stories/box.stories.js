"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@storybook/react");
var react_2 = __importDefault(require("react"));
var box_1 = require("../components/box");
var layout_1 = __importDefault(require("../components/layout"));
var stories = react_1.storiesOf("Box", module);
stories.add("Box", function () { return (react_2.default.createElement(layout_1.default, { style: { height: "100vh" } },
    react_2.default.createElement(box_1.Box, null,
        react_2.default.createElement("span", null, "Box")),
    react_2.default.createElement(box_1.Box, { spaced: true },
        react_2.default.createElement("span", null, "Spaced Box")),
    react_2.default.createElement(box_1.Box, { spaced: true, textAlign: "right" },
        react_2.default.createElement("span", null, "Right aligned spaced Box")),
    react_2.default.createElement(box_1.Box, { spaced: true, textAlign: "center" },
        react_2.default.createElement("span", null, "Center aligned spaced Box")),
    react_2.default.createElement(box_1.Box, { spaced: true, textAlign: "justify" },
        react_2.default.createElement("span", null, "Justify spaced Box Justify spaced Box Justify spaced Box")),
    react_2.default.createElement(box_1.Box, { fitted: true, spaced: true },
        react_2.default.createElement("span", null, "Fitted spaced box")))); });
stories.add("Box Group", function () { return (react_2.default.createElement(layout_1.default, { style: { height: "100vh" } },
    react_2.default.createElement(box_1.BoxGroup, { style: { marginTop: "20px" } },
        react_2.default.createElement(box_1.Box, null,
            react_2.default.createElement("span", null, "Box")),
        react_2.default.createElement(box_1.Box, null,
            react_2.default.createElement("span", null, "Box")),
        react_2.default.createElement(box_1.Box, null,
            react_2.default.createElement("span", null, "Box"))))); });
//# sourceMappingURL=box.stories.js.map