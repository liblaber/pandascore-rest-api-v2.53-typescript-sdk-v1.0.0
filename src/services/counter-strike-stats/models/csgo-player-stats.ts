import { z } from 'zod';
import {
  csgoStatsCounts,
  csgoStatsCountsRequest,
  csgoStatsCountsResponse,
} from '../../common/csgo-stats-counts';
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
export const csgoPlayerStats = z.object({
  counts: csgoStatsCounts,
  perGameAverages: csgoPlayerStatsGameAverages,
  perRoundAverages: csgoStatsRoundAverages,
});

/**
 * Statistics for all matches
 * @typedef  {CsgoPlayerStats} csgoPlayerStats - Statistics for all matches - Statistics for all matches
 * @property {CsgoStatsCounts}
 * @property {CsgoPlayerStatsGameAverages}
 * @property {CsgoStatsRoundAverages}
 */
export type CsgoPlayerStats = z.infer<typeof csgoPlayerStats>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const csgoPlayerStatsResponse = z
  .object({
    counts: csgoStatsCountsResponse,
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
export const csgoPlayerStatsRequest = z
  .object({
    counts: csgoStatsCountsRequest.nullish(),
    perGameAverages: csgoPlayerStatsGameAveragesRequest.nullish(),
    perRoundAverages: csgoStatsRoundAveragesRequest.nullish(),
  })
  .transform((data) => ({
    counts: data['counts'],
    per_game_averages: data['perGameAverages'],
    per_round_averages: data['perRoundAverages'],
  }));
