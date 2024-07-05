import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const csgoPlayerStatsGameAverages = z.object({
  adr: z.number().gte(0),
  assists: z.number().gte(0),
  deaths: z.number().gte(0),
  firstKillsDiff: z.number(),
  flashAssists: z.number().gte(0),
  headshots: z.number().gte(0),
  hltvGameRating: z.number().gte(0),
  kDDiff: z.number(),
  kast: z.number().gte(0),
  kills: z.number().gte(0),
});

/**
 *
 * @typedef  {CsgoPlayerStatsGameAverages} csgoPlayerStatsGameAverages
 * @property {number} - Player's average damage per round
 * @property {number} - Average number of kill assists
 * @property {number} - Average number of deaths
 * @property {number} - Average of first kill difference
 * @property {number} - Average number of flash assists
 * @property {number} - Average number of headshots
 * @property {number} - Average rating
 * @property {number} - Average kills deaths difference
 * @property {number} - Average percentage of rounds in which the player either had a kill, assist, survived or was traded
 * @property {number} - Average number of kills
 */
export type CsgoPlayerStatsGameAverages = z.infer<typeof csgoPlayerStatsGameAverages>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const csgoPlayerStatsGameAveragesResponse = z
  .object({
    adr: z.number().gte(0),
    assists: z.number().gte(0),
    deaths: z.number().gte(0),
    first_kills_diff: z.number(),
    flash_assists: z.number().gte(0),
    headshots: z.number().gte(0),
    hltv_game_rating: z.number().gte(0),
    k_d_diff: z.number(),
    kast: z.number().gte(0),
    kills: z.number().gte(0),
  })
  .transform((data) => ({
    adr: data['adr'],
    assists: data['assists'],
    deaths: data['deaths'],
    firstKillsDiff: data['first_kills_diff'],
    flashAssists: data['flash_assists'],
    headshots: data['headshots'],
    hltvGameRating: data['hltv_game_rating'],
    kDDiff: data['k_d_diff'],
    kast: data['kast'],
    kills: data['kills'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const csgoPlayerStatsGameAveragesRequest = z
  .object({
    adr: z.number().nullish(),
    assists: z.number().nullish(),
    deaths: z.number().nullish(),
    firstKillsDiff: z.number().nullish(),
    flashAssists: z.number().nullish(),
    headshots: z.number().nullish(),
    hltvGameRating: z.number().nullish(),
    kDDiff: z.number().nullish(),
    kast: z.number().nullish(),
    kills: z.number().nullish(),
  })
  .transform((data) => ({
    adr: data['adr'],
    assists: data['assists'],
    deaths: data['deaths'],
    first_kills_diff: data['firstKillsDiff'],
    flash_assists: data['flashAssists'],
    headshots: data['headshots'],
    hltv_game_rating: data['hltvGameRating'],
    k_d_diff: data['kDDiff'],
    kast: data['kast'],
    kills: data['kills'],
  }));
