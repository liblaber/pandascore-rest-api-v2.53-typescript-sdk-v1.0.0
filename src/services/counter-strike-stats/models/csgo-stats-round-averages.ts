import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const csgoStatsRoundAverages: any = z.lazy(() => {
  return z.object({
    assists: z.number().gte(0).nullable(),
    deaths: z.number().gte(0).nullable(),
    firstKillsDiff: z.number().nullable(),
    flashAssists: z.number().gte(0).nullable(),
    headshots: z.number().gte(0).nullable(),
    kDDiff: z.number().nullable(),
    kills: z.number().gte(0).nullable(),
  });
});

/**
 *
 * @typedef  {CsgoStatsRoundAverages} csgoStatsRoundAverages
 * @property {number} - Average number of kill assists
 * @property {number} - Average number of deaths
 * @property {number} - Average of first kill difference
 * @property {number} - Average number of flash assists
 * @property {number} - Average number of headshots
 * @property {number} - Average kills deaths difference
 * @property {number} - Average number of kills
 */
export type CsgoStatsRoundAverages = z.infer<typeof csgoStatsRoundAverages>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const csgoStatsRoundAveragesResponse: any = z.lazy(() => {
  return z
    .object({
      assists: z.number().gte(0).nullable(),
      deaths: z.number().gte(0).nullable(),
      first_kills_diff: z.number().nullable(),
      flash_assists: z.number().gte(0).nullable(),
      headshots: z.number().gte(0).nullable(),
      k_d_diff: z.number().nullable(),
      kills: z.number().gte(0).nullable(),
    })
    .transform((data) => ({
      assists: data['assists'],
      deaths: data['deaths'],
      firstKillsDiff: data['first_kills_diff'],
      flashAssists: data['flash_assists'],
      headshots: data['headshots'],
      kDDiff: data['k_d_diff'],
      kills: data['kills'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const csgoStatsRoundAveragesRequest: any = z.lazy(() => {
  return z
    .object({
      assists: z.number().nullish(),
      deaths: z.number().nullish(),
      firstKillsDiff: z.number().nullish(),
      flashAssists: z.number().nullish(),
      headshots: z.number().nullish(),
      kDDiff: z.number().nullish(),
      kills: z.number().nullish(),
    })
    .transform((data) => ({
      assists: data['assists'],
      deaths: data['deaths'],
      first_kills_diff: data['firstKillsDiff'],
      flash_assists: data['flashAssists'],
      headshots: data['headshots'],
      k_d_diff: data['kDDiff'],
      kills: data['kills'],
    }));
});
