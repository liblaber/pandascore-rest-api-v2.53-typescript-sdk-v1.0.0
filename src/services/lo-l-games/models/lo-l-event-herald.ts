// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import {
  loLEventHeraldObject,
  loLEventHeraldObjectRequest,
  loLEventHeraldObjectResponse,
} from './lo-l-event-herald-object';

/**
 * The shape of the model inside the application code - what the users use
 */
export const loLEventHerald = z.lazy(() => {
  return z.object({
    object: loLEventHeraldObject,
    type: z.string(),
  });
});

/**
 *
 * @typedef  {LoLEventHerald} loLEventHerald
 * @property {LoLEventHeraldObject}
 * @property {LoLEventHeraldType}
 */
export type LoLEventHerald = z.infer<typeof loLEventHerald>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const loLEventHeraldResponse = z.lazy(() => {
  return z
    .object({
      object: loLEventHeraldObjectResponse,
      type: z.string(),
    })
    .transform((data) => ({
      object: data['object'],
      type: data['type'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const loLEventHeraldRequest = z.lazy(() => {
  return z.object({ object: loLEventHeraldObjectRequest.nullish(), type: z.string().nullish() }).transform((data) => ({
    object: data['object'],
    type: data['type'],
  }));
});
