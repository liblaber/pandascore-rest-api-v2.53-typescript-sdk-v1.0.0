import { z } from 'zod';
import {
  loLEventPlayerObject,
  loLEventPlayerObjectRequest,
  loLEventPlayerObjectResponse,
} from './lo-l-event-player-object';
import { loLEventPlayerType } from './lo-l-event-player-type';

/**
 * The shape of the model inside the application code - what the users use
 */
export const loLEventPlayer: any = z.lazy(() => {
  return z.object({
    object: loLEventPlayerObject,
    type: loLEventPlayerType,
  });
});

/**
 *
 * @typedef  {LoLEventPlayer} loLEventPlayer
 * @property {LoLEventPlayerObject}
 * @property {LoLEventPlayerType}
 */
export type LoLEventPlayer = z.infer<typeof loLEventPlayer>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const loLEventPlayerResponse: any = z.lazy(() => {
  return z
    .object({
      object: loLEventPlayerObjectResponse,
      type: loLEventPlayerType,
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
export const loLEventPlayerRequest: any = z.lazy(() => {
  return z
    .object({ object: loLEventPlayerObjectRequest.nullish(), type: loLEventPlayerType.nullish() })
    .transform((data) => ({
      object: data['object'],
      type: data['type'],
    }));
});