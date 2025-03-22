import express, { Request, Response, NextFunction } from 'express';
import Note from '../database/models';
import Service from '../services';
import Auth0Service from '../services/auth0Service';
import bodyValidator from '../middleware/bodyValidator';
import { noteSchemaValidator, searchSchemaValidator } from '../middleware/schemaValidator';
import { createSchema, updateSchema, deleteSchema, searchSchema } from '../utils/validationSchemas';
import authenticator from '../middleware/authenticator';

const router = express.Router();
const service = new Service();
const auth0Service = new Auth0Service();

router.use(authenticator, bodyValidator);

router.get('/api/note', searchSchemaValidator(searchSchema), readNotesHandler);
router.post('/api/note', noteSchemaValidator(createSchema), createNoteHandler);
router.patch('/api/note/:id', noteSchemaValidator(updateSchema), updateNoteHandler);
router.delete('/api/note/:id', noteSchemaValidator(deleteSchema), deleteNoteHandler);

router.patch('/api/account', updateAccountHandler);
router.delete('/api/account', deleteAccountHandler);

router.use('/*', function(_, res: Response) {
  res.sendStatus(404)
});

function readNotesHandler(req: Request, res: Response, next: NextFunction) {
  const author = req.auth?.payload.sub;
  const { search } = req.query;
  service.read({ author, search } as { author: string, search: string })
    .then((notes: Note[]) => res.json(notes))
    .catch((err: Error) => next(err as Error));
}

function createNoteHandler(req: Request, res: Response, next: NextFunction) {
  const author = req.auth?.payload.sub;
  service.create({ ...req.body as Partial<Note>, author })
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

function updateAccountHandler(req: Request, res: Response, next: NextFunction) {
  auth0Service.UpdateAccount({ author: req.auth?.payload.sub as string, password: req.body })
    .then(() => res.sendStatus(204))
    .catch((err: Error) => next(err as Error));
}

function deleteAccountHandler(req: Request, res: Response, next: NextFunction) {
  auth0Service.DeleteAccount({ author: req.auth?.payload.sub as string })
    .then(() => res.sendStatus(204))
    .catch((err: Error) => next(err as Error));
}

export default router;
