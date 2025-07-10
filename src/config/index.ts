import dotenv from 'dotenv';

dotenv.config();

const inProduction = process.env.NODE_ENV === 'production';

export const dbDialect = 'postgres';
export const dbName = inProduction ? process.env.DB_NAME : process.env.DB_NAME_DEV;
export const dbUser = inProduction ? process.env.DB_USER : process.env.DB_USER_DEV;
export const dbPassword = inProduction ? process.env.DB_PASSWORD : process.env.DB_PASSWORD_DEV;
export const dbHost = inProduction ? process.env.DB_HOST : process.env.DB_HOST_DEV;
export const dbPort = inProduction ? Number(process.env.DB_PORT) : Number(process.env.DB_PORT_DEV);
export const issuerBaseURL = inProduction ? process.env.AUTH0_ISSUER_URL : process.env.AUTH0_ISSUER_URL_DEV
export const auth0ManageApiClientID = inProduction ? process.env.AUTH0_MANAGE_API_CLIENT_ID : process.env.AUTH0_MANAGE_API_CLIENT_ID_DEV
export const auth0ManageApiClientSecret = inProduction ? process.env.AUTH0_MANAGE_API_CLIENT_SECRET : process.env.AUTH0_MANAGE_API_CLIENT_SECRET_DEV
export const auth0ManageApiGrant = process.env.AUTH0_MANAGE_API_GRANT;
export const demoUser = process.env.DEMO_USER;