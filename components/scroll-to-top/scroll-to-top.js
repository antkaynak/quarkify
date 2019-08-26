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
require("../../styles/components/_scroll-to-top.scss");
var detectPassiveEvents_1 = require("../../utils/detectPassiveEvents");
var icon_1 = __importDefault(require("../icon"));
var ScrollToTop = /** @class */ (function (_super) {
    __extends(ScrollToTop, _super);
    function ScrollToTop(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            show: false,
        };
        _this.lastScrollPosition = 0;
        _this.requestAnimationFrameId = null;
        _this.initialPosition = 0;
        _this.startTime = null;
        _this.handleClick = _this.handleClick.bind(_this);
        _this.handleScroll = _this.handleScroll.bind(_this);
        _this.scrollStep = _this.scrollStep.bind(_this);
        _this.stopScrolling = _this.stopScrolling.bind(_this);
        return _this;
    }
    ScrollToTop.prototype.componentDidMount = function () {
        // this.handleScroll();
        window.document.addEventListener("scroll", this.handleScroll, detectPassiveEvents_1.detectPassiveEvents() ? { passive: true } : false);
        window.document.addEventListener("wheel", this.stopScrolling, detectPassiveEvents_1.detectPassiveEvents() ? { passive: true } : false);
        window.document.addEventListener("touchstart", this.stopScrolling, detectPassiveEvents_1.detectPassiveEvents() ? { passive: true } : false);
    };
    ScrollToTop.prototype.componentWillUnmount = function () {
        window.document.removeEventListener("scroll", this.handleScroll);
        window.document.removeEventListener("wheel", this.handleScroll, false);
        window.document.removeEventListener("touchstart", this.handleScroll, false);
    };
    ScrollToTop.prototype.render = function () {
        var scrollToTopClasses = classnames_1.default("q-scroll-to-top", !this.state.show && "hide", this.props.className);
        return (react_1.default.createElement("div", { className: scrollToTopClasses, onClick: this.handleClick },
            react_1.default.createElement(icon_1.default, { name: "arrow-top", color: "white" })));
    };
    ScrollToTop.prototype.handleClick = function () {
        this.startTime = null;
        this.initialPosition = window.pageYOffset;
        if (!this.props.smooth) {
            // Scroll without animation
            window.scrollTo(0, 0);
        }
        else {
            this.requestAnimationFrameId = window.requestAnimationFrame(this.scrollStep);
        }
    };
    ScrollToTop.prototype.handleScroll = function () {
        this.setState({ show: window.pageYOffset <= this.lastScrollPosition &&
                window.pageYOffset > this.props.showUnder,
        });
        this.lastScrollPosition = window.pageYOffset;
    };
    ScrollToTop.prototype.scrollStep = function (timestamp) {
        window.document.removeEventListener("scroll", this.handleScroll);
        if (!this.startTime) {
            this.startTime = timestamp;
        }
        var scrollPosition = this.easeOutCubic(timestamp - this.startTime, this.initialPosition, this.props.duration);
        if (window.pageYOffset > 0) {
            window.scrollTo(0, scrollPosition);
            this.requestAnimationFrameId = window.requestAnimationFrame(this.scrollStep);
        }
        else {
            this.stopScrolling();
        }
    };
    ScrollToTop.prototype.stopScrolling = function () {
        if (this.requestAnimationFrameId) {
            window.cancelAnimationFrame(this.requestAnimationFrameId);
            window.document.addEventListener("scroll", this.handleScroll, detectPassiveEvents_1.detectPassiveEvents() ? { passive: true } : false);
            this.setState({ show: false });
            this.requestAnimationFrameId = null;
        }
    };
    ScrollToTop.prototype.easeOutCubic = function (currentTime, initialPosition, duration) {
        var c = 0 - initialPosition;
        return c * ((currentTime = currentTime / duration - 1) * currentTime * currentTime + 1) + initialPosition;
    };
    ScrollToTop.defaultProps = {
        duration: 500,
        showUnder: 0,
        smooth: true,
    };
    return ScrollToTop;
}(react_1.PureComponent));
exports.default = ScrollToTop;
//# sourceMappingURL=scroll-to-top.js.map