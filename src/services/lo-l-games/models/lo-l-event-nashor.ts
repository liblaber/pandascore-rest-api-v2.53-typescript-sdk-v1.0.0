import { z } from 'zod';
import {
  loLEventNashorObject,
  loLEventNashorObjectRequest,
  loLEventNashorObjectResponse,
} from './lo-l-event-nashor-object';
import { loLEventNashorType } from './lo-l-event-nashor-type';

/**
 * The shape of the model inside the application code - what the users use
 */
export const loLEventNashor: any = z.lazy(() => {
  return z.object({
    object: loLEventNashorObject,
    type: loLEventNashorType,
  });
});

/**
 *
 * @typedef  {LoLEventNashor} loLEventNashor
 * @property {LoLEventNashorObject}
 * @property {LoLEventNashorType}
 */
export type LoLEventNashor = z.infer<typeof loLEventNashor>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const loLEventNashorResponse: any = z.lazy(() => {
  return z
    .object({
      object: loLEventNashorObjectResponse,
      type: loLEventNashorType,
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
export const loLEventNashorRequest: any = z.lazy(() => {
  return z
    .object({ object: loLEventNashorObjectRequest.nullish(), type: loLEventNashorType.nullish() })
    .transform((data) => ({
      object: data['object'],
      type: data['type'],
    }));
});
