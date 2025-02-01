import { auth } from 'express-oauth2-jwt-bearer';
import dotenv from 'dotenv';

dotenv.config();

const developing = process.env.NODE_ENV == 'development';
const audience = process.env[`AUTH0_AUDIENCE${developing ? '_DEV' : ''}`] as string;
const issuerBaseURL = process.env[`AUTH0_ISSUER_URL${developing ? '_DEV' : ''}`] as string;
const tokenSigningAlg = process.env.AUTH0_TOKEN_SIGNING_ALG;

export default auth({
  audience,
  issuerBaseURL,
  tokenSigningAlg,  
});