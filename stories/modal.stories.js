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
var faker = __importStar(require("faker"));
var react_2 = __importStar(require("react"));
var button_1 = __importDefault(require("../components/button"));
var modal_1 = __importDefault(require("../components/modal"));
var stories = react_1.storiesOf("Modal", module);
var ModalWrapper = /** @class */ (function (_super) {
    __extends(ModalWrapper, _super);
    function ModalWrapper(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { show: false };
        _this.handleChange = _this.handleChange.bind(_this);
        _this.closeModal = _this.closeModal.bind(_this);
        return _this;
    }
    ModalWrapper.prototype.render = function () {
        return (react_2.default.createElement(react_2.default.Fragment, null,
            react_2.default.createElement(button_1.default, { onClick: this.handleChange }, "Toggle Me"),
            react_2.default.createElement(modal_1.default, { show: this.state.show, animation: this.props.animation },
                react_2.default.createElement(modal_1.default.Header, { rightIconOnClick: this.closeModal, rightIcon: this.props.rightIcon, leftIcon: this.props.leftIcon, leftIconOnClick: this.closeModal }, "Cok y cok g cok cok cok cok cok cok cok cok cok cok cok cok cok cok cok uzun title"),
                react_2.default.createElement(modal_1.default.Content, null,
                    react_2.default.createElement("p", null, faker.lorem.words(1000))),
                react_2.default.createElement(modal_1.default.Actions, null,
                    react_2.default.createElement(button_1.default, { fluid: true, onClick: this.closeModal }, "Ok")))));
    };
    ModalWrapper.prototype.handleChange = function () {
        this.setState({ show: !this.state.show });
    };
    ModalWrapper.prototype.closeModal = function () {
        this.setState({ show: false });
    };
    return ModalWrapper;
}(react_2.PureComponent));
stories.add("Default", function () { return react_2.default.createElement(ModalWrapper, null); });
stories.add("Left Icon", function () { return (react_2.default.createElement(ModalWrapper, { leftIcon: "back-button" })); });
stories.add("Right Icon", function () { return (react_2.default.createElement(ModalWrapper, { rightIcon: "close" })); });
stories.add("SlideInLeft", function () { return react_2.default.createElement(ModalWrapper, { animation: "slideInLeft", rightIcon: "close" }); });
stories.add("SlideInDown", function () { return react_2.default.createElement(ModalWrapper, { animation: "slideInDown", rightIcon: "close" }); });
stories.add("SlideInUp", function () { return react_2.default.createElement(ModalWrapper, { animation: "slideInUp", rightIcon: "close" }); });
//# sourceMappingURL=modal.stories.js.map