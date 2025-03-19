const express = require('express');
const Service = require('../services');
const bodyValidator = require('../middleware/bodyValidator');
const { noteSchemaValidator, searchSchemaValidator } = require('../middleware/schemaValidator');
const { createSchema, updateSchema, deleteSchema, searchSchema } = require('../utils/validationSchemas');
const authenticator = require('../middleware/authenticator');

const router = express.Router();
const service = new Service();

router.use(authenticator, bodyValidator);

router.get('/api', searchSchemaValidator(searchSchema), readNotesHandler);
router.post('/api', noteSchemaValidator(createSchema), createNoteHandler);
router.patch('/api/:id', noteSchemaValidator(updateSchema), updateNoteHandler);
router.delete('/api/:id', noteSchemaValidator(deleteSchema), deleteNoteHandler);
router.use('/*', function(_, res) {
  res.sendStatus(404)
});

function readNotesHandler(req, res, next) {
  const author = req.auth?.payload.sub;
  const { search } = req.query;
  service.read({ author, search })
    .then((notes) => res.json(notes))
    .catch((err) => next(err));
}

function createNoteHandler(req, res, next) {
  const author = req.auth?.payload.sub;
  service.create({ ...req.body, author })
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

module.exports = router;
