import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const dota2PerHeroAbility = z.object({
  id: z.number().gte(1),
  imageUrl: z.string(),
  level: z.number().gte(1),
  name: z
    .string()
    .min(1)
    .regex(/^[a-z0-9_-]+$/),
});

/**
 * An ability used by a hero in a game
 * @typedef  {Dota2PerHeroAbility} dota2PerHeroAbility - An ability used by a hero in a game - An ability used by a hero in a game
 * @property {number}
 * @property {string}
 * @property {number}
 * @property {string}
 */
export type Dota2PerHeroAbility = z.infer<typeof dota2PerHeroAbility>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const dota2PerHeroAbilityResponse = z
  .object({
    id: z.number().gte(1),
    image_url: z.string(),
    level: z.number().gte(1),
    name: z
      .string()
      .min(1)
      .regex(/^[a-z0-9_-]+$/),
  })
  .transform((data) => ({
    id: data['id'],
    imageUrl: data['image_url'],
    level: data['level'],
    name: data['name'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const dota2PerHeroAbilityRequest = z
  .object({
    id: z.number().nullish(),
    imageUrl: z.string().nullish(),
    level: z.number().nullish(),
    name: z.string().nullish(),
  })
  .transform((data) => ({
    id: data['id'],
    image_url: data['imageUrl'],
    level: data['level'],
    name: data['name'],
  }));
