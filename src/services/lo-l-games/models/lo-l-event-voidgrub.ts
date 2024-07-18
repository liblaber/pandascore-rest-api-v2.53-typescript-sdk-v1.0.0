import { z } from 'zod';
import {
  loLEventVoidgrubObject,
  loLEventVoidgrubObjectRequest,
  loLEventVoidgrubObjectResponse,
} from './lo-l-event-voidgrub-object';
import { loLEventVoidgrubType } from './lo-l-event-voidgrub-type';

/**
 * The shape of the model inside the application code - what the users use
 */
export const loLEventVoidgrub: any = z.lazy(() => {
  return z.object({
    object: loLEventVoidgrubObject,
    type: loLEventVoidgrubType,
  });
});

/**
 *
 * @typedef  {LoLEventVoidgrub} loLEventVoidgrub
 * @property {LoLEventVoidgrubObject}
 * @property {LoLEventVoidgrubType}
 */
export type LoLEventVoidgrub = z.infer<typeof loLEventVoidgrub>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const loLEventVoidgrubResponse: any = z.lazy(() => {
  return z
    .object({
      object: loLEventVoidgrubObjectResponse,
      type: loLEventVoidgrubType,
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
export const loLEventVoidgrubRequest: any = z.lazy(() => {
  return z
    .object({ object: loLEventVoidgrubObjectRequest.nullish(), type: loLEventVoidgrubType.nullish() })
    .transform((data) => ({
      object: data['object'],
      type: data['type'],
    }));
});
