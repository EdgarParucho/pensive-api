"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server");
const demoUser = process.env.DEMO_USER;
const authConfig = {
    development: {
        issuerBaseURL: process.env.AUTH0_ISSUER_DEV,
        audience: process.env.AUTH0_AUDIENCE_DEV,
        tokenSigningAlg: process.env.AUTH0_ALGORITHM_DEV,
        authScope: process.env.AUTH0_SCOPE_DEV,
        authClientSecret: process.env.AUTH0_CLIENT_SECRET_DEV,
        authClientID: process.env.AUTH0_CLIENT_ID_DEV,
        authGrantType: process.env.AUTH0_GRANT_TYPE_DEV,
        demoUser,
    },
    production: {
        issuerBaseURL: process.env.AUTH0_ISSUER,
        audience: process.env.AUTH0_AUDIENCE,
        tokenSigningAlg: process.env.AUTH0_ALGORITHM,
        authScope: process.env.AUTH0_SCOPE,
        authClientSecret: process.env.AUTH0_CLIENT_SECRET,
        authClientID: process.env.AUTH0_CLIENT_ID,
        authGrantType: process.env.AUTH0_GRANT_TYPE,
        demoUser,
    },
};
exports.default = authConfig[server_1.environment];
