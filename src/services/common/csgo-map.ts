import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const csgoMap = z.object({
  id: z.number().gte(1),
  imageUrl: z.string(),
  name: z.string(),
  slug: z
    .string()
    .min(1)
    .regex(/^[a-z0-9_-]+$/),
});

/**
 *
 * @typedef  {CsgoMap} csgoMap
 * @property {number} - The ID of the map.
 * @property {string} - A URL to the image of the map.
 * @property {string} - The name of the map.
 * @property {string} - Human-readable identifier of the map
 */
export type CsgoMap = z.infer<typeof csgoMap>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const csgoMapResponse = z
  .object({
    id: z.number().gte(1),
    image_url: z.string(),
    name: z.string(),
    slug: z
      .string()
      .min(1)
      .regex(/^[a-z0-9_-]+$/),
  })
  .transform((data) => ({
    id: data['id'],
    imageUrl: data['image_url'],
    name: data['name'],
    slug: data['slug'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const csgoMapRequest = z
  .object({
    id: z.number().nullish(),
    imageUrl: z.string().nullish(),
    name: z.string().nullish(),
    slug: z.string().nullish(),
  })
  .transform((data) => ({
    id: data['id'],
    image_url: data['imageUrl'],
    name: data['name'],
    slug: data['slug'],
  }));
