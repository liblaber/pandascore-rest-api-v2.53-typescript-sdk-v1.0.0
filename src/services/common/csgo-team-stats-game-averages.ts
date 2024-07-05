import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const csgoTeamStatsGameAverages = z.object({
  adr: z.number().gte(0),
  assists: z.number().gte(0),
  deaths: z.number().gte(0),
  firstKillsDiff: z.number(),
  flashAssists: z.number().gte(0),
  headshots: z.number().gte(0),
  kDDiff: z.number(),
  kast: z.number().gte(0),
  kills: z.number().gte(0),
});

/**
 *
 * @typedef  {CsgoTeamStatsGameAverages} csgoTeamStatsGameAverages
 * @property {number} - Player's average damage per round
 * @property {number} - Average number of kill assists
 * @property {number} - Average number of deaths
 * @property {number} - Average of first kill difference
 * @property {number} - Average number of flash assists
 * @property {number} - Average number of headshots
 * @property {number} - Average kills deaths difference
 * @property {number} - Average percentage of rounds in which the player either had a kill, assist, survived or was traded
 * @property {number} - Average number of kills
 */
export type CsgoTeamStatsGameAverages = z.infer<typeof csgoTeamStatsGameAverages>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const csgoTeamStatsGameAveragesResponse = z
  .object({
    adr: z.number().gte(0),
    assists: z.number().gte(0),
    deaths: z.number().gte(0),
    first_kills_diff: z.number(),
    flash_assists: z.number().gte(0),
    headshots: z.number().gte(0),
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
    kDDiff: data['k_d_diff'],
    kast: data['kast'],
    kills: data['kills'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const csgoTeamStatsGameAveragesRequest = z
  .object({
    adr: z.number().nullish(),
    assists: z.number().nullish(),
    deaths: z.number().nullish(),
    firstKillsDiff: z.number().nullish(),
    flashAssists: z.number().nullish(),
    headshots: z.number().nullish(),
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
    k_d_diff: data['kDDiff'],
    kast: data['kast'],
    kills: data['kills'],
  }));
