"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const services_1 = __importDefault(require("../services"));
const bodyValidator_1 = __importDefault(require("../middleware/bodyValidator"));
const schemaValidator_1 = require("../middleware/schemaValidator");
const validationSchemas_1 = require("../utils/validationSchemas");
const authenticator_1 = __importDefault(require("../middleware/authenticator"));
const router = express_1.default.Router();
const service = new services_1.default();
router.use(authenticator_1.default, bodyValidator_1.default);
router.get('/api', (0, schemaValidator_1.searchSchemaValidator)(validationSchemas_1.searchSchema), readNotesHandler);
router.post('/api', (0, schemaValidator_1.noteSchemaValidator)(validationSchemas_1.createSchema), createNoteHandler);
router.patch('/api/:id', (0, schemaValidator_1.noteSchemaValidator)(validationSchemas_1.updateSchema), updateNoteHandler);
router.delete('/api/:id', (0, schemaValidator_1.noteSchemaValidator)(validationSchemas_1.deleteSchema), deleteNoteHandler);
router.use('/*', function (_, res) {
    res.sendStatus(404);
});
function readNotesHandler(req, res, next) {
    var _a;
    const author = (_a = req.auth) === null || _a === void 0 ? void 0 : _a.payload.sub;
    const { search } = req.query;
    service.read({ author, search })
        .then((notes) => res.json(notes))
        .catch((err) => next(err));
}
function createNoteHandler(req, res, next) {
    var _a;
    const author = (_a = req.auth) === null || _a === void 0 ? void 0 : _a.payload.sub;
    service.create(Object.assign(Object.assign({}, req.body), { author }))
        .then(() => res.sendStatus(201))
        .catch((err) => next(err));
}
function updateNoteHandler(req, res, next) {
    service.update(req.params.id, req.body)
        .then(() => res.sendStatus(200))
        .catch((err) => next(err));
}
function deleteNoteHandler(req, res, next) {
    service.delete(req.params.id)
        .then((itemDeleted) => itemDeleted ? res.sendStatus(204) : res.sendStatus(404))
        .catch((err) => next(err));
}
exports.default = router;
