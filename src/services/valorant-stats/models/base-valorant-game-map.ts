import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const baseValorantGameMap: any = z.lazy(() => {
  return z.object({
    id: z.number().gte(1),
    imageUrl: z.string(),
    name: z.string(),
    slug: z
      .string()
      .min(1)
      .regex(/^[a-z0-9_-]+$/),
    videogameVersions: z.array(z.string()),
  });
});

/**
 * An object that represents a Valorant map
 * @typedef  {BaseValorantGameMap} baseValorantGameMap - An object that represents a Valorant map - An object that represents a Valorant map
 * @property {number} - ID of the map
 * @property {string} - URL to an image of the map
 * @property {string} - Name of the map
 * @property {string} - Human-readable identifier of the map
 * @property {string[]} - Array of of video game versions (ie. patches) for this resource
 */
export type BaseValorantGameMap = z.infer<typeof baseValorantGameMap>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const baseValorantGameMapResponse: any = z.lazy(() => {
  return z
    .object({
      id: z.number().gte(1),
      image_url: z.string(),
      name: z.string(),
      slug: z
        .string()
        .min(1)
        .regex(/^[a-z0-9_-]+$/),
      videogame_versions: z.array(z.string()),
    })
    .transform((data) => ({
      id: data['id'],
      imageUrl: data['image_url'],
      name: data['name'],
      slug: data['slug'],
      videogameVersions: data['videogame_versions'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const baseValorantGameMapRequest: any = z.lazy(() => {
  return z
    .object({
      id: z.number().nullish(),
      imageUrl: z.string().nullish(),
      name: z.string().nullish(),
      slug: z.string().nullish(),
      videogameVersions: z.array(z.string()).nullish(),
    })
    .transform((data) => ({
      id: data['id'],
      image_url: data['imageUrl'],
      name: data['name'],
      slug: data['slug'],
      videogame_versions: data['videogameVersions'],
    }));
});
