import { z } from 'zod';
import {
  loLEventTowerObject,
  loLEventTowerObjectRequest,
  loLEventTowerObjectResponse,
} from './lo-l-event-tower-object';
import { loLEventTowerType } from './lo-l-event-tower-type';

/**
 * The shape of the model inside the application code - what the users use
 */
export const loLEventTower: any = z.lazy(() => {
  return z.object({
    object: loLEventTowerObject,
    type: loLEventTowerType,
  });
});

/**
 *
 * @typedef  {LoLEventTower} loLEventTower
 * @property {LoLEventTowerObject}
 * @property {LoLEventTowerType}
 */
export type LoLEventTower = z.infer<typeof loLEventTower>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const loLEventTowerResponse: any = z.lazy(() => {
  return z
    .object({
      object: loLEventTowerObjectResponse,
      type: loLEventTowerType,
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
export const loLEventTowerRequest: any = z.lazy(() => {
  return z
    .object({ object: loLEventTowerObjectRequest.nullish(), type: loLEventTowerType.nullish() })
    .transform((data) => ({
      object: data['object'],
      type: data['type'],
    }));
});