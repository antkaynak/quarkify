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
var input_1 = __importDefault(require("../components/input"));
var stories = react_1.storiesOf("Input", module);
var InputWrapper = /** @class */ (function (_super) {
    __extends(InputWrapper, _super);
    function InputWrapper(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            value: "",
        };
        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }
    InputWrapper.prototype.render = function () {
        return (react_2.default.createElement("div", null,
            react_2.default.createElement(input_1.default, { type: "text", value: this.state.value, onChange: this.handleChange }),
            react_2.default.createElement(input_1.default, { type: "text", placeholder: "Placeholder value", value: this.state.value, onChange: this.handleChange }),
            react_2.default.createElement(input_1.default, { type: "text", placeholder: "Disabled", disabled: true }),
            react_2.default.createElement(input_1.default, { type: "text", placeholder: "Error", error: true }),
            react_2.default.createElement(input_1.default, { type: "text", placeholder: "Required", required: true, value: this.state.value, onChange: this.handleChange }),
            react_2.default.createElement(input_1.default, { type: "text", value: this.state.value, placeholder: "Primary", onChange: this.handleChange }),
            react_2.default.createElement(input_1.default, { type: "text", value: this.state.value, placeholder: "Secondary", onChange: this.handleChange }),
            react_2.default.createElement("p", null,
                "Value: ",
                this.state.value)));
    };
    InputWrapper.prototype.handleChange = function (e) {
        this.setState({
            value: e.target.value,
        });
    };
    return InputWrapper;
}(react_2.PureComponent));
stories.add("Text", function () {
    return react_2.default.createElement(InputWrapper, null);
});
stories.add("Text with Label", function () { return (react_2.default.createElement("div", null,
    react_2.default.createElement(input_1.default, { type: "text", label: "Text with label" }),
    react_2.default.createElement("br", null),
    react_2.default.createElement("br", null),
    react_2.default.createElement(input_1.default, { type: "text", label: "Text with label", disabled: true }))); });
stories.add("Error", function () { return (react_2.default.createElement("div", null,
    react_2.default.createElement(input_1.default, { type: "text", label: "Text with label", subtext: "Hello mymy", error: true, errorMessage: "Hata ve Uyarı Mesajı!" }))); });
stories.add("Fluid", function () { return (react_2.default.createElement("div", null,
    react_2.default.createElement(input_1.default, { fluid: true, type: "text", value: "this is a fluid input\n    this is a fluid input\n    this is a fluid input\n    this is a fluid input" }))); });
stories.add("Email", function () { return (react_2.default.createElement("div", null,
    react_2.default.createElement(input_1.default, { type: "email" }),
    react_2.default.createElement(input_1.default, { type: "email", placeholder: "Placeholder value" }),
    react_2.default.createElement(input_1.default, { type: "email", placeholder: "Placeholder value", disabled: true }),
    react_2.default.createElement(input_1.default, { type: "email", placeholder: "Placeholder value", required: true }),
    react_2.default.createElement(input_1.default, { type: "email", placeholder: "Placeholder value", required: true, subtext: "required" }))); });
stories.add("Password", function () { return (react_2.default.createElement("div", null,
    react_2.default.createElement(input_1.default, { type: "password" }),
    react_2.default.createElement(input_1.default, { type: "password", placeholder: "Placeholder value" }),
    react_2.default.createElement(input_1.default, { type: "password", placeholder: "Placeholder value", disabled: true }),
    react_2.default.createElement(input_1.default, { type: "password", placeholder: "Placeholder value", required: true }),
    react_2.default.createElement(input_1.default, { type: "password", placeholder: "Placeholder value", subtext: "required" }))); });
stories.add("Submit", function () { return (react_2.default.createElement("div", null,
    react_2.default.createElement(input_1.default, { type: "submit", value: "Send" }),
    react_2.default.createElement(input_1.default, { type: "submit", value: "Send" }),
    react_2.default.createElement(input_1.default, { type: "submit", placeholder: "Placeholder value", disabled: true, value: "Send" }))); });
stories.add("Reset", function () { return (react_2.default.createElement("div", null,
    react_2.default.createElement("form", null,
        react_2.default.createElement(input_1.default, { type: "text", name: "firstName", defaultValue: "Mickey" }),
        react_2.default.createElement(input_1.default, { type: "text", name: "secondName", defaultValue: "Mouse" }),
        react_2.default.createElement(input_1.default, { type: "submit", value: "Submit" }),
        react_2.default.createElement(input_1.default, { type: "reset" })))); });
//# sourceMappingURL=input.stories.js.map