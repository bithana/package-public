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
var index_1 = require("./index");
var Invalid_argument = /** @class */ (function (_super) {
    __extends(Invalid_argument, _super);
    function Invalid_argument() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Invalid_argument;
}(index_1.Caller_fault));
exports.Invalid_argument = Invalid_argument;
//# sourceMappingURL=invalid_argument.js.map