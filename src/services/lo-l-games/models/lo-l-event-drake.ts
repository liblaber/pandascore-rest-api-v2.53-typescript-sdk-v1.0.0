import { z } from 'zod';
import {
  loLEventDrakeObject,
  loLEventDrakeObjectRequest,
  loLEventDrakeObjectResponse,
} from './lo-l-event-drake-object';
import { loLEventDrakeType } from './lo-l-event-drake-type';

/**
 * The shape of the model inside the application code - what the users use
 */
export const loLEventDrake: any = z.lazy(() => {
  return z.object({
    object: loLEventDrakeObject,
    type: loLEventDrakeType,
  });
});

/**
 *
 * @typedef  {LoLEventDrake} loLEventDrake
 * @property {LoLEventDrakeObject}
 * @property {LoLEventDrakeType}
 */
export type LoLEventDrake = z.infer<typeof loLEventDrake>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const loLEventDrakeResponse: any = z.lazy(() => {
  return z
    .object({
      object: loLEventDrakeObjectResponse,
      type: loLEventDrakeType,
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
export const loLEventDrakeRequest: any = z.lazy(() => {
  return z
    .object({ object: loLEventDrakeObjectRequest.nullish(), type: loLEventDrakeType.nullish() })
    .transform((data) => ({
      object: data['object'],
      type: data['type'],
    }));
});