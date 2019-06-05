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
Object.defineProperty(exports, "__esModule", { value: true });
var E_1 = require("../E");
var External = /** @class */ (function (_super) {
    __extends(External, _super);
    function External() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.status_code = 400;
        return _this;
    }
    return External;
}(E_1.E));
exports.External = External;
//# sourceMappingURL=external.js.map