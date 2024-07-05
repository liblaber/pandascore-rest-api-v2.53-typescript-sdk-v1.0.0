import { z } from 'zod';
import {
  loLEventHeraldObject,
  loLEventHeraldObjectRequest,
  loLEventHeraldObjectResponse,
} from './lo-l-event-herald-object';
import { loLEventHeraldType } from './lo-l-event-herald-type';

/**
 * The shape of the model inside the application code - what the users use
 */
export const loLEventHerald = z.object({
  object: loLEventHeraldObject,
  type_: loLEventHeraldType,
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
export const loLEventHeraldResponse = z
  .object({
    object: loLEventHeraldObjectResponse,
    type: loLEventHeraldType,
  })
  .transform((data) => ({
    object: data['object'],
    type_: data['type'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const loLEventHeraldRequest = z
  .object({ object: loLEventHeraldObjectRequest.nullish(), type_: loLEventHeraldType.nullish() })
  .transform((data) => ({
    object: data['object'],
    type: data['type_'],
  }));
