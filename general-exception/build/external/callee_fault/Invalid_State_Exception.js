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
var External_exception_1 = require("../External_exception");
var Invalid_state_exception = /** @class */ (function (_super) {
    __extends(Invalid_state_exception, _super);
    function Invalid_state_exception(message, solution, data) {
        var _this = _super.call(this, message, solution, data) || this;
        Object.setPrototypeOf(_this, Invalid_state_exception.prototype);
        _this.eid = 'INVALID_STATE';
        return _this;
    }
    return Invalid_state_exception;
}(External_exception_1.External_exception));
exports.Invalid_state_exception = Invalid_state_exception;
//# sourceMappingURL=Invalid_state_exception.js.map