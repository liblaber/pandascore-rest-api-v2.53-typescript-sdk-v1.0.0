import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const dota2UsedItem = z.object({
  count: z.number().gte(0),
  id: z.number().gte(1),
  name: z
    .string()
    .min(1)
    .regex(/^[a-z0-9_-]+$/),
});

/**
 * An item used by a hero
 * @typedef  {Dota2UsedItem} dota2UsedItem - An item used by a hero - An item used by a hero
 * @property {number}
 * @property {number}
 * @property {string}
 */
export type Dota2UsedItem = z.infer<typeof dota2UsedItem>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const dota2UsedItemResponse = z
  .object({
    count: z.number().gte(0),
    id: z.number().gte(1),
    name: z
      .string()
      .min(1)
      .regex(/^[a-z0-9_-]+$/),
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
export const dota2UsedItemRequest = z
  .object({ count: z.number().nullish(), id: z.number().nullish(), name: z.string().nullish() })
  .transform((data) => ({
    count: data['count'],
    id: data['id'],
    name: data['name'],
  }));
