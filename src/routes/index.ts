import express, { Request, Response, NextFunction } from 'express';
import Note from '../database/models';
import Service from '../services';
import bodyValidator from '../middleware/bodyValidator';
import schemaValidator from '../middleware/schemaValidator';
import { createSchema, updateSchema, deleteSchema } from '../utils/validationSchemas';
import authenticator from '../middleware/authenticator';

const router = express.Router();
const service = new Service();

router.use(authenticator, bodyValidator);

router.get('/api', readNotesHandler);
router.post('/api', schemaValidator(createSchema), createNoteHandler);
router.patch('/api/:id', schemaValidator(updateSchema), updateNoteHandler);
router.delete('/api/:id', schemaValidator(deleteSchema), deleteNoteHandler);
router.use('/*', function(_, res: Response) {
  res.sendStatus(404)
});

function readNotesHandler(req: Request, res: Response, next: NextFunction) {
  const author = 'auth0|1234567890';
  service.read(author)
    .then((notes: Note[]) => res.json(notes))
    .catch((err: Error) => next(err as Error));
}

function createNoteHandler(req: Request, res: Response, next: NextFunction) {
  service.create({ ...req.body as Partial<Note>, author: 'auth0|1234567890' })
    .then(() => res.sendStatus(201))
    .catch((err: Error) => next(err as Error));
}

function updateNoteHandler(req: Request, res: Response, next: NextFunction) {
  service.update(req.params.id as string, req.body as Partial<Note>)
    .then(() => res.sendStatus(200))
    .catch((err: Error) => next(err as Error));
}

function deleteNoteHandler(req: Request, res: Response, next: NextFunction) {
  service.delete(req.params.id as string)
    .then((itemDeleted) => itemDeleted ? res.sendStatus(204) : res.sendStatus(404))
    .catch((err: Error) => next(err as Error));
}

export default router;
