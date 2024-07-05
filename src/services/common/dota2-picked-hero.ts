import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const dota2PickedHero = z.object({
  count: z.number().gte(0),
  gamesLost: z.number().gte(0),
  gamesWon: z.number().gte(0),
  name: z
    .string()
    .min(1)
    .regex(/^[a-z0-9_-]+$/),
});

/**
 *
 * @typedef  {Dota2PickedHero} dota2PickedHero
 * @property {number}
 * @property {number} - Number of games lost by the team
 * @property {number} - Number of games won by the team
 * @property {string}
 */
export type Dota2PickedHero = z.infer<typeof dota2PickedHero>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const dota2PickedHeroResponse = z
  .object({
    count: z.number().gte(0),
    games_lost: z.number().gte(0),
    games_won: z.number().gte(0),
    name: z
      .string()
      .min(1)
      .regex(/^[a-z0-9_-]+$/),
  })
  .transform((data) => ({
    count: data['count'],
    gamesLost: data['games_lost'],
    gamesWon: data['games_won'],
    name: data['name'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const dota2PickedHeroRequest = z
  .object({
    count: z.number().nullish(),
    gamesLost: z.number().nullish(),
    gamesWon: z.number().nullish(),
    name: z.string().nullish(),
  })
  .transform((data) => ({
    count: data['count'],
    games_lost: data['gamesLost'],
    games_won: data['gamesWon'],
    name: data['name'],
  }));
