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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Ripple = /** @class */ (function (_super) {
    __extends(Ripple, _super);
    function Ripple(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            rippleStyle: {
                backgroundColor: props.color,
                borderRadius: "50%",
                height: 1,
                opacity: 0,
                pointerEvents: "none",
                position: "absolute",
                transform: "translate(-50%, -50%) scale(0)",
                width: 1,
            },
        };
        _this.boxStyle = {
            display: _this.props.display,
            overflow: "hidden",
            position: "relative",
        };
        _this.onClick = _this.onClick.bind(_this);
        return _this;
    }
    Ripple.prototype.render = function () {
        if (!this.props.active) {
            return react_1.default.createElement(react_1.default.Fragment, null, this.props.children);
        }
        var _a = this.props, children = _a.children, during = _a.during, color = _a.color, onClick = _a.onClick, className = _a.className, active = _a.active, display = _a.display, props = __rest(_a, ["children", "during", "color", "onClick", "className", "active", "display"]);
        var rippleStyle = this.state.rippleStyle;
        return (react_1.default.createElement("div", __assign({}, props, { className: ("q-ripple " + className).trim(), style: this.boxStyle, onClick: this.onClick }),
            children,
            react_1.default.createElement("s", { style: rippleStyle })));
    };
    Ripple.prototype.onClick = function (event) {
        var _this = this;
        var _a = this.props, during = _a.during, onClick = _a.onClick;
        event.stopPropagation();
        var _b = event.currentTarget.getBoundingClientRect(), left = _b.left, top = _b.top, width = _b.width, height = _b.height;
        var size = Math.max(width, height);
        var rippleX = Math.round(event.clientX - left);
        var rippleY = Math.round(event.clientY - top);
        this.setState(function (state) {
            return {
                rippleStyle: __assign({}, state.rippleStyle, { height: size, left: rippleX, opacity: 1, top: rippleY, transform: "translate(-50%, -50%) scale(0)", transition: "initial", width: size }),
            };
        }, function () {
            setTimeout(function () {
                _this.setState(function (state) { return ({
                    rippleStyle: __assign({}, state.rippleStyle, { opacity: 0, transform: "translate(-50%, -50%) scale(2)", transition: "all " + during + "ms cubic-bezier(0.4, 0, 0.2, 1) 0s" }),
                }); });
            }, 50);
        });
        if (onClick) {
            onClick(event);
        }
    };
    Ripple.displayName = "Ripples";
    Ripple.defaultProps = {
        active: true,
        className: "",
        color: "rgba(0, 0, 0, 0.3)",
        display: "inline-flex",
        during: 550,
    };
    return Ripple;
}(react_1.default.PureComponent));
exports.default = Ripple;
//# sourceMappingURL=ripple.js.map