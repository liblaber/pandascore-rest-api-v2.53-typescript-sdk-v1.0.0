import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const searchOverCsgoMaps = z.object({
  name: z.string().optional(),
  slug: z
    .string()
    .min(1)
    .regex(/^[a-z0-9_-]+$/)
    .optional(),
});

/**
 *
 * @typedef  {SearchOverCsgoMaps} searchOverCsgoMaps
 * @property {string} - The name of the map.
 * @property {string} - Human-readable identifier of the map
 */
export type SearchOverCsgoMaps = z.infer<typeof searchOverCsgoMaps>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const searchOverCsgoMapsResponse = z
  .object({
    name: z.string().optional(),
    slug: z
      .string()
      .min(1)
      .regex(/^[a-z0-9_-]+$/)
      .optional(),
  })
  .transform((data) => ({
    name: data['name'],
    slug: data['slug'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const searchOverCsgoMapsRequest = z
  .object({ name: z.string().nullish(), slug: z.string().nullish() })
  .transform((data) => ({
    name: data['name'],
    slug: data['slug'],
  }));
