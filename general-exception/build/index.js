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
var E = /** @class */ (function (_super) {
    __extends(E, _super);
    function E(message, solution, data) {
        var _this = _super.call(this, message) || this;
        _this.message = message;
        _this.solution = solution;
        _this.data = data;
        _this.eid = '';
        _this.chain = [];
        _this.eid = _this.make_eid();
        return _this;
    }
    E.prototype.make_eid = function (ins, eid) {
        if (ins === void 0) { ins = undefined; }
        if (eid === void 0) { eid = ''; }
        if (ins === undefined) {
            ins = this;
        }
        ins = Object.getPrototypeOf(ins);
        var name = ins.constructor.name.toLowerCase();
        this.chain.unshift(name);
        eid = name + (eid ? '.' : '') + eid;
        if (ins.constructor === E || ins.constructor === null) {
            return eid;
        }
        return this.make_eid(ins, eid);
    };
    /**
     * Whether `this` is given Exception Type
     * @param Exception_Class
     */
    E.prototype.is = function (Exception_Class) {
        return this instanceof Exception_Class;
    };
    E.prototype.to_doc = function () {
        return this.eid + "\n    \n    Message:\n    " + (this.message || '-') + "\n\n    Solution:\n    " + (this.solution || '-') + "\n    \n    Data:\n    " + (this.data ? JSON.stringify(this.data) : '-') + "\n    ";
    };
    E.prototype.toString = function () {
        return "" + this.eid + (this.message ? ":" + this.message : '');
    };
    return E;
}(ts_custom_error_1.CustomError));
exports.E = E;
//# sourceMappingURL=index.js.map