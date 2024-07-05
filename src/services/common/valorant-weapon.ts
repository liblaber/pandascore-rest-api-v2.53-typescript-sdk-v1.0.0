import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const valorantWeapon = z.object({
  creds: z.number().gte(0),
  id: z.number().gte(1),
  imageUrl: z.string(),
  name: z.string(),
  videogameVersions: z.array(z.string()),
});

/**
 *
 * @typedef  {ValorantWeapon} valorantWeapon
 * @property {number} - Credit cost of the weapon
 * @property {number} - ID of the weapon
 * @property {string} - URL to an image of the weapon
 * @property {string} - Name of the weapon
 * @property {string[]} - Array of of video game versions (ie. patches) for this resource
 */
export type ValorantWeapon = z.infer<typeof valorantWeapon>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const valorantWeaponResponse = z
  .object({
    creds: z.number().gte(0),
    id: z.number().gte(1),
    image_url: z.string(),
    name: z.string(),
    videogame_versions: z.array(z.string()),
  })
  .transform((data) => ({
    creds: data['creds'],
    id: data['id'],
    imageUrl: data['image_url'],
    name: data['name'],
    videogameVersions: data['videogame_versions'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const valorantWeaponRequest = z
  .object({
    creds: z.number().nullish(),
    id: z.number().nullish(),
    imageUrl: z.string().nullish(),
    name: z.string().nullish(),
    videogameVersions: z.array(z.string()).nullish(),
  })
  .transform((data) => ({
    creds: data['creds'],
    id: data['id'],
    image_url: data['imageUrl'],
    name: data['name'],
    videogame_versions: data['videogameVersions'],
  }));
