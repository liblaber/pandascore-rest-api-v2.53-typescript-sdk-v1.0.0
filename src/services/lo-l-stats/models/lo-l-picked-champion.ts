import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const loLPickedChampion: any = z.lazy(() => {
  return z.object({
    count: z.number().gte(0),
    gamesLost: z.number(),
    gamesWon: z.number(),
    name: z.string(),
  });
});

/**
 * A team's picked champion
 * @typedef  {LoLPickedChampion} loLPickedChampion - A team's picked champion - A team's picked champion
 * @property {number}
 * @property {number} - Number of games lost by the team on the given champion
 * @property {number} - Number of games won by the team on the given champion
 * @property {string}
 */
export type LoLPickedChampion = z.infer<typeof loLPickedChampion>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const loLPickedChampionResponse: any = z.lazy(() => {
  return z
    .object({
      count: z.number().gte(0),
      games_lost: z.number(),
      games_won: z.number(),
      name: z.string(),
    })
    .transform((data) => ({
      count: data['count'],
      gamesLost: data['games_lost'],
      gamesWon: data['games_won'],
      name: data['name'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const loLPickedChampionRequest: any = z.lazy(() => {
  return z
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
});