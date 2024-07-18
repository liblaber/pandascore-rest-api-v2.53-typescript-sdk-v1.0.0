import { z } from 'zod';
import { loLEventMinionValue } from './lo-l-event-minion-value';
import { loLTeamColor } from '../../common/lo-l-team-color';

/**
 * The shape of the model inside the application code - what the users use
 */
export const loLEventMinionObject: any = z.lazy(() => {
  return z.object({
    name: loLEventMinionValue,
    side: loLTeamColor,
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
export const loLEventMinionObjectResponse: any = z.lazy(() => {
  return z
    .object({
      name: loLEventMinionValue,
      side: loLTeamColor,
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
export const loLEventMinionObjectRequest: any = z.lazy(() => {
  return z.object({ name: loLEventMinionValue.nullish(), side: loLTeamColor.nullish() }).transform((data) => ({
    name: data['name'],
    side: data['side'],
  }));
});
