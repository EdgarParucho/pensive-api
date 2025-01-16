import express, { Request, Response } from 'express';
import Note from '../database/models';
import Service from '../services';

const router = express.Router();
const service = new Service();

router.get('/api',  function(req: Request, res: Response) {
  res.send('Hello world!');
});

router.post('/api', function(req: Request, res: Response) {
  service.create(req.body as Partial<Note>)
    .then((note: Note) => res.json(note))
    .catch((err: Error) => res.status(400));
})

router.use('/*', function(req: Request, res: Response) {
  res.sendStatus(404)
});


export default router;
