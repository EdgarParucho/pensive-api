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
const models_1 = __importDefault(require("../database/models"));
class Service {
    create(note) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield models_1.default.create(note);
                return data;
            }
            catch (error) {
                console.log(error);
                throw error;
            }
        });
    }
    read(author) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield models_1.default.findAll({ where: { author }, raw: true });
                return data;
            }
            catch (error) {
                console.log(error);
                throw error;
            }
        });
    }
    update(id, note) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield models_1.default.update(note, { where: { id } });
                return;
            }
            catch (error) {
                console.log(error);
                throw error;
            }
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield models_1.default.destroy({ where: { id } });
                return;
            }
            catch (error) {
                console.log(error);
                throw error;
            }
        });
    }
}
exports.default = Service;
