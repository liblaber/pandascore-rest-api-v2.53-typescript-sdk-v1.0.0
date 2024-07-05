import { z } from 'zod';
import { loLRuneReforgedType } from './lo-l-rune-reforged-type';

/**
 * The shape of the model inside the application code - what the users use
 */
export const loLRuneReforged = z.object({
  id: z.number().gte(1),
  imageUrl: z.string(),
  name: z.string(),
  type_: loLRuneReforgedType,
});

/**
 *
 * @typedef  {LoLRuneReforged} loLRuneReforged
 * @property {number} - ID of the rune
 * @property {string} - URL to an image of the rune
 * @property {string} - Name of the rune path
 * @property {LoLRuneReforgedType}
 */
export type LoLRuneReforged = z.infer<typeof loLRuneReforged>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const loLRuneReforgedResponse = z
  .object({
    id: z.number().gte(1),
    image_url: z.string(),
    name: z.string(),
    type: loLRuneReforgedType,
  })
  .transform((data) => ({
    id: data['id'],
    imageUrl: data['image_url'],
    name: data['name'],
    type_: data['type'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const loLRuneReforgedRequest = z
  .object({
    id: z.number().nullish(),
    imageUrl: z.string().nullish(),
    name: z.string().nullish(),
    type_: loLRuneReforgedType.nullish(),
  })
  .transform((data) => ({
    id: data['id'],
    image_url: data['imageUrl'],
    name: data['name'],
    type: data['type_'],
  }));
