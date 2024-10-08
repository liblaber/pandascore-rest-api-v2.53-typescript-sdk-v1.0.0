// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const loLEventNeutralMinionObject = z.lazy(() => {
  return z.object({
    name: z.string(),
  });
});

/**
 *
 * @typedef  {LoLEventNeutralMinionObject} loLEventNeutralMinionObject
 * @property {LoLEventNeutralMinionValue}
 */
export type LoLEventNeutralMinionObject = z.infer<typeof loLEventNeutralMinionObject>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const loLEventNeutralMinionObjectResponse = z.lazy(() => {
  return z
    .object({
      name: z.string(),
    })
    .transform((data) => ({
      name: data['name'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const loLEventNeutralMinionObjectRequest = z.lazy(() => {
  return z.object({ name: z.string().nullish() }).transform((data) => ({
    name: data['name'],
  }));
});
