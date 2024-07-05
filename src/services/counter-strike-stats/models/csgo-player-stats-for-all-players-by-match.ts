import { z } from 'zod';
import {
  csgoStatsCountsForMatch,
  csgoStatsCountsForMatchRequest,
  csgoStatsCountsForMatchResponse,
} from '../../common/csgo-stats-counts-for-match';
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
export const csgoPlayerStatsForAllPlayersByMatch = z.object({
  counts: csgoStatsCountsForMatch,
  perGameAverages: csgoPlayerStatsGameAverages,
  perRoundAverages: csgoStatsRoundAverages,
});

/**
 * Statistics for all players for a match
 * @typedef  {CsgoPlayerStatsForAllPlayersByMatch} csgoPlayerStatsForAllPlayersByMatch - Statistics for all players for a match - Statistics for all players for a match
 * @property {CsgoStatsCountsForMatch}
 * @property {CsgoPlayerStatsGameAverages}
 * @property {CsgoStatsRoundAverages}
 */
export type CsgoPlayerStatsForAllPlayersByMatch = z.infer<
  typeof csgoPlayerStatsForAllPlayersByMatch
>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const csgoPlayerStatsForAllPlayersByMatchResponse = z
  .object({
    counts: csgoStatsCountsForMatchResponse,
    per_game_averages: csgoPlayerStatsGameAveragesResponse,
    per_round_averages: csgoStatsRoundAveragesResponse,
  })
  .transform((data) => ({
    counts: data['counts'],
    perGameAverages: data['per_game_averages'],
    perRoundAverages: data['per_round_averages'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const csgoPlayerStatsForAllPlayersByMatchRequest = z
  .object({
    counts: csgoStatsCountsForMatchRequest.nullish(),
    perGameAverages: csgoPlayerStatsGameAveragesRequest.nullish(),
    perRoundAverages: csgoStatsRoundAveragesRequest.nullish(),
  })
  .transform((data) => ({
    counts: data['counts'],
    per_game_averages: data['perGameAverages'],
    per_round_averages: data['perRoundAverages'],
  }));
