import { z } from 'zod';
import { loLPlayerAverages, loLPlayerAveragesRequest, loLPlayerAveragesResponse } from './lo-l-player-averages';
import { serie, serieRequest, serieResponse } from '../../common/serie';
import {
  loLPlayerStatsTotals,
  loLPlayerStatsTotalsRequest,
  loLPlayerStatsTotalsResponse,
} from './lo-l-player-stats-totals';

/**
 * The shape of the model inside the application code - what the users use
 */
export const loLPlayerBySerieStat: any = z.lazy(() => {
  return z.object({
    averages: loLPlayerAverages,
    gamesCount: z.number().gte(0).nullable(),
    serie: serie,
    totals: loLPlayerStatsTotals,
  });
});

/**
 * Player's statistics for a serie
 * @typedef  {LoLPlayerBySerieStat} loLPlayerBySerieStat - Player's statistics for a serie - Player's statistics for a serie
 * @property {LoLPlayerAverages}
 * @property {number} - Number of games
 * @property {Serie} - A serie, an occurrence of a league event
 * @property {LoLPlayerStatsTotals}
 */
export type LoLPlayerBySerieStat = z.infer<typeof loLPlayerBySerieStat>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const loLPlayerBySerieStatResponse: any = z.lazy(() => {
  return z
    .object({
      averages: loLPlayerAveragesResponse,
      games_count: z.number().gte(0).nullable(),
      serie: serieResponse,
      totals: loLPlayerStatsTotalsResponse,
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
export const loLPlayerBySerieStatRequest: any = z.lazy(() => {
  return z
    .object({
      averages: loLPlayerAveragesRequest.nullish(),
      gamesCount: z.number().nullish(),
      serie: serieRequest.nullish(),
      totals: loLPlayerStatsTotalsRequest.nullish(),
    })
    .transform((data) => ({
      averages: data['averages'],
      games_count: data['gamesCount'],
      serie: data['serie'],
      totals: data['totals'],
    }));
});