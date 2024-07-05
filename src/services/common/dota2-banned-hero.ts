import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const dota2BannedHero = z.object({
  count: z.number().gte(0),
  name: z
    .string()
    .min(1)
    .regex(/^[a-z0-9_-]+$/),
});

/**
 *
 * @typedef  {Dota2BannedHero} dota2BannedHero
 * @property {number}
 * @property {string}
 */
export type Dota2BannedHero = z.infer<typeof dota2BannedHero>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const dota2BannedHeroResponse = z
  .object({
    count: z.number().gte(0),
    name: z
      .string()
      .min(1)
      .regex(/^[a-z0-9_-]+$/),
  })
  .transform((data) => ({
    count: data['count'],
    name: data['name'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const dota2BannedHeroRequest = z
  .object({ count: z.number().nullish(), name: z.string().nullish() })
  .transform((data) => ({
    count: data['count'],
    name: data['name'],
  }));
