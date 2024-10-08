// This file was generated by liblab | https://liblab.com/

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
import { tournament, tournamentRequest, tournamentResponse } from '../../common/tournament';

/**
 * The shape of the model inside the application code - what the users use
 */
export const csgoTeamStatsByTournament = z.lazy(() => {
  return z.object({
    counts: csgoStatsCounts,
    maps: z.array(csgoTeamMapStats),
    perGameAverages: csgoTeamStatsGameAverages,
    perRoundAverages: csgoStatsRoundAverages,
    tournament: tournament,
  });
});

/**
 * Statistics for a tournament
 * @typedef  {CsgoTeamStatsByTournament} csgoTeamStatsByTournament - Statistics for a tournament - Statistics for a tournament
 * @property {CsgoStatsCounts}
 * @property {CsgoTeamMapStats[]}
 * @property {CsgoTeamStatsGameAverages}
 * @property {CsgoStatsRoundAverages}
 * @property {Tournament}
 */
export type CsgoTeamStatsByTournament = z.infer<typeof csgoTeamStatsByTournament>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const csgoTeamStatsByTournamentResponse = z.lazy(() => {
  return z
    .object({
      counts: csgoStatsCountsResponse,
      maps: z.array(csgoTeamMapStatsResponse),
      per_game_averages: csgoTeamStatsGameAveragesResponse,
      per_round_averages: csgoStatsRoundAveragesResponse,
      tournament: tournamentResponse,
    })
    .transform((data) => ({
      counts: data['counts'],
      maps: data['maps'],
      perGameAverages: data['per_game_averages'],
      perRoundAverages: data['per_round_averages'],
      tournament: data['tournament'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const csgoTeamStatsByTournamentRequest = z.lazy(() => {
  return z
    .object({
      counts: csgoStatsCountsRequest.nullish(),
      maps: z.array(csgoTeamMapStatsRequest).nullish(),
      perGameAverages: csgoTeamStatsGameAveragesRequest.nullish(),
      perRoundAverages: csgoStatsRoundAveragesRequest.nullish(),
      tournament: tournamentRequest.nullish(),
    })
    .transform((data) => ({
      counts: data['counts'],
      maps: data['maps'],
      per_game_averages: data['perGameAverages'],
      per_round_averages: data['perRoundAverages'],
      tournament: data['tournament'],
    }));
});
