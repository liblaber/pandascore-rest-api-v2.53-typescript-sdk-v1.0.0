import { z } from 'zod';
import { loLTeamAverages, loLTeamAveragesRequest, loLTeamAveragesResponse } from './lo-l-team-averages';
import { loLTeamStatsTotals, loLTeamStatsTotalsRequest, loLTeamStatsTotalsResponse } from './lo-l-team-stats-totals';

/**
 * The shape of the model inside the application code - what the users use
 */
export const loLTotalTeamStat: any = z.lazy(() => {
  return z.object({
    averages: loLTeamAverages,
    gamesCount: z.number().gte(0).nullable(),
    totals: loLTeamStatsTotals,
  });
});

/**
 * Total Team's statistics
 * @typedef  {LoLTotalTeamStat} loLTotalTeamStat - Total Team's statistics - Total Team's statistics
 * @property {LoLTeamAverages}
 * @property {number} - Number of games
 * @property {LoLTeamStatsTotals}
 */
export type LoLTotalTeamStat = z.infer<typeof loLTotalTeamStat>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const loLTotalTeamStatResponse: any = z.lazy(() => {
  return z
    .object({
      averages: loLTeamAveragesResponse,
      games_count: z.number().gte(0).nullable(),
      totals: loLTeamStatsTotalsResponse,
    })
    .transform((data) => ({
      averages: data['averages'],
      gamesCount: data['games_count'],
      totals: data['totals'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const loLTotalTeamStatRequest: any = z.lazy(() => {
  return z
    .object({
      averages: loLTeamAveragesRequest.nullish(),
      gamesCount: z.number().nullish(),
      totals: loLTeamStatsTotalsRequest.nullish(),
    })
    .transform((data) => ({
      averages: data['averages'],
      games_count: data['gamesCount'],
      totals: data['totals'],
    }));
});
