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
export const loLEventTower = z.object({
  object: loLEventTowerObject,
  type_: loLEventTowerType,
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
export const loLEventTowerResponse = z
  .object({
    object: loLEventTowerObjectResponse,
    type: loLEventTowerType,
  })
  .transform((data) => ({
    object: data['object'],
    type_: data['type'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const loLEventTowerRequest = z
  .object({ object: loLEventTowerObjectRequest.nullish(), type_: loLEventTowerType.nullish() })
  .transform((data) => ({
    object: data['object'],
    type: data['type_'],
  }));
