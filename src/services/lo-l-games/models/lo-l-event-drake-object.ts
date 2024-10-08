// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const loLEventDrakeObject = z.lazy(() => {
  return z.object({
    name: z.string(),
    type: z.string(),
  });
});

/**
 *
 * @typedef  {LoLEventDrakeObject} loLEventDrakeObject
 * @property {LoLDrakeName}
 * @property {LoLDrakeType}
 */
export type LoLEventDrakeObject = z.infer<typeof loLEventDrakeObject>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const loLEventDrakeObjectResponse = z.lazy(() => {
  return z
    .object({
      name: z.string(),
      type: z.string(),
    })
    .transform((data) => ({
      name: data['name'],
      type: data['type'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const loLEventDrakeObjectRequest = z.lazy(() => {
  return z.object({ name: z.string().nullish(), type: z.string().nullish() }).transform((data) => ({
    name: data['name'],
    type: data['type'],
  }));
});
