import { Request } from 'express';
import Note from '../database/models';

export type NoteSchemaValidator = {
  requestKey: keyof Request,
  keyValidators: {
    [key in keyof typeof Note.prototype]: (value: string) => boolean;
  }
};

export type SearchSchemaValidator = {
  requestKey: 'query',
  keyValidators: {
    search: (value: string) => boolean;
  }
}