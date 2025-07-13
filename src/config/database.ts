const { environment } = require('./server');

if (environment === 'development') require('dotenv').config();

export default {
  development: {
    username: process.env.DB_USER_DEV!,
    password: process.env.DB_PASSWORD_DEV!,
    database: process.env.DB_NAME_DEV!,
    host: process.env.DB_HOST_DEV!,
    port: Number(process.env.DB_PORT_DEV)!,
  },
  production: {
    username: process.env.DB_USER!,
    password: process.env.DB_PASSWORD!,
    database: process.env.DB_NAME!,
    host: process.env.DB_HOST!,
    port: Number(process.env.DB_PORT)!,
  }
};
