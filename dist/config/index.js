"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbPort = exports.dbHost = exports.dbPassword = exports.dbUser = exports.dbName = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.dbName = process.env.DB_NAME;
exports.dbUser = process.env.DB_USER;
exports.dbPassword = process.env.DB_PASSWORD;
exports.dbHost = process.env.DB_HOST;
exports.dbPort = Number(process.env.DB_PORT);
