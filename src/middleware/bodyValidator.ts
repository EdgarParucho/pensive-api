import { Request, Response, NextFunction } from 'express';

export default function bodyValidator(req: Request, res: Response, next: NextFunction) {
  if (!req.body || typeof req.body !== 'object') res.sendStatus(400);
  else if (JSON.stringify(req.body).includes("<script>")) res.sendStatus(400);
  next();
}
