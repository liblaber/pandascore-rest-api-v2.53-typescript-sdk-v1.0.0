import { z } from 'zod';
import { loLEventHeraldValue } from './lo-l-event-herald-value';

/**
 * The shape of the model inside the application code - what the users use
 */
export const loLEventHeraldObject: any = z.lazy(() => {
  return z.object({
    name: loLEventHeraldValue,
  });
});

/**
 *
 * @typedef  {LoLEventHeraldObject} loLEventHeraldObject
 * @property {LoLEventHeraldValue}
 */
export type LoLEventHeraldObject = z.infer<typeof loLEventHeraldObject>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const loLEventHeraldObjectResponse: any = z.lazy(() => {
  return z
    .object({
      name: loLEventHeraldValue,
    })
    .transform((data) => ({
      name: data['name'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const loLEventHeraldObjectRequest: any = z.lazy(() => {
  return z.object({ name: loLEventHeraldValue.nullish() }).transform((data) => ({
    name: data['name'],
  }));
});
