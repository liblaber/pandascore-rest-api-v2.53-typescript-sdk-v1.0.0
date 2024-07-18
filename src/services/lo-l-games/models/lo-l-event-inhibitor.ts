import { z } from 'zod';
import {
  loLEventInhibitorObject,
  loLEventInhibitorObjectRequest,
  loLEventInhibitorObjectResponse,
} from './lo-l-event-inhibitor-object';
import { loLEventInhibitorType } from './lo-l-event-inhibitor-type';

/**
 * The shape of the model inside the application code - what the users use
 */
export const loLEventInhibitor: any = z.lazy(() => {
  return z.object({
    object: loLEventInhibitorObject,
    type: loLEventInhibitorType,
  });
});

/**
 *
 * @typedef  {LoLEventInhibitor} loLEventInhibitor
 * @property {LoLEventInhibitorObject}
 * @property {LoLEventInhibitorType}
 */
export type LoLEventInhibitor = z.infer<typeof loLEventInhibitor>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const loLEventInhibitorResponse: any = z.lazy(() => {
  return z
    .object({
      object: loLEventInhibitorObjectResponse,
      type: loLEventInhibitorType,
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
export const loLEventInhibitorRequest: any = z.lazy(() => {
  return z
    .object({ object: loLEventInhibitorObjectRequest.nullish(), type: loLEventInhibitorType.nullish() })
    .transform((data) => ({
      object: data['object'],
      type: data['type'],
    }));
});
