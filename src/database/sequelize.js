const { Sequelize } = require('sequelize');
const { dbName, dbUser, dbPassword, dbHost, dbPort, dbDialect } = require('../config');
const { NOTE_TABLE, noteSchema } = require('./models')
const inProduction = process.env.NODE_ENV === 'production';

const sequelize = new Sequelize({
  dialect: dbDialect,
  database: dbName,
  username: dbUser,
  password: dbPassword,
  host: dbHost,
  port: dbPort,
  models: [__dirname + '/models/index.js'],
  logging: inProduction ? false : console.log,
  ssl: inProduction
});

sequelize.define('Note', noteSchema, {
  tableName: NOTE_TABLE,
  timestamps: false,
});

module.exports = sequelize;