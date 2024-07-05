import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const primaryWeapon = z.object({
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
 * @typedef  {PrimaryWeapon} primaryWeapon
 * @property {number}
 * @property {string} - A URL to the image of the weapon.
 * @property {string}
 * @property {string} - The slug of the weapon.
 */
export type PrimaryWeapon = z.infer<typeof primaryWeapon>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const primaryWeaponResponse = z
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
export const primaryWeaponRequest = z
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
