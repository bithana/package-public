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
var External_Exception_1 = require("../External_Exception");
var Invalid_Parameter_Exception = /** @class */ (function (_super) {
    __extends(Invalid_Parameter_Exception, _super);
    function Invalid_Parameter_Exception(message, solution, data) {
        var _this = _super.call(this, message, solution, data) || this;
        _this.eid = 'INVALID_PARAMETER';
        Object.setPrototypeOf(_this, Invalid_Parameter_Exception.prototype);
        return _this;
    }
    return Invalid_Parameter_Exception;
}(External_Exception_1.External_Exception));
exports.Invalid_Parameter_Exception = Invalid_Parameter_Exception;
//# sourceMappingURL=Invalid_Parameter_Exception.js.map