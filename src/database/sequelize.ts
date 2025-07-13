import pg from 'pg';
import { Sequelize } from 'sequelize-typescript';
import { environment } from '../config/server';
import dbConfig from '../config/database';

const sequelize = new Sequelize({
  ...dbConfig[environment],
  dialect: 'postgres',
  dialectModule: pg,
  models: [__dirname + '/models'],
  logging: environment === 'production' ? false : console.log,
});

export default sequelize;