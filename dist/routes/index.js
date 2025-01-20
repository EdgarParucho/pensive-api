"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const services_1 = __importDefault(require("../services"));
const router = express_1.default.Router();
const service = new services_1.default();
router.post('/api', function (req, res, next) {
    service.create(req.body)
        .then(() => res.sendStatus(201))
        .catch((err) => next(err));
});
router.get('/api', function (req, res, next) {
    const author = 'auth0|1234567890';
    service.read(author)
        .then((notes) => res.json(notes))
        .catch((err) => next(err));
});
router.patch('/api/:id', function (req, res, next) {
    service.update(req.params.id, req.body)
        .then(() => res.sendStatus(200))
        .catch((err) => next(err));
});
router.delete('/api/:id', function (req, res, next) {
    service.delete(req.params.id)
        .then(() => res.sendStatus(200))
        .catch((err) => next(err));
});
router.use('/*', function (req, res) {
    res.sendStatus(404);
});
exports.default = router;
