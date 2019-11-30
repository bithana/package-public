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
var index_1 = require("../../index");
var Callee_fault = /** @class */ (function (_super) {
    __extends(Callee_fault, _super);
    function Callee_fault(title, solution) {
        if (title === void 0) { title = 'Something went wrong inside the callee.'; }
        if (solution === void 0) { solution = 'The thing you are calling has an internal state problem, Please contact us to fix this.'; }
        return _super.call(this, title, solution) || this;
    }
    return Callee_fault;
}(index_1.E));
exports.Callee_fault = Callee_fault;
//# sourceMappingURL=index.js.map