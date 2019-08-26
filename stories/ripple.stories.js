"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@storybook/react");
var react_2 = __importDefault(require("react"));
var box_1 = require("../components/box");
var layout_1 = __importDefault(require("../components/layout"));
var ripple_1 = __importDefault(require("../components/ripple"));
var stories = react_1.storiesOf("Ripple", module);
var TestComponent = /** @class */ (function (_super) {
    __extends(TestComponent, _super);
    function TestComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TestComponent.prototype.render = function () {
        return (react_2.default.createElement(box_1.Box, null,
            react_2.default.createElement("p", null, "1"),
            react_2.default.createElement("img", { src: "https://picsum.photos/200/300" }),
            react_2.default.createElement("p", null, "1")));
    };
    return TestComponent;
}(react_2.default.PureComponent));
stories.add("Ripple", function () {
    return (react_2.default.createElement(layout_1.default, null,
        react_2.default.createElement(ripple_1.default, { display: "block" },
            react_2.default.createElement(TestComponent, null))));
});
//# sourceMappingURL=ripple.stories.js.map