import express, { Request, Response } from 'express';
import noteRouter from './note';

const router = express.Router();

router.use('/api', noteRouter);

router.use('/*', function(req: Request, res: Response) {
  res.sendStatus(404)
});


export default router;
