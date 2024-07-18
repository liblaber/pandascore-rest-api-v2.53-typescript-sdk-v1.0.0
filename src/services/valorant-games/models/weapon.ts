import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const weapon: any = z.lazy(() => {
  return z.object({
    id: z.number().gte(1),
    imageUrl: z.string(),
    name: z.string(),
  });
});

/**
 *
 * @typedef  {Weapon} weapon
 * @property {number} - ID of the weapon
 * @property {string} - URL to an image of the weapon
 * @property {string} - Name of the weapon
 */
export type Weapon = z.infer<typeof weapon>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const weaponResponse: any = z.lazy(() => {
  return z
    .object({
      id: z.number().gte(1),
      image_url: z.string(),
      name: z.string(),
    })
    .transform((data) => ({
      id: data['id'],
      imageUrl: data['image_url'],
      name: data['name'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const weaponRequest: any = z.lazy(() => {
  return z
    .object({ id: z.number().nullish(), imageUrl: z.string().nullish(), name: z.string().nullish() })
    .transform((data) => ({
      id: data['id'],
      image_url: data['imageUrl'],
      name: data['name'],
    }));
});
