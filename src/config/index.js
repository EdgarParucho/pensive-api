const dotenv = require('dotenv');

dotenv.config();

const inProduction = process.env.NODE_ENV === 'production';

module.exports = {
  dbDialect: 'postgres',
 dbName: inProduction ? process.env.DB_NAME : process.env.DB_NAME_DEV,
 dbUser: inProduction ? process.env.DB_USER : process.env.DB_USER_DEV,
 dbPassword: inProduction ? process.env.DB_PASSWORD : process.env.DB_PASSWORD_DEV,
 dbHost: inProduction ? process.env.DB_HOST : process.env.DB_HOST_DEV,
 dbPort: inProduction ? Number(process.env.DB_PORT) : Number(process.env.DB_PORT_DEV),
};