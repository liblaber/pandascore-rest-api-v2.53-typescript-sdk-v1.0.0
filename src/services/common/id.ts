import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const id: any = z.lazy(() => {
  return z.union([z.number(), z.number()]);
});

/**
 *
 * @typedef  {Id} id
 * @property {number}
 * @property {number}
 */
export type Id = z.infer<typeof id>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const idResponse: any = z.lazy(() => {
  return z.union([z.number(), z.number()]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const idRequest: any = z.lazy(() => {
  return z.union([z.number(), z.number()]);
});
