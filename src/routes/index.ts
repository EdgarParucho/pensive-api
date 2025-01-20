import express, { Request, Response } from 'express';
import Note from '../database/models';
import Service from '../services';

const router = express.Router();
const service = new Service();

router.post('/api', function(req: Request, res: Response) {
  service.create(req.body as Partial<Note>)
    .then(() => res.sendStatus(201))
    .catch((err: Error) => res.status(400));
})

router.get('/api',  function(req: Request, res: Response) {
  const author = 'auth0|1234567890';
  service.read(author)
    .then((notes: Note[]) => res.json(notes))
    .catch((err: Error) => res.status(400));
});

router.patch('/api/:id', function(req: Request, res: Response) {
  service.update(req.params.id, req.body as Partial<Note>)
    .then(() => res.sendStatus(200))
    .catch((err: Error) => res.status(400));
});

router.delete('/api/:id', function(req: Request, res: Response) {
  service.delete(req.params.id)
    .then(() => res.sendStatus(200))
    .catch((err: Error) => res.status(400));
});

router.use('/*', function(req: Request, res: Response) {
  res.sendStatus(404)
});


export default router;
