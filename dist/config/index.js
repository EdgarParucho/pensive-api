"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbPort = exports.dbDialect = exports.dbHost = exports.dbPassword = exports.dbUser = exports.dbName = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const inProduction = process.env.NODE_ENV === 'production';
exports.dbName = inProduction ? process.env.DB_NAME : process.env.DB_NAME_DEV;
exports.dbUser = inProduction ? process.env.DB_USER : process.env.DB_USER_DEV;
exports.dbPassword = inProduction ? process.env.DB_PASSWORD : process.env.DB_PASSWORD_DEV;
exports.dbHost = inProduction ? process.env.DB_HOST : process.env.DB_HOST_DEV;
exports.dbDialect = 'postgres';
exports.dbPort = inProduction ? Number(process.env.DB_PORT) : Number(process.env.DB_PORT_DEV);
