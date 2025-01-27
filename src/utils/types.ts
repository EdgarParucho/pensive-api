import { Request } from 'express';
import Note from '../database/models';

export type Schema = {
  requestKey: keyof Request,
  keyValidators: {
    [key in keyof typeof Note.prototype]: (value: string) => boolean;
  }
};
