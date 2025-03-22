"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../config");
const models_1 = __importDefault(require("../database/models"));
class Auth0Service {
    constructor() {
        this.UpdateAccount = ({ author, password }) => new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                const accessToken = yield this.getManagementApiAccesToken();
                const response = yield fetch(`${config_1.issuerBaseURL}api/v2/users/${author}`, {
                    method: 'PATCH',
                    headers: {
                        'Authorization': `Bearer ${accessToken}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(password)
                });
                if (response.status >= 400)
                    reject(response);
                else
                    resolve(response);
            }
            catch (error) {
                reject(error);
            }
        }));
        this.DeleteAccount = ({ author }) => new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                const accessToken = yield this.getManagementApiAccesToken();
                const response = yield fetch(`${config_1.issuerBaseURL}api/v2/users/${author}`, {
                    method: 'DELETE',
                    headers: {
                        'Authorization': `Bearer ${accessToken}`,
                        'Content-Type': 'application/json'
                    }
                });
                if (response.status >= 400)
                    throw new Error(response.statusText);
                yield models_1.default.destroy({ where: { author } });
                resolve(response);
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    getManagementApiAccesToken() {
        return fetch(`${config_1.issuerBaseURL}oauth/token`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                audience: `${config_1.issuerBaseURL}api/v2/`,
                grant_type: config_1.auth0ManageApiGrant,
                client_id: config_1.auth0ManageApiClientID,
                client_secret: config_1.auth0ManageApiClientSecret,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
            if (data.error)
                throw new Error(data.error_description);
            else
                return data.access_token;
        })
            .catch((error) => {
            throw error;
        });
    }
}
exports.default = Auth0Service;
