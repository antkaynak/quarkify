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
var button_1 = __importDefault(require("../components/button"));
var stories = react_1.storiesOf("Button", module);
var action = function () { return alert("Clicked"); };
// tslint:disable-next-line:no-console
var actionLog = function () { return console.log("Clicked"); };
var LoadingWrapper = /** @class */ (function (_super) {
    __extends(LoadingWrapper, _super);
    function LoadingWrapper() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            loading: false,
        };
        _this.handleClick = function () {
            _this.setState({ loading: true });
            setTimeout(function () { return _this.setState({ loading: false }); }, 1000);
        };
        return _this;
    }
    LoadingWrapper.prototype.render = function () {
        return (react_2.default.createElement(react_2.default.Fragment, null,
            react_2.default.createElement(button_1.default, { variant: "primary", loading: this.state.loading, onClick: this.handleClick }, "Add to Basket"),
            react_2.default.createElement(button_1.default, { variant: "secondary", loading: this.state.loading, onClick: this.handleClick }, "Add to Basket"),
            react_2.default.createElement(button_1.default, { variant: "gray", loading: this.state.loading, onClick: this.handleClick }, "Add to Basket")));
    };
    return LoadingWrapper;
}(react_2.PureComponent));
stories.add("Variants", function () { return (react_2.default.createElement("div", null,
    react_2.default.createElement(button_1.default, { onClick: actionLog }, "Primary"),
    "\u00A0",
    react_2.default.createElement(button_1.default, { variant: "secondary", onClick: actionLog }, "Secondary"),
    "\u00A0",
    react_2.default.createElement(button_1.default, { variant: "gray", onClick: actionLog }, "Gray"))); });
stories.add("Button with Action", function () { return (react_2.default.createElement("div", null,
    react_2.default.createElement(button_1.default, { onClick: action, variant: "primary" }, "Click"))); });
stories.add("Disabled", function () { return (react_2.default.createElement(button_1.default, { disabled: true, onClick: actionLog }, "Disabled")); });
stories.add("Fluid", function () { return (react_2.default.createElement(button_1.default, { variant: "primary", fluid: true, onClick: actionLog }, "Fluid")); });
stories.add("Button with Icon", function () { return (react_2.default.createElement("div", null,
    react_2.default.createElement(button_1.default, { variant: "primary", icon: "star", onClick: actionLog }, "Favorilere ekle"),
    "\u00A0",
    react_2.default.createElement(button_1.default, { variant: "secondary", icon: "like", onClick: actionLog }, "3"),
    "\u00A0",
    react_2.default.createElement(button_1.default, { variant: "secondary", icon: "basket", round: true, onClick: actionLog }, "Sepette %20 indirim"),
    "\u00A0",
    react_2.default.createElement(button_1.default, { variant: "secondary", icon: "heart", onClick: actionLog }))); });
stories.add("Circular", function () { return (react_2.default.createElement(button_1.default, { variant: "primary", circular: true, icon: "heart", onClick: actionLog })); });
stories.add("Ripple", function () { return (react_2.default.createElement(react_2.default.Fragment, null)); });
stories.add("Loading", function () { return (react_2.default.createElement(LoadingWrapper, null)); });
//# sourceMappingURL=button.stories.js.map