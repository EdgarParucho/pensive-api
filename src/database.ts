import { Sequelize } from "sequelize-typescript";
import { dbName, dbUser, dbPassword, dbHost, dbPort } from "./config";

const sequelize = new Sequelize({
  dialect: "postgres",
  database: dbName,
  username: dbUser,
  password: dbPassword,
  host: dbHost,
  port: dbPort,
  models: [__dirname + "/models"],
  logging: process.env.NODE_ENV === "development" ? console.log : false,
});

export default sequelize;