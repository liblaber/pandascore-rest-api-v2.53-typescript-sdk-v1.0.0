import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const searchOverLoLRunesReforged = z.object({
  name: z.string().optional(),
});

/**
 *
 * @typedef  {SearchOverLoLRunesReforged} searchOverLoLRunesReforged
 * @property {string} - Name of the rune path
 */
export type SearchOverLoLRunesReforged = z.infer<typeof searchOverLoLRunesReforged>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const searchOverLoLRunesReforgedResponse = z
  .object({
    name: z.string().optional(),
  })
  .transform((data) => ({
    name: data['name'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const searchOverLoLRunesReforgedRequest = z
  .object({ name: z.string().nullish() })
  .transform((data) => ({
    name: data['name'],
  }));
