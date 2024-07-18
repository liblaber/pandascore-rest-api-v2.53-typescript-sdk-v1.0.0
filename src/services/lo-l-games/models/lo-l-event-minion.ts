import { z } from 'zod';
import {
  loLEventMinionObject,
  loLEventMinionObjectRequest,
  loLEventMinionObjectResponse,
} from './lo-l-event-minion-object';
import { loLEventMinionType } from './lo-l-event-minion-type';

/**
 * The shape of the model inside the application code - what the users use
 */
export const loLEventMinion: any = z.lazy(() => {
  return z.object({
    object: loLEventMinionObject,
    type: loLEventMinionType,
  });
});

/**
 *
 * @typedef  {LoLEventMinion} loLEventMinion
 * @property {LoLEventMinionObject}
 * @property {LoLEventMinionType}
 */
export type LoLEventMinion = z.infer<typeof loLEventMinion>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const loLEventMinionResponse: any = z.lazy(() => {
  return z
    .object({
      object: loLEventMinionObjectResponse,
      type: loLEventMinionType,
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
export const loLEventMinionRequest: any = z.lazy(() => {
  return z
    .object({ object: loLEventMinionObjectRequest.nullish(), type: loLEventMinionType.nullish() })
    .transform((data) => ({
      object: data['object'],
      type: data['type'],
    }));
});