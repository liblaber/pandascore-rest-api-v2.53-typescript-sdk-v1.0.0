import { z } from 'zod';
import { loLChampion, loLChampionRequest, loLChampionResponse } from './lo-l-champion';
import { loLUsedItem, loLUsedItemRequest, loLUsedItemResponse } from './lo-l-used-item';

/**
 * The shape of the model inside the application code - what the users use
 */
export const loLFavoriteChampion = z.object({
  champion: loLChampion,
  gamesCount: z.number().gte(0),
  gamesLost: z.number(),
  gamesWon: z.number(),
  mostUsedItems: z.array(loLUsedItem),
});

/**
 * A player's most used champion
 * @typedef  {LoLFavoriteChampion} loLFavoriteChampion - A player's most used champion - A player's most used champion
 * @property {LoLChampion}
 * @property {number} - Number of games
 * @property {number} - Number of games lost by the player on the given champion
 * @property {number} - Number of games won by the player on the given champion
 * @property {LoLUsedItem[]}
 */
export type LoLFavoriteChampion = z.infer<typeof loLFavoriteChampion>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const loLFavoriteChampionResponse = z
  .object({
    champion: loLChampionResponse,
    games_count: z.number().gte(0),
    games_lost: z.number(),
    games_won: z.number(),
    most_used_items: z.array(loLUsedItemResponse),
  })
  .transform((data) => ({
    champion: data['champion'],
    gamesCount: data['games_count'],
    gamesLost: data['games_lost'],
    gamesWon: data['games_won'],
    mostUsedItems: data['most_used_items'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const loLFavoriteChampionRequest = z
  .object({
    champion: loLChampionRequest.nullish(),
    gamesCount: z.number().nullish(),
    gamesLost: z.number().nullish(),
    gamesWon: z.number().nullish(),
    mostUsedItems: z.array(loLUsedItemRequest).nullish(),
  })
  .transform((data) => ({
    champion: data['champion'],
    games_count: data['gamesCount'],
    games_lost: data['gamesLost'],
    games_won: data['gamesWon'],
    most_used_items: data['mostUsedItems'],
  }));
