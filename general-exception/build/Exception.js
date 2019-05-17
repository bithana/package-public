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
var ts_custom_error_1 = require("ts-custom-error");
var Exception = /** @class */ (function (_super) {
    __extends(Exception, _super);
    function Exception(eid, message, visibility, solution, data) {
        if (visibility === void 0) { visibility = 'INTERNAL'; }
        var _this = _super.call(this, eid) || this;
        _this.eid = eid;
        _this.message = message;
        _this.visibility = visibility;
        _this.solution = solution;
        _this.data = data;
        Object.setPrototypeOf(_this, Exception.prototype);
        _this.type = _this.constructor.name;
        return _this;
    }
    /**
     * Whether `this` is given Exception Type
     * @param Exception_Class
     */
    Exception.prototype.is = function (Exception_Class) {
        return this instanceof Exception_Class;
    };
    Exception.prototype.set_eid = function (eid) {
        this.eid = eid;
    };
    Exception.prototype.get_data = function () {
        return this.data;
    };
    Exception.prototype.get_message = function () {
        return this.message;
    };
    Exception.prototype.get_solution = function () {
        return this.solution;
    };
    Exception.prototype.to_doc = function () {
        return this.eid + "\n    \n    Message:\n    " + (this.message || '-') + "\n\n    Solution:\n    " + (this.solution || '-') + "\n    \n    Data:\n    " + (this.data ? JSON.stringify(this.data) : '-') + "\n    ";
    };
    Exception.prototype.toString = function () {
        return "" + this.eid + (this.message ? ":" + this.message : '');
    };
    return Exception;
}(ts_custom_error_1.CustomError));
exports.Exception = Exception;
//# sourceMappingURL=Exception.js.map