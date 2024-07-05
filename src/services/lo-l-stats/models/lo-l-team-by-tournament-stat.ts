import { z } from 'zod';
import {
  loLTeamAverages,
  loLTeamAveragesRequest,
  loLTeamAveragesResponse,
} from '../../common/lo-l-team-averages';
import {
  loLTeamStatsTotals,
  loLTeamStatsTotalsRequest,
  loLTeamStatsTotalsResponse,
} from '../../common/lo-l-team-stats-totals';
import { tournament, tournamentRequest, tournamentResponse } from '../../common/tournament';

/**
 * The shape of the model inside the application code - what the users use
 */
export const loLTeamByTournamentStat = z.object({
  averages: loLTeamAverages,
  gamesCount: z.number().gte(0),
  totals: loLTeamStatsTotals,
  tournament: tournament,
});

/**
 * Team's statistics for a tournament
 * @typedef  {LoLTeamByTournamentStat} loLTeamByTournamentStat - Team's statistics for a tournament - Team's statistics for a tournament
 * @property {LoLTeamAverages}
 * @property {number} - Number of games
 * @property {LoLTeamStatsTotals}
 * @property {Tournament}
 */
export type LoLTeamByTournamentStat = z.infer<typeof loLTeamByTournamentStat>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const loLTeamByTournamentStatResponse = z
  .object({
    averages: loLTeamAveragesResponse,
    games_count: z.number().gte(0),
    totals: loLTeamStatsTotalsResponse,
    tournament: tournamentResponse,
  })
  .transform((data) => ({
    averages: data['averages'],
    gamesCount: data['games_count'],
    totals: data['totals'],
    tournament: data['tournament'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const loLTeamByTournamentStatRequest = z
  .object({
    averages: loLTeamAveragesRequest.nullish(),
    gamesCount: z.number().nullish(),
    totals: loLTeamStatsTotalsRequest.nullish(),
    tournament: tournamentRequest.nullish(),
  })
  .transform((data) => ({
    averages: data['averages'],
    games_count: data['gamesCount'],
    totals: data['totals'],
    tournament: data['tournament'],
  }));
