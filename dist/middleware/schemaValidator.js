"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function schemaValidator(schema) {
    return (req, res, next) => {
        const { requestKey, keyValidators } = schema;
        const payload = req[requestKey];
        const requestKeys = Object.keys(keyValidators);
        for (let key of requestKeys) {
            const payloadValue = payload[key];
            const keyValidator = keyValidators[key];
            const wrongValue = keyValidator(payloadValue);
            if (wrongValue)
                return res.sendStatus(400);
        }
        const payloadKeys = Object.keys(payload);
        for (let key of payloadKeys) {
            const keyIsNotExpected = (key) => !requestKeys.includes(key);
            if (keyIsNotExpected(key))
                return res.sendStatus(409);
        }
        next();
    };
}
exports.default = schemaValidator;
