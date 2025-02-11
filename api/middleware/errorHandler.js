"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function errorLogger(error, req, res, next) {
    if (process.env.NODE_ENV === 'development')
        console.error('catching: ', error);
    next(error);
}
function authErrorHandler(error, req, res, next) {
    const { UnauthorizedError } = require('express-oauth2-jwt-bearer');
    if (error instanceof UnauthorizedError)
        res.sendStatus(401);
    else
        next(error);
}
function dbErrorHandler(error, req, res, next) {
    const { ConnectionError, ValidationError, DatabaseError } = require('sequelize');
    if (error instanceof ConnectionError)
        res.sendStatus(503);
    else if (error instanceof ValidationError)
        res.sendStatus(409);
    else if (error instanceof DatabaseError)
        res.sendStatus(500);
    else
        next(error);
}
function serverErrorHandler(error, req, res, next) {
    res.sendStatus(500);
}
exports.default = [errorLogger, authErrorHandler, dbErrorHandler, serverErrorHandler];
