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
var react_2 = __importStar(require("react"));
var button_1 = __importDefault(require("../components/button"));
var scroll_to_top_1 = __importDefault(require("../components/scroll-to-top"));
require("./styles/scroll-to-top.scss");
var stories = react_1.storiesOf("Scroll To Top", module);
var ScrollToTopWrapper = /** @class */ (function (_super) {
    __extends(ScrollToTopWrapper, _super);
    function ScrollToTopWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ScrollToTopWrapper.prototype.render = function () {
        return (react_2.default.createElement("div", null,
            Array.from({ length: 60 }, function (_, i) { return react_2.default.createElement("p", null,
                "Down ",
                i); }),
            react_2.default.createElement(scroll_to_top_1.default, { className: "basket-scroll", duration: 300, showUnder: 500 }),
            react_2.default.createElement("div", { className: "price" },
                react_2.default.createElement("div", { className: "price__container discount__container" },
                    react_2.default.createElement("div", { className: "price__discount" },
                        "Sepette %60 \u0130ndirim",
                        react_2.default.createElement("div", { className: "price__container__discount__price" },
                            react_2.default.createElement("span", null, "99,99"),
                            " ",
                            react_2.default.createElement("span", null, "TL"))),
                    react_2.default.createElement("div", { className: "price__add_to_basket__discount" },
                        react_2.default.createElement(button_1.default, { className: "price__add-button primary", variant: "primary" }, "Sepete Ekle"))))));
    };
    return ScrollToTopWrapper;
}(react_2.PureComponent));
stories.add("Default", function () { return react_2.default.createElement(ScrollToTopWrapper, null); });
//# sourceMappingURL=scroll-to-top.stories.js.map