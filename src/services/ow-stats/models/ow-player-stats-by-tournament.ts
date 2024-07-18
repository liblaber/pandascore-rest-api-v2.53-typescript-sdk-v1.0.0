import { z } from 'zod';
import { owPlayerAverages, owPlayerAveragesRequest, owPlayerAveragesResponse } from './ow-player-averages';
import {
  owPlayer10MinAverages,
  owPlayer10MinAveragesRequest,
  owPlayer10MinAveragesResponse,
} from './ow-player10-min-averages';
import {
  owPlayerGameAverages,
  owPlayerGameAveragesRequest,
  owPlayerGameAveragesResponse,
} from './ow-player-game-averages';
import { owPlayerTotals, owPlayerTotalsRequest, owPlayerTotalsResponse } from './ow-player-totals';
import { tournament, tournamentRequest, tournamentResponse } from '../../common/tournament';

/**
 * The shape of the model inside the application code - what the users use
 */
export const owPlayerStatsByTournament: any = z.lazy(() => {
  return z.object({
    averages: owPlayerAverages,
    gamesCount: z.number().gte(0).nullable(),
    per10MinutesAverages: owPlayer10MinAverages,
    perGameAverages: owPlayerGameAverages,
    totals: owPlayerTotals,
    tournament: tournament,
  });
});

/**
 * Player's statistics for a tournament
 * @typedef  {OwPlayerStatsByTournament} owPlayerStatsByTournament - Player's statistics for a tournament - Player's statistics for a tournament
 * @property {OwPlayerAverages}
 * @property {number} - Number of games
 * @property {OwPlayer10MinAverages}
 * @property {OwPlayerGameAverages}
 * @property {OwPlayerTotals}
 * @property {Tournament}
 */
export type OwPlayerStatsByTournament = z.infer<typeof owPlayerStatsByTournament>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const owPlayerStatsByTournamentResponse: any = z.lazy(() => {
  return z
    .object({
      averages: owPlayerAveragesResponse,
      games_count: z.number().gte(0).nullable(),
      per_10_minutes_averages: owPlayer10MinAveragesResponse,
      per_game_averages: owPlayerGameAveragesResponse,
      totals: owPlayerTotalsResponse,
      tournament: tournamentResponse,
    })
    .transform((data) => ({
      averages: data['averages'],
      gamesCount: data['games_count'],
      per10MinutesAverages: data['per_10_minutes_averages'],
      perGameAverages: data['per_game_averages'],
      totals: data['totals'],
      tournament: data['tournament'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const owPlayerStatsByTournamentRequest: any = z.lazy(() => {
  return z
    .object({
      averages: owPlayerAveragesRequest.nullish(),
      gamesCount: z.number().nullish(),
      per10MinutesAverages: owPlayer10MinAveragesRequest.nullish(),
      perGameAverages: owPlayerGameAveragesRequest.nullish(),
      totals: owPlayerTotalsRequest.nullish(),
      tournament: tournamentRequest.nullish(),
    })
    .transform((data) => ({
      averages: data['averages'],
      games_count: data['gamesCount'],
      per_10_minutes_averages: data['per10MinutesAverages'],
      per_game_averages: data['perGameAverages'],
      totals: data['totals'],
      tournament: data['tournament'],
    }));
});
