import { z } from 'zod';
import { dota2PlayerAverages, dota2PlayerAveragesRequest, dota2PlayerAveragesResponse } from './dota2-player-averages';
import {
  dota2PlayerStatsTotals,
  dota2PlayerStatsTotalsRequest,
  dota2PlayerStatsTotalsResponse,
} from './dota2-player-stats-totals';
import { tournament, tournamentRequest, tournamentResponse } from '../../common/tournament';

/**
 * The shape of the model inside the application code - what the users use
 */
export const dota2PlayerByTournamentStat: any = z.lazy(() => {
  return z.object({
    averages: dota2PlayerAverages,
    gamesCount: z.number().gte(0).nullable(),
    totals: dota2PlayerStatsTotals,
    tournament: tournament,
  });
});

/**
 * Player's statistics for a tournament
 * @typedef  {Dota2PlayerByTournamentStat} dota2PlayerByTournamentStat - Player's statistics for a tournament - Player's statistics for a tournament
 * @property {Dota2PlayerAverages}
 * @property {number} - Number of games
 * @property {Dota2PlayerStatsTotals}
 * @property {Tournament}
 */
export type Dota2PlayerByTournamentStat = z.infer<typeof dota2PlayerByTournamentStat>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const dota2PlayerByTournamentStatResponse: any = z.lazy(() => {
  return z
    .object({
      averages: dota2PlayerAveragesResponse,
      games_count: z.number().gte(0).nullable(),
      totals: dota2PlayerStatsTotalsResponse,
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
export const dota2PlayerByTournamentStatRequest: any = z.lazy(() => {
  return z
    .object({
      averages: dota2PlayerAveragesRequest.nullish(),
      gamesCount: z.number().nullish(),
      totals: dota2PlayerStatsTotalsRequest.nullish(),
      tournament: tournamentRequest.nullish(),
    })
    .transform((data) => ({
      averages: data['averages'],
      games_count: data['gamesCount'],
      totals: data['totals'],
      tournament: data['tournament'],
    }));
});