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
var chalk_1 = require("chalk");
var ts_custom_error_1 = require("ts-custom-error");
var constant_1 = require("./src/constant");
var E = /** @class */ (function (_super) {
    __extends(E, _super);
    function E(title, solution, data) {
        var _this = _super.call(this) || this;
        /**
         * Unique error code for error identifying, can be overwritten by by descendents.
         */
        _this.eid = constant_1.GENERAL_EXCEPTION;
        /**
         * Error chain from inheritance.
         * @example [ 'e', 'external', 'invalid_api_argument' ]
         */
        _this.chain = [];
        _this.title = title;
        _this.solution = solution;
        _this.data = data;
        _this.echain = _this.generate_echain();
        // Last order
        _this.message = _this.toString();
        return _this;
    }
    /**
     * @param ins
     * @param echain
     */
    E.prototype.generate_echain = function (ins) {
        if (ins === void 0) { ins = undefined; }
        if (ins === undefined) {
            ins = this;
        }
        ins = Object.getPrototypeOf(ins);
        var name = ins.constructor.name.toLowerCase();
        this.chain.unshift(name);
        if (ins.constructor === E || !ins.constructor) {
            return this.chain.join('.');
        }
        return this.generate_echain(ins);
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
        var _a, _b, _c, _d;
        var key_color = chalk_1.cyan.bold;
        var title = chalk_1.red.bold("" + (_a = this.title, (_a !== null && _a !== void 0 ? _a : '-')));
        var detail = "\n\n  " + key_color('Solution:') + " " + (_b = this.solution, (_b !== null && _b !== void 0 ? _b : '-')) + "\n  " + key_color('Eid:') + " " + (_c = this.eid, (_c !== null && _c !== void 0 ? _c : '-')) + "\n  " + key_color('Echain:') + " " + (_d = this.echain, (_d !== null && _d !== void 0 ? _d : '-')) + "\n";
        return title + detail;
    };
    return E;
}(ts_custom_error_1.CustomError));
exports.E = E;
//# sourceMappingURL=index.js.map