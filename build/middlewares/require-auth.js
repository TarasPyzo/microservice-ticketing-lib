"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireAuth = void 0;
var not_auth_error_1 = require("../errors/not-auth-error");
var requireAuth = function (req, res, next) {
    if (!req.currentUser) {
        throw new not_auth_error_1.NotAuthError();
    }
    next();
};
exports.requireAuth = requireAuth;
