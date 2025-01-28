import { Request } from 'express';
import { Schema } from './types';
import { isUUID } from 'validator';

function stringValidator(mandatory: boolean, length: number | null, value: string | null): boolean {
  if (value == null) return mandatory;
  else if (typeof value != 'string') return true;
  else if (value.length == 0) return true;
  else if (length != null && value.length > length) return true;
  else return false;
}

export const createSchema = [{
  requestKey: 'body' as keyof Request,
  keyValidators: {
    title: (value: string) => stringValidator(true, 255, value),
    body: (value: string) => stringValidator(true, null, value),
    type: (value: string) => stringValidator(true, 50, value),
    keywords: (value: string) => stringValidator(false, 255, value),
    reference: (value: string) => stringValidator(false, 255, value),
  }
} as Schema];

export const updateSchema = [{
  requestKey: 'params' as keyof Request,
  keyValidators: {
    id: (value: string) => !isUUID(value, 4),
  }
} as Schema, {
  requestKey: 'body' as keyof Request,
  keyValidators: {
    title: (value: string) => stringValidator(false, 255, value),
    body: (value: string) => stringValidator(false, null, value),
    type: (value: string) => stringValidator(false, 50, value),
    keywords: (value: string) => stringValidator(false, 255, value),
    reference: (value: string) => stringValidator(false, 255, value),
  }
} as Schema];

export const deleteSchema = [{
  requestKey: 'params' as keyof Request,
  keyValidators: {
    id: (value: string) => !isUUID(value, 4),
  }
} as Schema];