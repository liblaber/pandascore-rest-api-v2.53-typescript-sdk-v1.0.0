// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const loLEventMinionObject = z.lazy(() => {
  return z.object({
    name: z.string(),
    side: z.string(),
  });
});

/**
 *
 * @typedef  {LoLEventMinionObject} loLEventMinionObject
 * @property {LoLEventMinionValue}
 * @property {LoLTeamColor}
 */
export type LoLEventMinionObject = z.infer<typeof loLEventMinionObject>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const loLEventMinionObjectResponse = z.lazy(() => {
  return z
    .object({
      name: z.string(),
      side: z.string(),
    })
    .transform((data) => ({
      name: data['name'],
      side: data['side'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const loLEventMinionObjectRequest = z.lazy(() => {
  return z.object({ name: z.string().nullish(), side: z.string().nullish() }).transform((data) => ({
    name: data['name'],
    side: data['side'],
  }));
});
