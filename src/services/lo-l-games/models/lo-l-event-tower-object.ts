import { z } from 'zod';
import { loLEventTowerValue } from './lo-l-event-tower-value';
import { loLTeamColor } from '../../common/lo-l-team-color';

/**
 * The shape of the model inside the application code - what the users use
 */
export const loLEventTowerObject: any = z.lazy(() => {
  return z.object({
    name: loLEventTowerValue,
    side: loLTeamColor,
  });
});

/**
 *
 * @typedef  {LoLEventTowerObject} loLEventTowerObject
 * @property {LoLEventTowerValue}
 * @property {LoLTeamColor}
 */
export type LoLEventTowerObject = z.infer<typeof loLEventTowerObject>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const loLEventTowerObjectResponse: any = z.lazy(() => {
  return z
    .object({
      name: loLEventTowerValue,
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
export const loLEventTowerObjectRequest: any = z.lazy(() => {
  return z.object({ name: loLEventTowerValue.nullish(), side: loLTeamColor.nullish() }).transform((data) => ({
    name: data['name'],
    side: data['side'],
  }));
});