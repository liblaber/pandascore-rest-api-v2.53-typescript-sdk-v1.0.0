import { z } from 'zod';
import {
  owPlayerAverages,
  owPlayerAveragesRequest,
  owPlayerAveragesResponse,
} from '../../common/ow-player-averages';
import { match, matchRequest, matchResponse } from '../../common/match';
import {
  owPlayer10MinAverages,
  owPlayer10MinAveragesRequest,
  owPlayer10MinAveragesResponse,
} from '../../common/ow-player10-min-averages';
import {
  owPlayerGameAverages,
  owPlayerGameAveragesRequest,
  owPlayerGameAveragesResponse,
} from '../../common/ow-player-game-averages';
import {
  owPlayerTotals,
  owPlayerTotalsRequest,
  owPlayerTotalsResponse,
} from '../../common/ow-player-totals';

/**
 * The shape of the model inside the application code - what the users use
 */
export const owPlayerStatsByMatch = z.object({
  averages: owPlayerAverages,
  gamesCount: z.number().gte(0),
  match: match,
  per10MinutesAverages: owPlayer10MinAverages,
  perGameAverages: owPlayerGameAverages,
  totals: owPlayerTotals,
});

/**
 * Player's statistics for a match
 * @typedef  {OwPlayerStatsByMatch} owPlayerStatsByMatch - Player's statistics for a match - Player's statistics for a match
 * @property {OwPlayerAverages}
 * @property {number} - Number of games
 * @property {Match}
 * @property {OwPlayer10MinAverages}
 * @property {OwPlayerGameAverages}
 * @property {OwPlayerTotals}
 */
export type OwPlayerStatsByMatch = z.infer<typeof owPlayerStatsByMatch>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const owPlayerStatsByMatchResponse = z
  .object({
    averages: owPlayerAveragesResponse,
    games_count: z.number().gte(0),
    match: matchResponse,
    per_10_minutes_averages: owPlayer10MinAveragesResponse,
    per_game_averages: owPlayerGameAveragesResponse,
    totals: owPlayerTotalsResponse,
  })
  .transform((data) => ({
    averages: data['averages'],
    gamesCount: data['games_count'],
    match: data['match'],
    per10MinutesAverages: data['per_10_minutes_averages'],
    perGameAverages: data['per_game_averages'],
    totals: data['totals'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const owPlayerStatsByMatchRequest = z
  .object({
    averages: owPlayerAveragesRequest.nullish(),
    gamesCount: z.number().nullish(),
    match: matchRequest.nullish(),
    per10MinutesAverages: owPlayer10MinAveragesRequest.nullish(),
    perGameAverages: owPlayerGameAveragesRequest.nullish(),
    totals: owPlayerTotalsRequest.nullish(),
  })
  .transform((data) => ({
    averages: data['averages'],
    games_count: data['gamesCount'],
    match: data['match'],
    per_10_minutes_averages: data['per10MinutesAverages'],
    per_game_averages: data['perGameAverages'],
    totals: data['totals'],
  }));
