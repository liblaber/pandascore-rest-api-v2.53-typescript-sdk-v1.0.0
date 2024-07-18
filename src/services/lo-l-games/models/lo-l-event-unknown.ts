import { z } from 'zod';
import { loLEventUnknownType } from './lo-l-event-unknown-type';

/**
 * The shape of the model inside the application code - what the users use
 */
export const loLEventUnknown: any = z.lazy(() => {
  return z.object({
    object: z.any().optional().nullable(),
    type: loLEventUnknownType,
  });
});

/**
 *
 * @typedef  {LoLEventUnknown} loLEventUnknown
 * @property {any}
 * @property {LoLEventUnknownType}
 */
export type LoLEventUnknown = z.infer<typeof loLEventUnknown>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const loLEventUnknownResponse: any = z.lazy(() => {
  return z
    .object({
      object: z.any().optional().nullable(),
      type: loLEventUnknownType,
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
export const loLEventUnknownRequest: any = z.lazy(() => {
  return z.object({ object: z.any().nullish(), type: loLEventUnknownType.nullish() }).transform((data) => ({
    object: data['object'],
    type: data['type'],
  }));
});