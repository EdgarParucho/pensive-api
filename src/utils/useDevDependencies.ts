import { Application } from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';

export default function useDevDependencies(app: Application) {
  dotenv.config();
  app.use(morgan('dev'));
}