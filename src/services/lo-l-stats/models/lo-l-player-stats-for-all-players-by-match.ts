// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import { loLPlayerAverages, loLPlayerAveragesRequest, loLPlayerAveragesResponse } from './lo-l-player-averages';
import {
  loLPlayerStatsTotals,
  loLPlayerStatsTotalsRequest,
  loLPlayerStatsTotalsResponse,
} from './lo-l-player-stats-totals';

/**
 * The shape of the model inside the application code - what the users use
 */
export const loLPlayerStatsForAllPlayersByMatch = z.lazy(() => {
  return z.object({
    averages: loLPlayerAverages,
    gamesCount: z.number().gte(0).nullable(),
    totals: loLPlayerStatsTotals,
  });
});

/**
 * Statistics for all players for a match
 * @typedef  {LoLPlayerStatsForAllPlayersByMatch} loLPlayerStatsForAllPlayersByMatch - Statistics for all players for a match - Statistics for all players for a match
 * @property {LoLPlayerAverages}
 * @property {number} - Number of games
 * @property {LoLPlayerStatsTotals}
 */
export type LoLPlayerStatsForAllPlayersByMatch = z.infer<typeof loLPlayerStatsForAllPlayersByMatch>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const loLPlayerStatsForAllPlayersByMatchResponse = z.lazy(() => {
  return z
    .object({
      averages: loLPlayerAveragesResponse,
      games_count: z.number().gte(0).nullable(),
      totals: loLPlayerStatsTotalsResponse,
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
export const loLPlayerStatsForAllPlayersByMatchRequest = z.lazy(() => {
  return z
    .object({
      averages: loLPlayerAveragesRequest.nullish(),
      gamesCount: z.number().nullish(),
      totals: loLPlayerStatsTotalsRequest.nullish(),
    })
    .transform((data) => ({
      averages: data['averages'],
      games_count: data['gamesCount'],
      totals: data['totals'],
    }));
});
