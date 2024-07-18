import { z } from 'zod';
import { dota2Hero, dota2HeroRequest, dota2HeroResponse } from '../../common/dota2-hero';
import { dota2UsedItem, dota2UsedItemRequest, dota2UsedItemResponse } from './dota2-used-item';

/**
 * The shape of the model inside the application code - what the users use
 */
export const dota2FavoriteHero: any = z.lazy(() => {
  return z.object({
    gamesCount: z.number().gte(0),
    gamesLost: z.number(),
    gamesWon: z.number(),
    hero: dota2Hero,
    mostUsedItems: z.array(dota2UsedItem).max(5),
  });
});

/**
 * Player's favorite heroes
 * @typedef  {Dota2FavoriteHero} dota2FavoriteHero - Player's favorite heroes - Player's favorite heroes
 * @property {number} - Number of games
 * @property {number} - Number of games lost by the player on the given hero
 * @property {number} - Number of games won by the player on the given hero
 * @property {Dota2Hero}
 * @property {Dota2UsedItem[]}
 */
export type Dota2FavoriteHero = z.infer<typeof dota2FavoriteHero>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const dota2FavoriteHeroResponse: any = z.lazy(() => {
  return z
    .object({
      games_count: z.number().gte(0),
      games_lost: z.number(),
      games_won: z.number(),
      hero: dota2HeroResponse,
      most_used_items: z.array(dota2UsedItemResponse).max(5),
    })
    .transform((data) => ({
      gamesCount: data['games_count'],
      gamesLost: data['games_lost'],
      gamesWon: data['games_won'],
      hero: data['hero'],
      mostUsedItems: data['most_used_items'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const dota2FavoriteHeroRequest: any = z.lazy(() => {
  return z
    .object({
      gamesCount: z.number().nullish(),
      gamesLost: z.number().nullish(),
      gamesWon: z.number().nullish(),
      hero: dota2HeroRequest.nullish(),
      mostUsedItems: z.array(dota2UsedItemRequest).nullish(),
    })
    .transform((data) => ({
      games_count: data['gamesCount'],
      games_lost: data['gamesLost'],
      games_won: data['gamesWon'],
      hero: data['hero'],
      most_used_items: data['mostUsedItems'],
    }));
});
