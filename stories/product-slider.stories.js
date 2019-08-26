"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@storybook/react");
var faker_1 = __importDefault(require("faker"));
var react_2 = __importDefault(require("react"));
var product_slider_1 = __importDefault(require("../components/product-slider"));
var stories = react_1.storiesOf("Product Slider", module);
var products = [
    {
        brand: faker_1.default.company.companyName(),
        src: "https://source.unsplash.com/random/150x250?fashion",
    },
];
for (var i = 0; i < 10; i++) {
    products.push({
        brand: faker_1.default.company.companyName(),
        src: "https://source.unsplash.com/random/150x250?fashion",
    });
}
stories.add("Default", function () { return (react_2.default.createElement("div", null,
    react_2.default.createElement("h1", null, "Benzer Urunler"),
    react_2.default.createElement(product_slider_1.default, null, products.map(function (product, key) { return (react_2.default.createElement("div", { key: key },
        react_2.default.createElement("img", { src: product.src }),
        react_2.default.createElement("p", null, product.brand))); })),
    react_2.default.createElement("h4", null, faker_1.default.lorem.lines(10)))); });
//# sourceMappingURL=product-slider.stories.js.map