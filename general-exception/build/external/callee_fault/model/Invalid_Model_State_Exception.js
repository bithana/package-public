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
var Invalid_State_Exception_1 = require("../Invalid_State_Exception");
var Invalid_Model_State_Exception = /** @class */ (function (_super) {
    __extends(Invalid_Model_State_Exception, _super);
    function Invalid_Model_State_Exception(message, solution, data) {
        var _this = _super.call(this, message, solution, data) || this;
        _this.eid = 'INVALID_MODEL_STATE';
        Object.setPrototypeOf(_this, Invalid_Model_State_Exception.prototype);
        return _this;
    }
    return Invalid_Model_State_Exception;
}(Invalid_State_Exception_1.Invalid_State_Exception));
exports.Invalid_Model_State_Exception = Invalid_Model_State_Exception;
//# sourceMappingURL=Invalid_Model_State_Exception.js.map