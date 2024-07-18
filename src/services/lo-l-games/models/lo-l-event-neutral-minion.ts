import { z } from 'zod';
import {
  loLEventNeutralMinionObject,
  loLEventNeutralMinionObjectRequest,
  loLEventNeutralMinionObjectResponse,
} from './lo-l-event-neutral-minion-object';
import { loLEventNeutralMinionType } from './lo-l-event-neutral-minion-type';

/**
 * The shape of the model inside the application code - what the users use
 */
export const loLEventNeutralMinion: any = z.lazy(() => {
  return z.object({
    object: loLEventNeutralMinionObject,
    type: loLEventNeutralMinionType,
  });
});

/**
 *
 * @typedef  {LoLEventNeutralMinion} loLEventNeutralMinion
 * @property {LoLEventNeutralMinionObject}
 * @property {LoLEventNeutralMinionType}
 */
export type LoLEventNeutralMinion = z.infer<typeof loLEventNeutralMinion>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const loLEventNeutralMinionResponse: any = z.lazy(() => {
  return z
    .object({
      object: loLEventNeutralMinionObjectResponse,
      type: loLEventNeutralMinionType,
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
export const loLEventNeutralMinionRequest: any = z.lazy(() => {
  return z
    .object({ object: loLEventNeutralMinionObjectRequest.nullish(), type: loLEventNeutralMinionType.nullish() })
    .transform((data) => ({
      object: data['object'],
      type: data['type'],
    }));
});