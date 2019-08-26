"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.detectPassiveEvents = function () {
    var supportsPassive = false;
    try {
        var opts = Object.defineProperty({}, "passive", {
            get: function () {
                supportsPassive = true;
            },
        });
        // @ts-ignore
        window.addEventListener("testPassive", null, opts);
        // @ts-ignore
        window.removeEventListener("testPassive", null, opts);
        // tslint:disable-next-line:no-empty
    }
    catch (e) { }
    return supportsPassive;
};
//# sourceMappingURL=detectPassiveEvents.js.map