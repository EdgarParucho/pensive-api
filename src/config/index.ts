import dotenv from 'dotenv';

dotenv.config();

export const dbName = process.env.DB_NAME;
export const dbUser = process.env.DB_USER;
export const dbPassword = process.env.DB_PASSWORD;
export const dbHost = process.env.DB_HOST;
export const dbPort = Number(process.env.DB_PORT);
