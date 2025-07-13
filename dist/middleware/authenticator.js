"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_oauth2_jwt_bearer_1 = require("express-oauth2-jwt-bearer");
const auth_1 = __importDefault(require("../config/auth"));
const { audience, issuerBaseURL, tokenSigningAlg } = auth_1.default;
exports.default = (0, express_oauth2_jwt_bearer_1.auth)({
    audience,
    issuerBaseURL,
    tokenSigningAlg,
});
