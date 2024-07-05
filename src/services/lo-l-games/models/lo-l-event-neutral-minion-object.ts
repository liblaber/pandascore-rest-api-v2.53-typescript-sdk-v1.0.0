import { z } from 'zod';
import { loLEventNeutralMinionValue } from './lo-l-event-neutral-minion-value';

/**
 * The shape of the model inside the application code - what the users use
 */
export const loLEventNeutralMinionObject = z.object({
  name: loLEventNeutralMinionValue,
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
export const loLEventNeutralMinionObjectResponse = z
  .object({
    name: loLEventNeutralMinionValue,
  })
  .transform((data) => ({
    name: data['name'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const loLEventNeutralMinionObjectRequest = z
  .object({ name: loLEventNeutralMinionValue.nullish() })
  .transform((data) => ({
    name: data['name'],
  }));
