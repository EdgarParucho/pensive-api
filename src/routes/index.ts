import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/api', function(req: Request, res: Response) {
  res.send('Hello world!')
});

router.use('/*', function(req: Request, res: Response) {
  res.sendStatus(404)
});


export default router;
