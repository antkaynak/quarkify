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
var icon_1 = __importDefault(require("../icon"));
var Header = /** @class */ (function (_super) {
    __extends(Header, _super);
    function Header() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Header.prototype.render = function () {
        var _a = this.props, children = _a.children, rightIcon = _a.rightIcon, leftIcon = _a.leftIcon, leftIconOnClick = _a.leftIconOnClick, rightIconOnClick = _a.rightIconOnClick;
        var headerClasses = classnames_1.default("q-modal-header", leftIcon && "q-has-left-icon");
        return (react_1.default.createElement("div", { className: headerClasses },
            leftIcon &&
                react_1.default.createElement(icon_1.default, { className: "q-i", "aria-label": leftIcon, name: leftIcon, onClick: leftIconOnClick }),
            react_1.default.createElement("h1", { className: "q-modal-title" }, children),
            rightIcon &&
                react_1.default.createElement(icon_1.default, { className: "q-i", "aria-label": rightIcon, name: rightIcon, onClick: rightIconOnClick })));
    };
    return Header;
}(react_1.PureComponent));
exports.default = Header;
//# sourceMappingURL=modal-header.js.map