import pg from 'pg';
import { Sequelize } from 'sequelize-typescript';
import { dbName, dbUser, dbPassword, dbHost, dbPort } from '../config';

const inProduction = process.env.NODE_ENV === 'production';

const sequelize = new Sequelize({
  dialect: 'postgres',
  dialectModule: pg,
  database: dbName,
  username: dbUser,
  password: dbPassword,
  host: dbHost,
  port: dbPort,
  models: [__dirname + '/models'],
  logging: inProduction ? false : console.log,
  ssl: inProduction
});

export default sequelize;