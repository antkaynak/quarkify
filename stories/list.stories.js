"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@storybook/react");
var react_2 = __importDefault(require("react"));
var list_1 = __importDefault(require("../components/list"));
var stories = react_1.storiesOf("List", module);
stories.add("Default", function () { return (react_2.default.createElement(list_1.default, null,
    react_2.default.createElement(list_1.default.Item, null, "15 g\u00FCn i\u00E7erisinde \u00FCcretsiz iade. Detayl\u0131 bilgi i\u00E7in.T\u0131klay\u0131n."),
    react_2.default.createElement(list_1.default.Item, null, "24 saatte kargoda f\u0131rsat\u0131 i\u015F g\u00FCnlerinde ge\u00E7erlidir."),
    react_2.default.createElement(list_1.default.Item, null, "Modelin \u00D6l\u00E7\u00FCleri: Boy: 1.75, G\u00F6\u011F\u00FCs: 80, Bel: 60, Kal\u00E7a: 88"),
    react_2.default.createElement(list_1.default.Item, null, "Mankenin \u00FCzerindeki \u00FCr\u00FCn S/36 bedendir."))); });
stories.add("No Dot", function () { return (react_2.default.createElement(list_1.default, { noDot: true },
    react_2.default.createElement(list_1.default.Item, null, "15 g\u00FCn i\u00E7erisinde \u00FCcretsiz iade. Detayl\u0131 bilgi i\u00E7in.T\u0131klay\u0131n."),
    react_2.default.createElement(list_1.default.Item, null, "24 saatte kargoda f\u0131rsat\u0131 i\u015F g\u00FCnlerinde ge\u00E7erlidir."),
    react_2.default.createElement(list_1.default.Item, null, "Modelin \u00D6l\u00E7\u00FCleri: Boy: 1.75, G\u00F6\u011F\u00FCs: 80, Bel: 60, Kal\u00E7a: 88"),
    react_2.default.createElement(list_1.default.Item, null, "Mankenin \u00FCzerindeki \u00FCr\u00FCn S/36 bedendir."))); });
stories.add("Icon", function () { return (react_2.default.createElement("div", null,
    react_2.default.createElement(list_1.default, { noDot: true },
        react_2.default.createElement(list_1.default.Item, { icon: "search" }, "15 g\u00FCn i\u00E7erisinde \u00FCcretsiz iade. Detayl\u0131 bilgi i\u00E7in"),
        react_2.default.createElement(list_1.default.Item, { icon: "search" }, "24 saatte kargoda f\u0131rsat\u0131 i\u015F g\u00FCnlerinde ge\u00E7erlidir."),
        react_2.default.createElement(list_1.default.Item, { icon: "search" }, "Modelin \u00D6l\u00E7\u00FCleri: Boy: 1.75, G\u00F6\u011F\u00FCs: 80, Bel: 60, Kal\u00E7a: 88"),
        react_2.default.createElement(list_1.default.Item, { icon: "search" }, "Mankenin \u00FCzerindeki \u00FCr\u00FCn S/36 bedendir.")),
    react_2.default.createElement("br", null),
    react_2.default.createElement("br", null),
    react_2.default.createElement(list_1.default, { noDot: true },
        react_2.default.createElement(list_1.default.Item, { icon: "search", iconColor: "red" }, "15 g\u00FCn i\u00E7erisinde \u00FCcretsiz iade. Detayl\u0131 bilgi i\u00E7in"),
        react_2.default.createElement(list_1.default.Item, { icon: "search", iconColor: "primary" }, "24 saatte kargoda f\u0131rsat\u0131 i\u015F g\u00FCnlerinde ge\u00E7erlidir."),
        react_2.default.createElement(list_1.default.Item, { icon: "search", iconColor: "green" }, "Modelin \u00D6l\u00E7\u00FCleri: Boy: 1.75, G\u00F6\u011F\u00FCs: 80, Bel: 60, Kal\u00E7a: 88"),
        react_2.default.createElement(list_1.default.Item, { icon: "search", iconColor: "black" }, "Mankenin \u00FCzerindeki \u00FCr\u00FCn S/36 bedendir.")))); });
//# sourceMappingURL=list.stories.js.map