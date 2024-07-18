import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const csgoFullRoundMap: any = z.lazy(() => {
  return z.object({
    id: z.number().gte(1),
    imageUrl: z.string().nullable(),
    name: z.string(),
  });
});

/**
 * The location selected during the picks and bans phase for the game.
 * @typedef  {CsgoFullRoundMap} csgoFullRoundMap - The location selected during the picks and bans phase for the game. - The location selected during the picks and bans phase for the game.
 * @property {number} - The ID of the map.
 * @property {string} - A URL to the image of the map.
 * @property {string} - The name of the map.
 */
export type CsgoFullRoundMap = z.infer<typeof csgoFullRoundMap>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const csgoFullRoundMapResponse: any = z.lazy(() => {
  return z
    .object({
      id: z.number().gte(1),
      image_url: z.string().nullable(),
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
export const csgoFullRoundMapRequest: any = z.lazy(() => {
  return z
    .object({ id: z.number().nullish(), imageUrl: z.string().nullish(), name: z.string().nullish() })
    .transform((data) => ({
      id: data['id'],
      image_url: data['imageUrl'],
      name: data['name'],
    }));
});