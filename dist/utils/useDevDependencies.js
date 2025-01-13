"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = useDevDependencies;
const dotenv_1 = __importDefault(require("dotenv"));
const morgan_1 = __importDefault(require("morgan"));
function useDevDependencies(app) {
    console.log('Using dev dependencies');
    console.log('Reading .env file', process.env.NODE_ENV);
    dotenv_1.default.config();
    app.use((0, morgan_1.default)('dev'));
}
