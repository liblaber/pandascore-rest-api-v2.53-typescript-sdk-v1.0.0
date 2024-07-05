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
import { tournament, tournamentRequest, tournamentResponse } from '../../common/tournament';

/**
 * The shape of the model inside the application code - what the users use
 */
export const csgoPlayerStatsByTournament = z.object({
  counts: csgoStatsCounts,
  perGameAverages: csgoPlayerStatsGameAverages,
  perRoundAverages: csgoStatsRoundAverages,
  tournament: tournament,
});

/**
 * Statistics for a tournament
 * @typedef  {CsgoPlayerStatsByTournament} csgoPlayerStatsByTournament - Statistics for a tournament - Statistics for a tournament
 * @property {CsgoStatsCounts}
 * @property {CsgoPlayerStatsGameAverages}
 * @property {CsgoStatsRoundAverages}
 * @property {Tournament}
 */
export type CsgoPlayerStatsByTournament = z.infer<typeof csgoPlayerStatsByTournament>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const csgoPlayerStatsByTournamentResponse = z
  .object({
    counts: csgoStatsCountsResponse,
    per_game_averages: csgoPlayerStatsGameAveragesResponse,
    per_round_averages: csgoStatsRoundAveragesResponse,
    tournament: tournamentResponse,
  })
  .transform((data) => ({
    counts: data['counts'],
    perGameAverages: data['per_game_averages'],
    perRoundAverages: data['per_round_averages'],
    tournament: data['tournament'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const csgoPlayerStatsByTournamentRequest = z
  .object({
    counts: csgoStatsCountsRequest.nullish(),
    perGameAverages: csgoPlayerStatsGameAveragesRequest.nullish(),
    perRoundAverages: csgoStatsRoundAveragesRequest.nullish(),
    tournament: tournamentRequest.nullish(),
  })
  .transform((data) => ({
    counts: data['counts'],
    per_game_averages: data['perGameAverages'],
    per_round_averages: data['perRoundAverages'],
    tournament: data['tournament'],
  }));
