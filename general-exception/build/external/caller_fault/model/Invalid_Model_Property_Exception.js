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
var Invalid_parameter_exception_1 = require("../Invalid_parameter_exception");
var Invalid_Model_Property_Exception = /** @class */ (function (_super) {
    __extends(Invalid_Model_Property_Exception, _super);
    function Invalid_Model_Property_Exception(message, solution, data) {
        var _this = _super.call(this, message, solution, data) || this;
        _this.eid = 'INVALID_MODEL_PROPERTY';
        Object.setPrototypeOf(_this, Invalid_Model_Property_Exception.prototype);
        return _this;
    }
    return Invalid_Model_Property_Exception;
}(Invalid_parameter_exception_1.Invalid_parameter_exception));
exports.Invalid_Model_Property_Exception = Invalid_Model_Property_Exception;
//# sourceMappingURL=Invalid_Model_Property_Exception.js.map