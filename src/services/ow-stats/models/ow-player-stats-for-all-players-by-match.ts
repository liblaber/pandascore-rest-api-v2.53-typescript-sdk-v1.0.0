import { z } from 'zod';
import {
  owPlayer10MinAverages,
  owPlayer10MinAveragesRequest,
  owPlayer10MinAveragesResponse,
} from './ow-player10-min-averages';
import {
  owPlayerGameAverages,
  owPlayerGameAveragesRequest,
  owPlayerGameAveragesResponse,
} from './ow-player-game-averages';
import { owPlayerTotals, owPlayerTotalsRequest, owPlayerTotalsResponse } from './ow-player-totals';

/**
 * The shape of the model inside the application code - what the users use
 */
export const owPlayerStatsForAllPlayersByMatch: any = z.lazy(() => {
  return z.object({
    gamesCount: z.number().gte(0).nullable(),
    per10MinutesAverages: owPlayer10MinAverages,
    perGameAverages: owPlayerGameAverages,
    totals: owPlayerTotals,
  });
});

/**
 * Statistics for all players for a match
 * @typedef  {OwPlayerStatsForAllPlayersByMatch} owPlayerStatsForAllPlayersByMatch - Statistics for all players for a match - Statistics for all players for a match
 * @property {number} - Number of games
 * @property {OwPlayer10MinAverages}
 * @property {OwPlayerGameAverages}
 * @property {OwPlayerTotals}
 */
export type OwPlayerStatsForAllPlayersByMatch = z.infer<typeof owPlayerStatsForAllPlayersByMatch>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const owPlayerStatsForAllPlayersByMatchResponse: any = z.lazy(() => {
  return z
    .object({
      games_count: z.number().gte(0).nullable(),
      per_10_minutes_averages: owPlayer10MinAveragesResponse,
      per_game_averages: owPlayerGameAveragesResponse,
      totals: owPlayerTotalsResponse,
    })
    .transform((data) => ({
      gamesCount: data['games_count'],
      per10MinutesAverages: data['per_10_minutes_averages'],
      perGameAverages: data['per_game_averages'],
      totals: data['totals'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const owPlayerStatsForAllPlayersByMatchRequest: any = z.lazy(() => {
  return z
    .object({
      gamesCount: z.number().nullish(),
      per10MinutesAverages: owPlayer10MinAveragesRequest.nullish(),
      perGameAverages: owPlayerGameAveragesRequest.nullish(),
      totals: owPlayerTotalsRequest.nullish(),
    })
    .transform((data) => ({
      games_count: data['gamesCount'],
      per_10_minutes_averages: data['per10MinutesAverages'],
      per_game_averages: data['perGameAverages'],
      totals: data['totals'],
    }));
});