import { z } from 'zod';
import {
  loLPlayerAverages,
  loLPlayerAveragesRequest,
  loLPlayerAveragesResponse,
} from '../../common/lo-l-player-averages';
import {
  loLPlayerStatsTotals,
  loLPlayerStatsTotalsRequest,
  loLPlayerStatsTotalsResponse,
} from '../../common/lo-l-player-stats-totals';
import { tournament, tournamentRequest, tournamentResponse } from '../../common/tournament';

/**
 * The shape of the model inside the application code - what the users use
 */
export const loLPlayerByTournamentStat = z.object({
  averages: loLPlayerAverages,
  gamesCount: z.number().gte(0),
  totals: loLPlayerStatsTotals,
  tournament: tournament,
});

/**
 * Player's statistics for a tournament
 * @typedef  {LoLPlayerByTournamentStat} loLPlayerByTournamentStat - Player's statistics for a tournament - Player's statistics for a tournament
 * @property {LoLPlayerAverages}
 * @property {number} - Number of games
 * @property {LoLPlayerStatsTotals}
 * @property {Tournament}
 */
export type LoLPlayerByTournamentStat = z.infer<typeof loLPlayerByTournamentStat>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const loLPlayerByTournamentStatResponse = z
  .object({
    averages: loLPlayerAveragesResponse,
    games_count: z.number().gte(0),
    totals: loLPlayerStatsTotalsResponse,
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
export const loLPlayerByTournamentStatRequest = z
  .object({
    averages: loLPlayerAveragesRequest.nullish(),
    gamesCount: z.number().nullish(),
    totals: loLPlayerStatsTotalsRequest.nullish(),
    tournament: tournamentRequest.nullish(),
  })
  .transform((data) => ({
    averages: data['averages'],
    games_count: data['gamesCount'],
    totals: data['totals'],
    tournament: data['tournament'],
  }));
