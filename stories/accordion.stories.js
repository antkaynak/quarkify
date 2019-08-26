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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@storybook/react");
var react_2 = __importStar(require("react"));
var accordion_1 = __importDefault(require("../components/accordion"));
var button_1 = __importDefault(require("../components/button"));
var stories = react_1.storiesOf("Accordion", module);
var AccordionWrapper = function () {
    return (react_2.default.createElement(react_2.default.Fragment, null,
        react_2.default.createElement(accordion_1.default, null,
            react_2.default.createElement(accordion_1.default.Header, null, "Accordion 1"),
            react_2.default.createElement(accordion_1.default.Content, null,
                react_2.default.createElement("div", null, "Some content"),
                react_2.default.createElement("div", null, "Some content"),
                react_2.default.createElement("div", null, "Some content"),
                react_2.default.createElement("div", null, "Some content"),
                react_2.default.createElement("div", null, "Some content"),
                react_2.default.createElement(button_1.default, null, "Button"))),
        react_2.default.createElement(accordion_1.default, null,
            react_2.default.createElement(accordion_1.default.Header, null, "Accordion 2"),
            react_2.default.createElement(accordion_1.default.Content, null,
                react_2.default.createElement("div", null, "Some content"),
                react_2.default.createElement("div", null, "Some content"),
                react_2.default.createElement("div", null, "Some content"),
                react_2.default.createElement("div", null, "Some content"),
                react_2.default.createElement("div", null, "Some content"),
                react_2.default.createElement(button_1.default, null, "Button"))),
        react_2.default.createElement("h1", null, "Text")));
};
var ControlledAccordionWrapper = /** @class */ (function (_super) {
    __extends(ControlledAccordionWrapper, _super);
    function ControlledAccordionWrapper() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            expanded: true,
        };
        _this.handleChange = function (newExpanded) {
            _this.setState({ expanded: newExpanded });
        };
        _this.handleClick = function () {
            _this.setState({ expanded: !_this.state.expanded });
        };
        return _this;
    }
    ControlledAccordionWrapper.prototype.render = function () {
        return (react_2.default.createElement(react_2.default.Fragment, null,
            react_2.default.createElement(accordion_1.default, { expanded: this.state.expanded, onChange: this.handleChange },
                react_2.default.createElement(accordion_1.default.Header, null, "Accordion 1"),
                react_2.default.createElement(accordion_1.default.Content, null,
                    react_2.default.createElement("div", null, "Some content"),
                    react_2.default.createElement("div", null, "Some content"),
                    react_2.default.createElement("div", null, "Some content"),
                    react_2.default.createElement("div", null, "Some content"),
                    react_2.default.createElement("div", null, "Some content"),
                    react_2.default.createElement(button_1.default, null, "Button"))),
            react_2.default.createElement(button_1.default, { onClick: this.handleClick }, "Toggle Accordion")));
    };
    return ControlledAccordionWrapper;
}(react_2.PureComponent));
stories.add("Accordion", function () { return react_2.default.createElement(AccordionWrapper, null); });
stories.add("Controlled Accordion", function () { return react_2.default.createElement(ControlledAccordionWrapper, null); });
//# sourceMappingURL=accordion.stories.js.map