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
const sequelize_1 = __importDefault(require("../database/sequelize"));
const { models } = sequelize_1.default;
class Service {
    create(note) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(note);
                yield models.Note.create(note);
                console.log('note created');
                return;
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
                const data = yield models.Note.findAll({ where: { author }, raw: true });
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
                yield models.Note.update(note, { where: { id } });
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
                yield models.Note.destroy({ where: { id } });
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
