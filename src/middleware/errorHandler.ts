import { Request, Response, NextFunction } from "express";

function errorLogger(error : Error, req: Request, res: Response, next: NextFunction) {
  if (process.env.NODE_ENV === 'development') console.error(error);
  next(error);
}

function dbErrorHandler(error : Error, req: Request, res: Response, next: NextFunction) {
  const { ConnectionError, ValidationError, DatabaseError } = require('sequelize');
  if (error instanceof ConnectionError) res.sendStatus(503);
  else if (error instanceof ValidationError) res.sendStatus(409);
  else if (error instanceof DatabaseError) res.sendStatus(500);
  else next(error);
}

function serverErrorHandler(error : Error, req: Request, res: Response, next: NextFunction) {
  res.sendStatus(500);
}

export default [errorLogger, dbErrorHandler, serverErrorHandler];
