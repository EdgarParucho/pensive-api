"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSchema = exports.searchSchema = exports.updateSchema = exports.createSchema = void 0;
const validator_1 = require("validator");
function stringValidator(mandatory, length, value) {
    if (value == null)
        return mandatory;
    else if (typeof value != 'string')
        return true;
    else if (value.length == 0)
        return true;
    else if (length != null && value.length > length)
        return true;
    else
        return false;
}
exports.createSchema = [{
        requestKey: 'body',
        keyValidators: {
            title: (value) => stringValidator(true, 255, value),
            body: (value) => stringValidator(true, null, value),
            keywords: (value) => stringValidator(false, 255, value),
            reference: (value) => stringValidator(false, 255, value),
        }
    }];
exports.updateSchema = [{
        requestKey: 'params',
        keyValidators: {
            id: (value) => !(0, validator_1.isUUID)(value, 4),
        }
    }, {
        requestKey: 'body',
        keyValidators: {
            title: (value) => stringValidator(false, 255, value),
            body: (value) => stringValidator(false, null, value),
            keywords: (value) => stringValidator(false, 255, value),
            reference: (value) => stringValidator(false, 255, value),
        }
    }];
exports.searchSchema = {
    requestKey: 'query',
    keyValidators: {
        search: (value) => stringValidator(true, 255, value)
    }
};
exports.deleteSchema = [{
        requestKey: 'params',
        keyValidators: {
            id: (value) => !(0, validator_1.isUUID)(value, 4),
        }
    }];
