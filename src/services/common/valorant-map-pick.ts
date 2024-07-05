import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const valorantMapPick = z.object({
  id1: z.number().gte(1),
  imageUrl: z.string(),
  name: z.string(),
  pickingTeamId: z.number().gte(1),
  slug: z
    .string()
    .min(1)
    .regex(/^[a-z0-9_-]+$/),
  videogameVersions: z.array(z.string()),
});

/**
 *
 * @typedef  {ValorantMapPick} valorantMapPick
 * @property {number} - ID of the map
 * @property {string} - URL to an image of the map
 * @property {string} - Name of the map
 * @property {number} - ID of the team that picked the map
 * @property {string} - Human-readable identifier of the map
 * @property {string[]} - Array of of video game versions (ie. patches) for this resource
 */
export type ValorantMapPick = z.infer<typeof valorantMapPick>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const valorantMapPickResponse = z
  .object({
    id: z.number().gte(1),
    image_url: z.string(),
    name: z.string(),
    picking_team_id: z.number().gte(1),
    slug: z
      .string()
      .min(1)
      .regex(/^[a-z0-9_-]+$/),
    videogame_versions: z.array(z.string()),
  })
  .transform((data) => ({
    id1: data['id'],
    imageUrl: data['image_url'],
    name: data['name'],
    pickingTeamId: data['picking_team_id'],
    slug: data['slug'],
    videogameVersions: data['videogame_versions'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const valorantMapPickRequest = z
  .object({
    id1: z.number().nullish(),
    imageUrl: z.string().nullish(),
    name: z.string().nullish(),
    pickingTeamId: z.number().nullish(),
    slug: z.string().nullish(),
    videogameVersions: z.array(z.string()).nullish(),
  })
  .transform((data) => ({
    id: data['id1'],
    image_url: data['imageUrl'],
    name: data['name'],
    picking_team_id: data['pickingTeamId'],
    slug: data['slug'],
    videogame_versions: data['videogameVersions'],
  }));
