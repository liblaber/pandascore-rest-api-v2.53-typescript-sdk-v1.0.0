import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const baseLoLItem: any = z.lazy(() => {
  return z.object({
    id: z.number().gte(1),
    imageUrl: z.string().nullable(),
    isTrinket: z.boolean().nullable(),
    name: z.string(),
  });
});

/**
 *
 * @typedef  {BaseLoLItem} baseLoLItem
 * @property {number}
 * @property {string}
 * @property {boolean} - Whether item is a trinket
 * @property {string}
 */
export type BaseLoLItem = z.infer<typeof baseLoLItem>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const baseLoLItemResponse: any = z.lazy(() => {
  return z
    .object({
      id: z.number().gte(1),
      image_url: z.string().nullable(),
      is_trinket: z.boolean().nullable(),
      name: z.string(),
    })
    .transform((data) => ({
      id: data['id'],
      imageUrl: data['image_url'],
      isTrinket: data['is_trinket'],
      name: data['name'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const baseLoLItemRequest: any = z.lazy(() => {
  return z
    .object({
      id: z.number().nullish(),
      imageUrl: z.string().nullish(),
      isTrinket: z.boolean().nullish(),
      name: z.string().nullish(),
    })
    .transform((data) => ({
      id: data['id'],
      image_url: data['imageUrl'],
      is_trinket: data['isTrinket'],
      name: data['name'],
    }));
});
