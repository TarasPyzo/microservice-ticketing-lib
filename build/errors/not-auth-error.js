"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotAuthError = void 0;
var custom_error_1 = require("./custom-error");
var NotAuthError = /** @class */ (function (_super) {
    __extends(NotAuthError, _super);
    function NotAuthError() {
        var _this = _super.call(this, 'Not authorized') || this;
        _this.statusCode = 401;
        Object.setPrototypeOf(_this, NotAuthError.prototype);
        return _this;
    }
    NotAuthError.prototype.serializeErrors = function () {
        return [{ message: 'Not authorized' }];
    };
    return NotAuthError;
}(custom_error_1.CustomError));
exports.NotAuthError = NotAuthError;