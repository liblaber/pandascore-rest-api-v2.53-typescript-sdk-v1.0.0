import { z } from 'zod';
import { loLEventUnknownType } from './lo-l-event-unknown-type';

/**
 * The shape of the model inside the application code - what the users use
 */
export const loLEventUnknown = z.object({
  object: z.any().optional(),
  type_: loLEventUnknownType,
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
export const loLEventUnknownResponse = z
  .object({
    object: z.any().optional(),
    type: loLEventUnknownType,
  })
  .transform((data) => ({
    object: data['object'],
    type_: data['type'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const loLEventUnknownRequest = z
  .object({ object: z.any().nullish(), type_: loLEventUnknownType.nullish() })
  .transform((data) => ({
    object: data['object'],
    type: data['type_'],
  }));
