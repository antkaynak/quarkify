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
require("../../styles/components/_button.scss");
var class_names_default_1 = __importDefault(require("../../utils/class-names-default"));
var icon_1 = __importDefault(require("../icon"));
var loader_1 = __importDefault(require("../loader"));
var ripple_1 = __importDefault(require("../ripple"));
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.prototype.render = function () {
        var _a = this.props, _b = _a.variant, variant = _b === void 0 ? "primary" : _b, fluid = _a.fluid, disabled = _a.disabled, icon = _a.icon, round = _a.round, circular = _a.circular, children = _a.children, className = _a.className, _c = _a.loading, loading = _c === void 0 ? false : _c, _d = _a.ripple, ripple = _d === void 0 ? true : _d, props = __rest(_a, ["variant", "fluid", "disabled", "icon", "round", "circular", "children", "className", "loading", "ripple"]);
        var buttonClasses = classnames_1.default(class_names_default_1.default({ variant: variant, fluid: fluid, disabled: disabled, round: round }), circular && "q-circular", loading && "loading", "q-button");
        return (react_1.default.createElement(ripple_1.default, { className: className, display: fluid ? "block" : "inline-block", active: ripple && !(disabled || loading) },
            react_1.default.createElement("button", __assign({ className: buttonClasses, disabled: disabled || loading }, props),
                react_1.default.createElement(loader_1.default, { active: loading }),
                icon && react_1.default.createElement(icon_1.default, { name: icon }),
                children && react_1.default.createElement("span", null, children))));
    };
    return Button;
}(react_1.PureComponent));
exports.default = Button;
//# sourceMappingURL=button.js.map