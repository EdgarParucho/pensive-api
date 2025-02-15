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
const sequelize_2 = require("sequelize");
const { models } = sequelize_1.default;
class Service {
    create(fields) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!models.Note)
                throw new Error("Model 'Note' is not defined");
            return yield models.Note.create(fields);
        });
    }
    read(_a) {
        return __awaiter(this, arguments, void 0, function* ({ author, search }) {
            if (!models.Note)
                throw new Error("Model 'Note' is not defined");
            return yield models.Note.findAll({
                where: {
                    author,
                    [sequelize_2.Op.or]: {
                        title: { [sequelize_2.Op.iLike]: `%${search}%` },
                        body: { [sequelize_2.Op.iLike]: `%${search}%` },
                        keywords: { [sequelize_2.Op.iLike]: `%${search}%` }
                    }
                },
                attributes: { exclude: ["author"] }, raw: true
            });
        });
    }
    update(id, fields) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!models.Note)
                throw new Error("Model 'Note' is not defined");
            return yield models.Note.update(fields, { where: { id } });
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!models.Note)
                throw new Error("Model 'Note' is not defined");
            return yield models.Note.destroy({ where: { id } });
        });
    }
}
exports.default = Service;
