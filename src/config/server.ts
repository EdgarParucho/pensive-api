export const environment = (process.env.NODE_ENV || 'development') as 'development' | 'production';

if (environment === 'development') require('dotenv').config();

export const port = process.env.PORT || 3000;