import dotenv from 'dotenv';

dotenv.config();

const inProduction = process.env.NODE_ENV === 'production';

export const dbDialect = 'postgres';
export const dbName = inProduction ? process.env.DB_NAME : process.env.DB_NAME_DEV;
export const dbUser = inProduction ? process.env.DB_USER : process.env.DB_USER_DEV;
export const dbPassword = inProduction ? process.env.DB_PASSWORD : process.env.DB_PASSWORD_DEV;
export const dbHost = inProduction ? process.env.DB_HOST : process.env.DB_HOST_DEV;
export const dbPort = inProduction ? Number(process.env.DB_PORT) : Number(process.env.DB_PORT_DEV);
