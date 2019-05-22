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
var Invalid_state_exception_1 = require("../Invalid_state_exception");
var Invalid_model_state_exception = /** @class */ (function (_super) {
    __extends(Invalid_model_state_exception, _super);
    function Invalid_model_state_exception(message, solution, data) {
        var _this = _super.call(this, message, solution, data) || this;
        _this.eid = 'INVALID_MODEL_STATE';
        Object.setPrototypeOf(_this, Invalid_model_state_exception.prototype);
        return _this;
    }
    return Invalid_model_state_exception;
}(Invalid_state_exception_1.Invalid_state_exception));
exports.Invalid_model_state_exception = Invalid_model_state_exception;
//# sourceMappingURL=Invalid_model_state_exception.js.map