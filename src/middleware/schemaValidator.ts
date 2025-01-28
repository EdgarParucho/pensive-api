import { Request, Response, NextFunction } from 'express';
import { Schema } from '../utils/types';
import Note from '../database/models';

function schemaValidator(schemas: Schema[]): (req: Request, res: Response, next: NextFunction) => void {

  return (req: Request, res: Response, next: NextFunction) => {
  
    for (let schema of schemas) {
      const { requestKey, keyValidators } = schema;
      const payload: Partial<Note> = req[requestKey as keyof Request];

      const requestKeys = Object.keys(keyValidators);
      for (let key of requestKeys) {
        const payloadValue = payload[key as keyof Note];
        const keyValidator = keyValidators[key as keyof Note];
        const wrongValue = keyValidator!(payloadValue);
        if (wrongValue) return res.sendStatus(400);
      }

      const payloadKeys = Object.keys(payload);
      for (let key of payloadKeys) {
        const keyIsNotExpected = (key: string) => !requestKeys.includes(key);
        if (keyIsNotExpected(key)) return res.sendStatus(409);
      }

      if (requestKey == 'body' && payloadKeys.length == 0) return res.sendStatus(400);

    }

    next();
  };
}

export default schemaValidator;