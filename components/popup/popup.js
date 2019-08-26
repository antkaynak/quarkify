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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var classnames_1 = __importDefault(require("classnames"));
var react_1 = __importStar(require("react"));
var react_dom_1 = __importDefault(require("react-dom"));
var react_transition_group_1 = require("react-transition-group");
require("../../styles/components/_popup.scss");
var icon_1 = __importDefault(require("../icon"));
var Popup = /** @class */ (function (_super) {
    __extends(Popup, _super);
    function Popup(props) {
        var _this = _super.call(this, props) || this;
        _this.popupBodyClick = function (event) {
            event.stopPropagation();
        };
        _this.handleTouchMove = _this.handleTouchMove.bind(_this);
        _this.onEnter = _this.onEnter.bind(_this);
        _this.onExit = _this.onExit.bind(_this);
        return _this;
    }
    Popup.prototype.componentDidUpdate = function (prevProps) {
        if (prevProps.show !== this.props.show) {
            if (prevProps.onChange) {
                prevProps.onChange(this.props.show);
            }
        }
    };
    Popup.prototype.componentWillUnmount = function () {
        document.removeEventListener("touchmove", this.handleTouchMove);
    };
    Popup.prototype.handleTouchMove = function (e) {
        e.stopImmediatePropagation();
        var scrollElement = document.getElementsByClassName("q-popup-content")[0];
        if (!e.composedPath().includes(scrollElement)) {
            e.preventDefault();
        }
    };
    Popup.prototype.onEnter = function () {
        document.addEventListener("touchmove", this.handleTouchMove, { passive: false });
    };
    Popup.prototype.onExit = function () {
        document.removeEventListener("touchmove", this.handleTouchMove);
    };
    Popup.prototype.render = function () {
        if (typeof window === "undefined") {
            return null;
        }
        var _a = this.props, show = _a.show, children = _a.children, iconLeft = _a.iconLeft, _b = _a.noIcon, noIcon = _b === void 0 ? false : _b, _c = _a.closeOnOverlayClick, closeOnOverlayClick = _c === void 0 ? true : _c, onChange = _a.onChange, className = _a.className;
        var popupClasses = classnames_1.default("q-popup-overlay", className);
        var popupIconClasses = classnames_1.default(iconLeft && "q-popup-icon-left", "icon-close", "q-popup-icon-position");
        var overlayClick = function () {
            if (closeOnOverlayClick) {
                onChange(false);
            }
        };
        var handleIconClick = function () {
            onChange(false);
        };
        return react_dom_1.default.createPortal(react_1.default.createElement(react_transition_group_1.CSSTransition, { in: show, onEnter: this.onEnter, onExit: this.onExit, unmountOnExit: true, timeout: 150, classNames: "q-zoomIn q-popup" },
            react_1.default.createElement("div", { className: popupClasses, onClick: overlayClick },
                react_1.default.createElement("div", { className: "q-popup-main", onClick: this.popupBodyClick },
                    !noIcon && (react_1.default.createElement(icon_1.default, { className: popupIconClasses, onClick: handleIconClick, name: "close" })),
                    react_1.default.createElement("div", { className: "q-popup-content" }, children)))), document.body);
    };
    return Popup;
}(react_1.PureComponent));
exports.default = Popup;
//# sourceMappingURL=popup.js.map