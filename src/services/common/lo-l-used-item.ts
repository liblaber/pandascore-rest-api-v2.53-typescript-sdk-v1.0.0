import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const loLUsedItem = z.object({
  count: z.number().gte(0),
  id: z.number().gte(1),
  name: z.string(),
});

/**
 * An item used by a champion
 * @typedef  {LoLUsedItem} loLUsedItem - An item used by a champion - An item used by a champion
 * @property {number}
 * @property {number}
 * @property {string}
 */
export type LoLUsedItem = z.infer<typeof loLUsedItem>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const loLUsedItemResponse = z
  .object({
    count: z.number().gte(0),
    id: z.number().gte(1),
    name: z.string(),
  })
  .transform((data) => ({
    count: data['count'],
    id: data['id'],
    name: data['name'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const loLUsedItemRequest = z
  .object({ count: z.number().nullish(), id: z.number().nullish(), name: z.string().nullish() })
  .transform((data) => ({
    count: data['count'],
    id: data['id'],
    name: data['name'],
  }));
