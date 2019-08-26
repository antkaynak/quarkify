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
require("../../styles/components/_select.scss");
var class_names_default_1 = __importDefault(require("../../utils/class-names-default"));
var icon_1 = __importDefault(require("../icon"));
var Select = /** @class */ (function (_super) {
    __extends(Select, _super);
    function Select() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Select.prototype.render = function () {
        var _a = this.props, items = _a.items, variant = _a.variant, fluid = _a.fluid, name = _a.name, value = _a.value, leftIcon = _a.leftIcon, rightIcon = _a.rightIcon, rightIconColor = _a.rightIconColor, leftIconColor = _a.leftIconColor, className = _a.className, disabled = _a.disabled, selected = _a.selected, error = _a.error, props = __rest(_a, ["items", "variant", "fluid", "name", "value", "leftIcon", "rightIcon", "rightIconColor", "leftIconColor", "className", "disabled", "selected", "error"]);
        var nameKey = name === undefined ? "name" : name;
        var valueKey = value === undefined ? "value" : value;
        var selectDivClasses = classnames_1.default("q-select-wrapper", class_names_default_1.default({ fluid: fluid, disabled: disabled }), className, error && "q-error");
        var selectClasses = classnames_1.default("q-select", !leftIcon && "select-left-padding", !rightIcon && "select-right-padding");
        return (react_1.default.createElement("div", { className: selectDivClasses },
            leftIcon && react_1.default.createElement(icon_1.default, { className: "q-select-icon-left", name: leftIcon, color: leftIconColor }),
            react_1.default.createElement("select", __assign({ defaultValue: selected, className: selectClasses, disabled: disabled }, props), items.map(function (item, index) {
                return (react_1.default.createElement("option", { key: index, value: item[valueKey], disabled: item.disabled, className: class_names_default_1.default({ variant: item.variant }) }, item[nameKey]));
            })),
            rightIcon && react_1.default.createElement(icon_1.default, { className: "q-select-icon-right", name: rightIcon, color: rightIconColor })));
    };
    return Select;
}(react_1.PureComponent));
exports.default = Select;
//# sourceMappingURL=select.js.map