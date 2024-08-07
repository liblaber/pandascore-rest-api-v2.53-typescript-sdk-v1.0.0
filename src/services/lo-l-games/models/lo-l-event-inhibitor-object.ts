// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import { loLEventInhibitorValue } from './lo-l-event-inhibitor-value';
import { loLTeamColor } from '../../common/lo-l-team-color';

/**
 * The shape of the model inside the application code - what the users use
 */
export const loLEventInhibitorObject: any = z.lazy(() => {
  return z.object({
    name: loLEventInhibitorValue,
    side: loLTeamColor,
  });
});

/**
 *
 * @typedef  {LoLEventInhibitorObject} loLEventInhibitorObject
 * @property {LoLEventInhibitorValue}
 * @property {LoLTeamColor}
 */
export type LoLEventInhibitorObject = z.infer<typeof loLEventInhibitorObject>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const loLEventInhibitorObjectResponse: any = z.lazy(() => {
  return z
    .object({
      name: loLEventInhibitorValue,
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
export const loLEventInhibitorObjectRequest: any = z.lazy(() => {
  return z.object({ name: loLEventInhibitorValue.nullish(), side: loLTeamColor.nullish() }).transform((data) => ({
    name: data['name'],
    side: data['side'],
  }));
});
