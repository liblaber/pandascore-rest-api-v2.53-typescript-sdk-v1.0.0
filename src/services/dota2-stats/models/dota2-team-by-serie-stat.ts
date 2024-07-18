import { z } from 'zod';
import { dota2TeamAverages, dota2TeamAveragesRequest, dota2TeamAveragesResponse } from './dota2-team-averages';
import { serie, serieRequest, serieResponse } from '../../common/serie';
import {
  dota2TeamStatsTotals,
  dota2TeamStatsTotalsRequest,
  dota2TeamStatsTotalsResponse,
} from './dota2-team-stats-totals';

/**
 * The shape of the model inside the application code - what the users use
 */
export const dota2TeamBySerieStat: any = z.lazy(() => {
  return z.object({
    averages: dota2TeamAverages,
    gamesCount: z.number().gte(0).nullable(),
    serie: serie,
    totals: dota2TeamStatsTotals,
  });
});

/**
 * Team's statistics for a serie
 * @typedef  {Dota2TeamBySerieStat} dota2TeamBySerieStat - Team's statistics for a serie - Team's statistics for a serie
 * @property {Dota2TeamAverages}
 * @property {number} - Number of games
 * @property {Serie} - A serie, an occurrence of a league event
 * @property {Dota2TeamStatsTotals}
 */
export type Dota2TeamBySerieStat = z.infer<typeof dota2TeamBySerieStat>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const dota2TeamBySerieStatResponse: any = z.lazy(() => {
  return z
    .object({
      averages: dota2TeamAveragesResponse,
      games_count: z.number().gte(0).nullable(),
      serie: serieResponse,
      totals: dota2TeamStatsTotalsResponse,
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
export const dota2TeamBySerieStatRequest: any = z.lazy(() => {
  return z
    .object({
      averages: dota2TeamAveragesRequest.nullish(),
      gamesCount: z.number().nullish(),
      serie: serieRequest.nullish(),
      totals: dota2TeamStatsTotalsRequest.nullish(),
    })
    .transform((data) => ({
      averages: data['averages'],
      games_count: data['gamesCount'],
      serie: data['serie'],
      totals: data['totals'],
    }));
});