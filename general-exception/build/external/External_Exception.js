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
var Exception_1 = require("../Exception");
var External_Exception = /** @class */ (function (_super) {
    __extends(External_Exception, _super);
    function External_Exception(message, solution, data) {
        var _this = _super.call(this, 'UNKNOWN_EXTERNAL_EXCEPTION', message, 'EXTERNAL', solution, data) || this;
        _this.status_code = 400;
        Object.setPrototypeOf(_this, External_Exception.prototype);
        return _this;
    }
    return External_Exception;
}(Exception_1.Exception));
exports.External_Exception = External_Exception;
//# sourceMappingURL=External_Exception.js.map