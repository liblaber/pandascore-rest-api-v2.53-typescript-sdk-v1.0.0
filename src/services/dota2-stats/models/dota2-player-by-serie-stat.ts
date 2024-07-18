// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import { dota2PlayerAverages, dota2PlayerAveragesRequest, dota2PlayerAveragesResponse } from './dota2-player-averages';
import { serie, serieRequest, serieResponse } from '../../common/serie';
import {
  dota2PlayerStatsTotals,
  dota2PlayerStatsTotalsRequest,
  dota2PlayerStatsTotalsResponse,
} from './dota2-player-stats-totals';

/**
 * The shape of the model inside the application code - what the users use
 */
export const dota2PlayerBySerieStat: any = z.lazy(() => {
  return z.object({
    averages: dota2PlayerAverages,
    gamesCount: z.number().gte(0).nullable(),
    serie: serie,
    totals: dota2PlayerStatsTotals,
  });
});

/**
 * Player's statistics for a serie
 * @typedef  {Dota2PlayerBySerieStat} dota2PlayerBySerieStat - Player's statistics for a serie - Player's statistics for a serie
 * @property {Dota2PlayerAverages}
 * @property {number} - Number of games
 * @property {Serie} - A serie, an occurrence of a league event
 * @property {Dota2PlayerStatsTotals}
 */
export type Dota2PlayerBySerieStat = z.infer<typeof dota2PlayerBySerieStat>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const dota2PlayerBySerieStatResponse: any = z.lazy(() => {
  return z
    .object({
      averages: dota2PlayerAveragesResponse,
      games_count: z.number().gte(0).nullable(),
      serie: serieResponse,
      totals: dota2PlayerStatsTotalsResponse,
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
export const dota2PlayerBySerieStatRequest: any = z.lazy(() => {
  return z
    .object({
      averages: dota2PlayerAveragesRequest.nullish(),
      gamesCount: z.number().nullish(),
      serie: serieRequest.nullish(),
      totals: dota2PlayerStatsTotalsRequest.nullish(),
    })
    .transform((data) => ({
      averages: data['averages'],
      games_count: data['gamesCount'],
      serie: data['serie'],
      totals: data['totals'],
    }));
});
