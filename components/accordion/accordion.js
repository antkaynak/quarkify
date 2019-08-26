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
require("../../styles/components/_accordion.scss");
var accordion_content_1 = __importDefault(require("./accordion-content"));
var accordion_header_1 = __importDefault(require("./accordion-header"));
var Accordion = /** @class */ (function (_super) {
    __extends(Accordion, _super);
    function Accordion(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            expanded: _this.props.expanded || false,
        };
        _this.handleHeaderClick = _this.handleHeaderClick.bind(_this);
        return _this;
    }
    Accordion.prototype.componentWillReceiveProps = function (nextProps, prevProps) {
        if (nextProps.expanded !== undefined) {
            this.setState({ expanded: nextProps.expanded });
        }
    };
    Accordion.prototype.componentWillUpdate = function (nextProps, nextState, nextContext) {
        if (nextState.expanded !== this.state.expanded) {
            if (!!this.props.onChange) {
                this.props.onChange(nextState.expanded);
            }
        }
    };
    Accordion.prototype.render = function () {
        var _a = this.props, className = _a.className, children = _a.children;
        var accordionClasses = classnames_1.default("q-accordion", className);
        var _b = react_1.default.Children.toArray(children), AccordionHeader = _b[0], AccordionContent = _b[1];
        return (react_1.default.createElement("div", { className: accordionClasses },
            react_1.default.cloneElement(AccordionHeader, { expanded: this.state.expanded, handleClick: this.handleHeaderClick }),
            react_1.default.cloneElement(AccordionContent, { expanded: this.state.expanded })));
    };
    Accordion.prototype.handleHeaderClick = function () {
        this.setState({ expanded: !this.state.expanded });
    };
    Accordion.Header = accordion_header_1.default;
    Accordion.Content = accordion_content_1.default;
    return Accordion;
}(react_1.PureComponent));
exports.default = Accordion;
//# sourceMappingURL=accordion.js.map