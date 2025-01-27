"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSchema = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
function attributeValidator(mandatory, length, value) {
    if (value == null)
        return mandatory;
    else if (typeof value != 'string')
        return true;
    else if (value.length == 0 && mandatory)
        return true;
    else if (length != null && value.length > length)
        return true;
    else
        return false;
}
exports.createSchema = {
    requestKey: 'body',
    keyValidators: {
        title: (value) => attributeValidator(true, 255, value),
        body: (value) => attributeValidator(true, null, value),
        type: (value) => attributeValidator(true, 50, value),
        keywords: (value) => attributeValidator(false, 255, value),
        reference: (value) => attributeValidator(false, 255, value),
    }
};
const updateSchema = {
    id: () => (value) => (0, sequelize_typescript_1.IsUUID)(4)
};
