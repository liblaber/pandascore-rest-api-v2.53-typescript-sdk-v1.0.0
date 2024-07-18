import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const dota2FullGamePlayerHero: any = z.lazy(() => {
  return z.object({
    id: z.number().gte(1),
    imageUrl: z.string().nullable(),
    localizedName: z.string(),
    name: z
      .string()
      .min(1)
      .regex(/^[a-z0-9_-]+$/),
  });
});

/**
 *
 * @typedef  {Dota2FullGamePlayerHero} dota2FullGamePlayerHero
 * @property {number}
 * @property {string}
 * @property {string}
 * @property {string}
 */
export type Dota2FullGamePlayerHero = z.infer<typeof dota2FullGamePlayerHero>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const dota2FullGamePlayerHeroResponse: any = z.lazy(() => {
  return z
    .object({
      id: z.number().gte(1),
      image_url: z.string().nullable(),
      localized_name: z.string(),
      name: z
        .string()
        .min(1)
        .regex(/^[a-z0-9_-]+$/),
    })
    .transform((data) => ({
      id: data['id'],
      imageUrl: data['image_url'],
      localizedName: data['localized_name'],
      name: data['name'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const dota2FullGamePlayerHeroRequest: any = z.lazy(() => {
  return z
    .object({
      id: z.number().nullish(),
      imageUrl: z.string().nullish(),
      localizedName: z.string().nullish(),
      name: z.string().nullish(),
    })
    .transform((data) => ({
      id: data['id'],
      image_url: data['imageUrl'],
      localized_name: data['localizedName'],
      name: data['name'],
    }));
});
