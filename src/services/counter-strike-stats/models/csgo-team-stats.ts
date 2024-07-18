import { z } from 'zod';
import { csgoStatsCounts, csgoStatsCountsRequest, csgoStatsCountsResponse } from './csgo-stats-counts';
import { csgoTeamMapStats, csgoTeamMapStatsRequest, csgoTeamMapStatsResponse } from './csgo-team-map-stats';
import {
  csgoTeamStatsGameAverages,
  csgoTeamStatsGameAveragesRequest,
  csgoTeamStatsGameAveragesResponse,
} from './csgo-team-stats-game-averages';
import {
  csgoStatsRoundAverages,
  csgoStatsRoundAveragesRequest,
  csgoStatsRoundAveragesResponse,
} from './csgo-stats-round-averages';

/**
 * The shape of the model inside the application code - what the users use
 */
export const csgoTeamStats: any = z.lazy(() => {
  return z.object({
    counts: csgoStatsCounts,
    maps: z.array(csgoTeamMapStats),
    perGameAverages: csgoTeamStatsGameAverages,
    perRoundAverages: csgoStatsRoundAverages,
  });
});

/**
 * Statistics for all matches
 * @typedef  {CsgoTeamStats} csgoTeamStats - Statistics for all matches - Statistics for all matches
 * @property {CsgoStatsCounts}
 * @property {CsgoTeamMapStats[]}
 * @property {CsgoTeamStatsGameAverages}
 * @property {CsgoStatsRoundAverages}
 */
export type CsgoTeamStats = z.infer<typeof csgoTeamStats>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const csgoTeamStatsResponse: any = z.lazy(() => {
  return z
    .object({
      counts: csgoStatsCountsResponse,
      maps: z.array(csgoTeamMapStatsResponse),
      per_game_averages: csgoTeamStatsGameAveragesResponse,
      per_round_averages: csgoStatsRoundAveragesResponse,
    })
    .transform((data) => ({
      counts: data['counts'],
      maps: data['maps'],
      perGameAverages: data['per_game_averages'],
      perRoundAverages: data['per_round_averages'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const csgoTeamStatsRequest: any = z.lazy(() => {
  return z
    .object({
      counts: csgoStatsCountsRequest.nullish(),
      maps: z.array(csgoTeamMapStatsRequest).nullish(),
      perGameAverages: csgoTeamStatsGameAveragesRequest.nullish(),
      perRoundAverages: csgoStatsRoundAveragesRequest.nullish(),
    })
    .transform((data) => ({
      counts: data['counts'],
      maps: data['maps'],
      per_game_averages: data['perGameAverages'],
      per_round_averages: data['perRoundAverages'],
    }));
});
