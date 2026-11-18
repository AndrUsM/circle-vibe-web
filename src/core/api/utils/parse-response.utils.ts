import { z } from 'zod';

export const parseArrayToModels =
  <T extends z.ZodType>(schema: T) =>
  (data: unknown): z.infer<T>[] =>
    z.array(schema).parse(data);

export const parseObjectToModel =
  <T extends z.ZodType>(schema: T) =>
  (data: unknown): z.infer<T> =>
    schema.parse(data);
