import { auth } from 'express-oauth2-jwt-bearer';
import authConfig from '../config/auth';

const { audience, issuerBaseURL, tokenSigningAlg } = authConfig;

export default auth({
  audience,
  issuerBaseURL,
  tokenSigningAlg,  
});