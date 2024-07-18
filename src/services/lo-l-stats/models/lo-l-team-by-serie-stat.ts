import { z } from 'zod';
import { loLTeamAverages, loLTeamAveragesRequest, loLTeamAveragesResponse } from './lo-l-team-averages';
import { serie, serieRequest, serieResponse } from '../../common/serie';
import { loLTeamStatsTotals, loLTeamStatsTotalsRequest, loLTeamStatsTotalsResponse } from './lo-l-team-stats-totals';

/**
 * The shape of the model inside the application code - what the users use
 */
export const loLTeamBySerieStat: any = z.lazy(() => {
  return z.object({
    averages: loLTeamAverages,
    gamesCount: z.number().gte(0).nullable(),
    serie: serie,
    totals: loLTeamStatsTotals,
  });
});

/**
 * Team's statistics for a serie
 * @typedef  {LoLTeamBySerieStat} loLTeamBySerieStat - Team's statistics for a serie - Team's statistics for a serie
 * @property {LoLTeamAverages}
 * @property {number} - Number of games
 * @property {Serie} - A serie, an occurrence of a league event
 * @property {LoLTeamStatsTotals}
 */
export type LoLTeamBySerieStat = z.infer<typeof loLTeamBySerieStat>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const loLTeamBySerieStatResponse: any = z.lazy(() => {
  return z
    .object({
      averages: loLTeamAveragesResponse,
      games_count: z.number().gte(0).nullable(),
      serie: serieResponse,
      totals: loLTeamStatsTotalsResponse,
    })
    .transform((data) => ({
      averages: data['averages'],
      gamesCount: data['games_count'],
      serie: data['serie'],
      totals: data['totals'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const loLTeamBySerieStatRequest: any = z.lazy(() => {
  return z
    .object({
      averages: loLTeamAveragesRequest.nullish(),
      gamesCount: z.number().nullish(),
      serie: serieRequest.nullish(),
      totals: loLTeamStatsTotalsRequest.nullish(),
    })
    .transform((data) => ({
      averages: data['averages'],
      games_count: data['gamesCount'],
      serie: data['serie'],
      totals: data['totals'],
    }));
});