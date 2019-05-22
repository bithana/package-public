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
var External_exception = /** @class */ (function (_super) {
    __extends(External_exception, _super);
    function External_exception(message, solution, data) {
        var _this = _super.call(this, 'UNKNOWN_EXTERNAL_EXCEPTION', message, 'EXTERNAL', solution, data) || this;
        _this.status_code = 400;
        Object.setPrototypeOf(_this, External_exception.prototype);
        return _this;
    }
    return External_exception;
}(Exception_1.Exception));
exports.External_exception = External_exception;
//# sourceMappingURL=External_exception.js.map