import { Request } from 'express';
import { IsUUID } from "sequelize-typescript";
import { Schema } from './types';

function attributeValidator(mandatory: boolean, length: number | null, value: string | null): boolean {
  if (value == null) return mandatory;
  else if (typeof value != 'string') return true;
  else if (value.length == 0 && mandatory) return true;
  else if (length != null && value.length > length) return true;
  else return false;
}

export const createSchema = {
  requestKey: 'body' as keyof Request,
  keyValidators: {
    title: (value: string) => attributeValidator(true, 255, value),
    body: (value: string) => attributeValidator(true, null, value),
    type: (value: string) => attributeValidator(true, 50, value),
    keywords: (value: string) => attributeValidator(false, 255, value),
    reference: (value: string) => attributeValidator(false, 255, value),
  }
} as Schema;

const updateSchema = {
  id: () => (value: string) => IsUUID(4)
};
