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
var Caller_fault = /** @class */ (function (_super) {
    __extends(Caller_fault, _super);
    function Caller_fault(title, solution) {
        if (title === void 0) { title = 'You likely have an error in you input.'; }
        if (solution === void 0) { solution = 'If you are confused about this, contact us to fix it.'; }
        return _super.call(this, title, solution) || this;
    }
    return Caller_fault;
}(index_1.E));
exports.Caller_fault = Caller_fault;
//# sourceMappingURL=index.js.map