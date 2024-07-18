import { z } from 'zod';
import { loLEventNashorValue } from './lo-l-event-nashor-value';

/**
 * The shape of the model inside the application code - what the users use
 */
export const loLEventNashorObject: any = z.lazy(() => {
  return z.object({
    name: loLEventNashorValue,
  });
});

/**
 *
 * @typedef  {LoLEventNashorObject} loLEventNashorObject
 * @property {LoLEventNashorValue}
 */
export type LoLEventNashorObject = z.infer<typeof loLEventNashorObject>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const loLEventNashorObjectResponse: any = z.lazy(() => {
  return z
    .object({
      name: loLEventNashorValue,
    })
    .transform((data) => ({
      name: data['name'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const loLEventNashorObjectRequest: any = z.lazy(() => {
  return z.object({ name: loLEventNashorValue.nullish() }).transform((data) => ({
    name: data['name'],
  }));
});
