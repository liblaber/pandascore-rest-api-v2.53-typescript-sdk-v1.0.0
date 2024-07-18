import { z } from 'zod';
import { dota2TeamAverages, dota2TeamAveragesRequest, dota2TeamAveragesResponse } from './dota2-team-averages';
import {
  dota2TeamStatsTotals,
  dota2TeamStatsTotalsRequest,
  dota2TeamStatsTotalsResponse,
} from './dota2-team-stats-totals';
import { tournament, tournamentRequest, tournamentResponse } from '../../common/tournament';

/**
 * The shape of the model inside the application code - what the users use
 */
export const dota2TeamByTournamentStat: any = z.lazy(() => {
  return z.object({
    averages: dota2TeamAverages,
    gamesCount: z.number().gte(0).nullable(),
    totals: dota2TeamStatsTotals,
    tournament: tournament,
  });
});

/**
 * Team's statistics for a tournament
 * @typedef  {Dota2TeamByTournamentStat} dota2TeamByTournamentStat - Team's statistics for a tournament - Team's statistics for a tournament
 * @property {Dota2TeamAverages}
 * @property {number} - Number of games
 * @property {Dota2TeamStatsTotals}
 * @property {Tournament}
 */
export type Dota2TeamByTournamentStat = z.infer<typeof dota2TeamByTournamentStat>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const dota2TeamByTournamentStatResponse: any = z.lazy(() => {
  return z
    .object({
      averages: dota2TeamAveragesResponse,
      games_count: z.number().gte(0).nullable(),
      totals: dota2TeamStatsTotalsResponse,
      tournament: tournamentResponse,
    })
    .transform((data) => ({
      averages: data['averages'],
      gamesCount: data['games_count'],
      totals: data['totals'],
      tournament: data['tournament'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const dota2TeamByTournamentStatRequest: any = z.lazy(() => {
  return z
    .object({
      averages: dota2TeamAveragesRequest.nullish(),
      gamesCount: z.number().nullish(),
      totals: dota2TeamStatsTotalsRequest.nullish(),
      tournament: tournamentRequest.nullish(),
    })
    .transform((data) => ({
      averages: data['averages'],
      games_count: data['gamesCount'],
      totals: data['totals'],
      tournament: data['tournament'],
    }));
});