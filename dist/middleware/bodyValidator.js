"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = bodyValidator;
function bodyValidator(req, res, next) {
    if (!req.body || typeof req.body !== 'object')
        res.sendStatus(400);
    else if (JSON.stringify(req.body).includes("<script>"))
        res.sendStatus(400);
    next();
}
