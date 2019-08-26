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
require("../../styles/components/_subheader.scss");
var icon_1 = __importDefault(require("../icon"));
var typography_1 = __importDefault(require("../typography"));
var SubHeader = /** @class */ (function (_super) {
    __extends(SubHeader, _super);
    function SubHeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SubHeader.prototype.render = function () {
        var _a = this.props, title = _a.title, rightIcon = _a.rightIcon, leftIcon = _a.leftIcon, className = _a.className, leftIconOnClick = _a.leftIconOnClick, rightIconOnClick = _a.rightIconOnClick, props = __rest(_a, ["title", "rightIcon", "leftIcon", "className", "leftIconOnClick", "rightIconOnClick"]);
        var subHeaderClasses = classnames_1.default("q-subheader", className);
        return (react_1.default.createElement("div", __assign({ className: subHeaderClasses }, props),
            react_1.default.createElement("div", { className: "left-icon", onClick: leftIconOnClick }, leftIcon && react_1.default.createElement(icon_1.default, { name: leftIcon })),
            react_1.default.createElement("div", { className: "title" },
                react_1.default.createElement(typography_1.default, { variant: "body", color: "black" }, title)),
            react_1.default.createElement("div", { className: "right-icon", onClick: rightIconOnClick }, rightIcon && react_1.default.createElement(icon_1.default, { name: rightIcon })),
            react_1.default.createElement("div", null)));
    };
    return SubHeader;
}(react_1.PureComponent));
exports.default = SubHeader;
//# sourceMappingURL=subheader.js.map