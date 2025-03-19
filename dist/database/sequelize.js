"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = __importDefault(require("pg"));
const sequelize_typescript_1 = require("sequelize-typescript");
const config_1 = require("../config/");
const inProduction = process.env.NODE_ENV === 'production';
const sequelize = new sequelize_typescript_1.Sequelize({
    dialect: 'postgres',
    dialectModule: pg_1.default,
    database: config_1.dbName,
    username: config_1.dbUser,
    password: config_1.dbPassword,
    host: config_1.dbHost,
    port: config_1.dbPort,
    models: [__dirname + '/models'],
    logging: inProduction ? false : console.log,
    ssl: inProduction
});
exports.default = sequelize;
