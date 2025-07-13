"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.port = exports.environment = void 0;
exports.environment = (process.env.NODE_ENV || 'development');
if (exports.environment === 'development')
    require('dotenv').config();
exports.port = process.env.PORT || 3000;
