import { z } from 'zod';
import { owHero, owHeroRequest, owHeroResponse } from '../../common/ow-hero';

/**
 * The shape of the model inside the application code - what the users use
 */
export const owFavoriteHero: any = z.lazy(() => {
  return z.object({
    gamesCount: z.number().gte(0),
    hero: owHero,
  });
});

/**
 *
 * @typedef  {OwFavoriteHero} owFavoriteHero
 * @property {number} - Number of games
 * @property {OwHero}
 */
export type OwFavoriteHero = z.infer<typeof owFavoriteHero>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const owFavoriteHeroResponse: any = z.lazy(() => {
  return z
    .object({
      games_count: z.number().gte(0),
      hero: owHeroResponse,
    })
    .transform((data) => ({
      gamesCount: data['games_count'],
      hero: data['hero'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const owFavoriteHeroRequest: any = z.lazy(() => {
  return z.object({ gamesCount: z.number().nullish(), hero: owHeroRequest.nullish() }).transform((data) => ({
    games_count: data['gamesCount'],
    hero: data['hero'],
  }));
});