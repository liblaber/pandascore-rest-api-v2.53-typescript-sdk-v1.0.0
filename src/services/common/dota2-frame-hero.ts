import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const dota2FrameHero = z.object({
  id: z.number().gte(1),
  localizedName: z.string(),
  name: z
    .string()
    .min(1)
    .regex(/^[a-z0-9_-]+$/),
});

/**
 *
 * @typedef  {Dota2FrameHero} dota2FrameHero
 * @property {number}
 * @property {string}
 * @property {string}
 */
export type Dota2FrameHero = z.infer<typeof dota2FrameHero>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const dota2FrameHeroResponse = z
  .object({
    id: z.number().gte(1),
    localized_name: z.string(),
    name: z
      .string()
      .min(1)
      .regex(/^[a-z0-9_-]+$/),
  })
  .transform((data) => ({
    id: data['id'],
    localizedName: data['localized_name'],
    name: data['name'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const dota2FrameHeroRequest = z
  .object({
    id: z.number().nullish(),
    localizedName: z.string().nullish(),
    name: z.string().nullish(),
  })
  .transform((data) => ({
    id: data['id'],
    localized_name: data['localizedName'],
    name: data['name'],
  }));
