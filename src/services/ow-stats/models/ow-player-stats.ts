import { z } from 'zod';
import { owPlayerAverages, owPlayerAveragesRequest, owPlayerAveragesResponse } from './ow-player-averages';
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
export const owPlayerStats: any = z.lazy(() => {
  return z.object({
    averages: owPlayerAverages,
    gamesCount: z.number().gte(0).nullable(),
    per10MinutesAverages: owPlayer10MinAverages,
    perGameAverages: owPlayerGameAverages,
    totals: owPlayerTotals,
  });
});

/**
 * Player's statistics
 * @typedef  {OwPlayerStats} owPlayerStats - Player's statistics - Player's statistics
 * @property {OwPlayerAverages}
 * @property {number} - Number of games
 * @property {OwPlayer10MinAverages}
 * @property {OwPlayerGameAverages}
 * @property {OwPlayerTotals}
 */
export type OwPlayerStats = z.infer<typeof owPlayerStats>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const owPlayerStatsResponse: any = z.lazy(() => {
  return z
    .object({
      averages: owPlayerAveragesResponse,
      games_count: z.number().gte(0).nullable(),
      per_10_minutes_averages: owPlayer10MinAveragesResponse,
      per_game_averages: owPlayerGameAveragesResponse,
      totals: owPlayerTotalsResponse,
    })
    .transform((data) => ({
      averages: data['averages'],
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
export const owPlayerStatsRequest: any = z.lazy(() => {
  return z
    .object({
      averages: owPlayerAveragesRequest.nullish(),
      gamesCount: z.number().nullish(),
      per10MinutesAverages: owPlayer10MinAveragesRequest.nullish(),
      perGameAverages: owPlayerGameAveragesRequest.nullish(),
      totals: owPlayerTotalsRequest.nullish(),
    })
    .transform((data) => ({
      averages: data['averages'],
      games_count: data['gamesCount'],
      per_10_minutes_averages: data['per10MinutesAverages'],
      per_game_averages: data['perGameAverages'],
      totals: data['totals'],
    }));
});
