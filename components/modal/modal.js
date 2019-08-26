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
var classnames_1 = __importDefault(require("classnames"));
var react_1 = __importDefault(require("react"));
var react_transition_group_1 = require("react-transition-group");
require("../../styles/components/_modal.scss");
var modal_actions_1 = __importDefault(require("./modal-actions"));
var modal_content_1 = __importDefault(require("./modal-content"));
var modal_header_1 = __importDefault(require("./modal-header"));
var Modal = /** @class */ (function (_super) {
    __extends(Modal, _super);
    function Modal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Modal.prototype.componentDidMount = function () {
        if (this.props.show && typeof window !== "undefined") {
            document.body.classList.add("q-disable-scroll");
        }
    };
    Modal.prototype.componentWillUpdate = function (nextProps, nextState, nextContext) {
        if (nextProps.show !== this.props.show && this.props.onChange) {
            this.props.onChange();
        }
        if (nextProps.show && typeof window !== "undefined") {
            document.body.classList.add("q-disable-scroll");
            document.documentElement.classList.add("q-disable-scroll");
        }
        else if (typeof window !== "undefined") {
            document.body.classList.remove("q-disable-scroll");
            document.documentElement.classList.remove("q-disable-scroll");
        }
    };
    Modal.prototype.render = function () {
        var _a = this.props, show = _a.show, children = _a.children, _b = _a.animation, animation = _b === void 0 ? "slideInRight" : _b, className = _a.className;
        var modalClasses = classnames_1.default("q-modal-main", className);
        return react_1.default.createElement(react_transition_group_1.CSSTransition, { in: show, unmountOnExit: true, timeout: 300, classNames: "q-" + animation + " q-modal" },
            react_1.default.createElement("div", { className: modalClasses }, children));
    };
    Modal.Header = modal_header_1.default;
    Modal.Actions = modal_actions_1.default;
    Modal.Content = modal_content_1.default;
    return Modal;
}(react_1.default.Component));
exports.default = Modal;
//# sourceMappingURL=modal.js.map