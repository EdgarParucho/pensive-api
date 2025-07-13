"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = __importDefault(require("pg"));
const sequelize_typescript_1 = require("sequelize-typescript");
const server_1 = require("../config/server");
const database_1 = __importDefault(require("../config/database"));
const sequelize = new sequelize_typescript_1.Sequelize(Object.assign(Object.assign({}, database_1.default[server_1.environment]), { dialect: 'postgres', dialectModule: pg_1.default, models: [__dirname + '/models'], logging: server_1.environment === 'production' ? false : console.log }));
exports.default = sequelize;
