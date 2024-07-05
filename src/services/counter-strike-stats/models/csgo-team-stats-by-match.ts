import { z } from 'zod';
import {
  csgoStatsCountsForMatch,
  csgoStatsCountsForMatchRequest,
  csgoStatsCountsForMatchResponse,
} from '../../common/csgo-stats-counts-for-match';
import {
  csgoTeamMapStats,
  csgoTeamMapStatsRequest,
  csgoTeamMapStatsResponse,
} from '../../common/csgo-team-map-stats';
import { match, matchRequest, matchResponse } from '../../common/match';
import {
  csgoTeamStatsGameAverages,
  csgoTeamStatsGameAveragesRequest,
  csgoTeamStatsGameAveragesResponse,
} from '../../common/csgo-team-stats-game-averages';
import {
  csgoStatsRoundAverages,
  csgoStatsRoundAveragesRequest,
  csgoStatsRoundAveragesResponse,
} from '../../common/csgo-stats-round-averages';

/**
 * The shape of the model inside the application code - what the users use
 */
export const csgoTeamStatsByMatch = z.object({
  counts: csgoStatsCountsForMatch,
  maps: z.array(csgoTeamMapStats),
  match: match,
  perGameAverages: csgoTeamStatsGameAverages,
  perRoundAverages: csgoStatsRoundAverages,
});

/**
 * Statistics for a match
 * @typedef  {CsgoTeamStatsByMatch} csgoTeamStatsByMatch - Statistics for a match - Statistics for a match
 * @property {CsgoStatsCountsForMatch}
 * @property {CsgoTeamMapStats[]}
 * @property {Match}
 * @property {CsgoTeamStatsGameAverages}
 * @property {CsgoStatsRoundAverages}
 */
export type CsgoTeamStatsByMatch = z.infer<typeof csgoTeamStatsByMatch>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const csgoTeamStatsByMatchResponse = z
  .object({
    counts: csgoStatsCountsForMatchResponse,
    maps: z.array(csgoTeamMapStatsResponse),
    match: matchResponse,
    per_game_averages: csgoTeamStatsGameAveragesResponse,
    per_round_averages: csgoStatsRoundAveragesResponse,
  })
  .transform((data) => ({
    counts: data['counts'],
    maps: data['maps'],
    match: data['match'],
    perGameAverages: data['per_game_averages'],
    perRoundAverages: data['per_round_averages'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const csgoTeamStatsByMatchRequest = z
  .object({
    counts: csgoStatsCountsForMatchRequest.nullish(),
    maps: z.array(csgoTeamMapStatsRequest).nullish(),
    match: matchRequest.nullish(),
    perGameAverages: csgoTeamStatsGameAveragesRequest.nullish(),
    perRoundAverages: csgoStatsRoundAveragesRequest.nullish(),
  })
  .transform((data) => ({
    counts: data['counts'],
    maps: data['maps'],
    match: data['match'],
    per_game_averages: data['perGameAverages'],
    per_round_averages: data['perRoundAverages'],
  }));
