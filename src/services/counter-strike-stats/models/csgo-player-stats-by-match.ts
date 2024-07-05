import { z } from 'zod';
import {
  csgoStatsCountsForMatch,
  csgoStatsCountsForMatchRequest,
  csgoStatsCountsForMatchResponse,
} from '../../common/csgo-stats-counts-for-match';
import { match, matchRequest, matchResponse } from '../../common/match';
import {
  csgoPlayerStatsGameAverages,
  csgoPlayerStatsGameAveragesRequest,
  csgoPlayerStatsGameAveragesResponse,
} from '../../common/csgo-player-stats-game-averages';
import {
  csgoStatsRoundAverages,
  csgoStatsRoundAveragesRequest,
  csgoStatsRoundAveragesResponse,
} from '../../common/csgo-stats-round-averages';

/**
 * The shape of the model inside the application code - what the users use
 */
export const csgoPlayerStatsByMatch = z.object({
  counts: csgoStatsCountsForMatch,
  match: match,
  perGameAverages: csgoPlayerStatsGameAverages,
  perRoundAverages: csgoStatsRoundAverages,
});

/**
 * Statistics for a match
 * @typedef  {CsgoPlayerStatsByMatch} csgoPlayerStatsByMatch - Statistics for a match - Statistics for a match
 * @property {CsgoStatsCountsForMatch}
 * @property {Match}
 * @property {CsgoPlayerStatsGameAverages}
 * @property {CsgoStatsRoundAverages}
 */
export type CsgoPlayerStatsByMatch = z.infer<typeof csgoPlayerStatsByMatch>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const csgoPlayerStatsByMatchResponse = z
  .object({
    counts: csgoStatsCountsForMatchResponse,
    match: matchResponse,
    per_game_averages: csgoPlayerStatsGameAveragesResponse,
    per_round_averages: csgoStatsRoundAveragesResponse,
  })
  .transform((data) => ({
    counts: data['counts'],
    match: data['match'],
    perGameAverages: data['per_game_averages'],
    perRoundAverages: data['per_round_averages'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const csgoPlayerStatsByMatchRequest = z
  .object({
    counts: csgoStatsCountsForMatchRequest.nullish(),
    match: matchRequest.nullish(),
    perGameAverages: csgoPlayerStatsGameAveragesRequest.nullish(),
    perRoundAverages: csgoStatsRoundAveragesRequest.nullish(),
  })
  .transform((data) => ({
    counts: data['counts'],
    match: data['match'],
    per_game_averages: data['perGameAverages'],
    per_round_averages: data['perRoundAverages'],
  }));
