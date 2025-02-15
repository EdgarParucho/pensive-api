"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_oauth2_jwt_bearer_1 = require("express-oauth2-jwt-bearer");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const developing = process.env.NODE_ENV == 'development';
const audience = process.env[`AUTH0_AUDIENCE${developing ? '_DEV' : ''}`];
const issuerBaseURL = process.env[`AUTH0_ISSUER_URL${developing ? '_DEV' : ''}`];
const tokenSigningAlg = process.env.AUTH0_TOKEN_SIGNING_ALG;
exports.default = (0, express_oauth2_jwt_bearer_1.auth)({
    audience,
    issuerBaseURL,
    tokenSigningAlg,
});
