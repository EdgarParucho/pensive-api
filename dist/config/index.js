"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth0ManageApiGrant = exports.auth0ManageApiClientSecret = exports.auth0ManageApiClientID = exports.issuerBaseURL = exports.dbPort = exports.dbHost = exports.dbPassword = exports.dbUser = exports.dbName = exports.dbDialect = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const inProduction = process.env.NODE_ENV === 'production';
exports.dbDialect = 'postgres';
exports.dbName = inProduction ? process.env.DB_NAME : process.env.DB_NAME_DEV;
exports.dbUser = inProduction ? process.env.DB_USER : process.env.DB_USER_DEV;
exports.dbPassword = inProduction ? process.env.DB_PASSWORD : process.env.DB_PASSWORD_DEV;
exports.dbHost = inProduction ? process.env.DB_HOST : process.env.DB_HOST_DEV;
exports.dbPort = inProduction ? Number(process.env.DB_PORT) : Number(process.env.DB_PORT_DEV);
exports.issuerBaseURL = inProduction ? process.env.AUTH0_ISSUER_URL : process.env.AUTH0_ISSUER_URL_DEV;
exports.auth0ManageApiClientID = inProduction ? process.env.AUTH0_MANAGE_API_CLIENT_ID : process.env.AUTH0_MANAGE_API_CLIENT_ID_DEV;
exports.auth0ManageApiClientSecret = inProduction ? process.env.AUTH0_MANAGE_API_CLIENT_SECRET : process.env.AUTH0_MANAGE_API_CLIENT_SECRET_DEV;
exports.auth0ManageApiGrant = process.env.AUTH0_MANAGE_API_GRANT;
