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
var icon_1 = __importDefault(require("../components/icon"));
var popup_1 = __importDefault(require("../components/popup"));
var stories = react_1.storiesOf("Popup", module);
var PopupWrapper = /** @class */ (function (_super) {
    __extends(PopupWrapper, _super);
    function PopupWrapper(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            show: false,
        };
        _this.handleClick = _this.handleClick.bind(_this);
        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }
    PopupWrapper.prototype.render = function () {
        return (react_2.default.createElement(react_2.default.Fragment, null,
            Array.from({ length: 15 }, function (_, i) { return react_2.default.createElement("p", null,
                "Down ",
                i); }),
            react_2.default.createElement(button_1.default, { onClick: this.handleClick }, "Toggle Me"),
            Array.from({ length: 15 }, function (_, i) { return react_2.default.createElement("p", null,
                "Down ",
                i + 16); }),
            react_2.default.createElement(popup_1.default, { show: this.state.show, onChange: this.handleChange, closeOnOverlayClick: false }, Array.from({ length: 30 }, function (_, i) { return react_2.default.createElement("p", null,
                "Line ",
                i); }))));
    };
    PopupWrapper.prototype.handleClick = function () {
        this.setState({
            show: true,
        });
    };
    PopupWrapper.prototype.handleChange = function (status) {
        this.setState({
            show: status,
        });
    };
    return PopupWrapper;
}(react_2.PureComponent));
// tslint:disable-next-line:max-classes-per-file
var PopupBasketWrapper = /** @class */ (function (_super) {
    __extends(PopupBasketWrapper, _super);
    function PopupBasketWrapper(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            show: false,
        };
        _this.handleClick = _this.handleClick.bind(_this);
        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }
    PopupBasketWrapper.prototype.render = function () {
        return (react_2.default.createElement(react_2.default.Fragment, null,
            react_2.default.createElement(button_1.default, { onClick: this.handleClick }, "Toggle Me"),
            react_2.default.createElement(popup_1.default, { show: this.state.show, onChange: this.handleChange, closeOnOverlayClick: false },
                react_2.default.createElement(icon_1.default, { name: "basket", style: { fontSize: "6rem" } }),
                react_2.default.createElement("h1", null, "URUN SEPETINE EKLENDI"),
                react_2.default.createElement("h4", { style: { color: "grey" } }, "Al\u0131\u015Fveri\u015Fe devam etmek mi istersin sepete gitmek mi?"),
                react_2.default.createElement("div", { style: {
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop: "60px",
                    } },
                    react_2.default.createElement(button_1.default, { variant: "secondary", style: { flex: 1, margin: "0 5px" } }, "Alisverise Devam Et"),
                    react_2.default.createElement(button_1.default, { variant: "primary", style: { flex: 1, margin: "0 5px" } }, "Sepete Git (1)")))));
    };
    PopupBasketWrapper.prototype.handleClick = function () {
        this.setState({
            show: true,
        });
    };
    PopupBasketWrapper.prototype.handleChange = function (status) {
        this.setState({
            show: status,
        });
    };
    return PopupBasketWrapper;
}(react_2.PureComponent));
stories.add("Default", function () { return react_2.default.createElement(PopupWrapper, null); });
stories.add("CloseOnOverlayClick disabled", function () { return (react_2.default.createElement(PopupWrapper, null)); });
stories.add("Urun sepete eklendi", function () { return react_2.default.createElement(PopupBasketWrapper, null); });
//# sourceMappingURL=popup.stories.js.map