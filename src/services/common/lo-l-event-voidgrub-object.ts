import { z } from 'zod';
import { loLEventVoidgrubValue } from './lo-l-event-voidgrub-value';

/**
 * The shape of the model inside the application code - what the users use
 */
export const loLEventVoidgrubObject = z.object({
  name: loLEventVoidgrubValue,
});

/**
 *
 * @typedef  {LoLEventVoidgrubObject} loLEventVoidgrubObject
 * @property {LoLEventVoidgrubValue}
 */
export type LoLEventVoidgrubObject = z.infer<typeof loLEventVoidgrubObject>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const loLEventVoidgrubObjectResponse = z
  .object({
    name: loLEventVoidgrubValue,
  })
  .transform((data) => ({
    name: data['name'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const loLEventVoidgrubObjectRequest = z
  .object({ name: loLEventVoidgrubValue.nullish() })
  .transform((data) => ({
    name: data['name'],
  }));
