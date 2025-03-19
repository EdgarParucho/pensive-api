const { auth } = require('express-oauth2-jwt-bearer');
const dotenv = require('dotenv');

dotenv.config();

const developing = process.env.NODE_ENV == 'development';
const audience = process.env[`AUTH0_AUDIENCE${developing ? '_DEV' : ''}`];
const issuerBaseURL = process.env[`AUTH0_ISSUER_URL${developing ? '_DEV' : ''}`];
const tokenSigningAlg = process.env.AUTH0_TOKEN_SIGNING_ALG;

module.exports = auth({
  audience,
  issuerBaseURL,
  tokenSigningAlg,  
});