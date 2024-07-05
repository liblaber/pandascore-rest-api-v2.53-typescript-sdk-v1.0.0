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
export const loLEventNashor = z.object({
  object: loLEventNashorObject,
  type_: loLEventNashorType,
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
export const loLEventNashorResponse = z
  .object({
    object: loLEventNashorObjectResponse,
    type: loLEventNashorType,
  })
  .transform((data) => ({
    object: data['object'],
    type_: data['type'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const loLEventNashorRequest = z
  .object({ object: loLEventNashorObjectRequest.nullish(), type_: loLEventNashorType.nullish() })
  .transform((data) => ({
    object: data['object'],
    type: data['type_'],
  }));
