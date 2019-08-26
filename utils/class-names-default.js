"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var classnames_1 = __importDefault(require("classnames"));
var classNamesDefault = function (props) {
    return classnames_1.default(props.className, props.variant && "q-" + props.variant, props.disabled && "q-disabled", props.size && "q-" + props.size, props.fluid && "q-fluid", props.error && "q-error", props.round && "q-round");
};
exports.default = classNamesDefault;
//# sourceMappingURL=class-names-default.js.map