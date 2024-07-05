import { z } from 'zod';
import {
  owPlayerAverages,
  owPlayerAveragesRequest,
  owPlayerAveragesResponse,
} from '../../common/ow-player-averages';
import {
  owGameStatsGame,
  owGameStatsGameRequest,
  owGameStatsGameResponse,
} from './ow-game-stats-game';
import {
  owPlayer10MinAverages,
  owPlayer10MinAveragesRequest,
  owPlayer10MinAveragesResponse,
} from '../../common/ow-player10-min-averages';
import {
  owPlayerGameAverages,
  owPlayerGameAveragesRequest,
  owPlayerGameAveragesResponse,
} from '../../common/ow-player-game-averages';
import {
  owPlayerGameTotalsForGame,
  owPlayerGameTotalsForGameRequest,
  owPlayerGameTotalsForGameResponse,
} from './ow-player-game-totals-for-game';

/**
 * The shape of the model inside the application code - what the users use
 */
export const owPlayerStatsByGame = z.object({
  averages: owPlayerAverages,
  game: owGameStatsGame,
  gameId: z.number().gte(1),
  gamesCount: z.number().gte(0),
  per10MinutesAverages: owPlayer10MinAverages,
  perGameAverages: owPlayerGameAverages,
  totals: owPlayerGameTotalsForGame,
});

/**
 * Player's statistics for a game
 * @typedef  {OwPlayerStatsByGame} owPlayerStatsByGame - Player's statistics for a game - Player's statistics for a game
 * @property {OwPlayerAverages}
 * @property {OwGameStatsGame} - A game
 * @property {number}
 * @property {number} - Number of games
 * @property {OwPlayer10MinAverages}
 * @property {OwPlayerGameAverages}
 * @property {OwPlayerGameTotalsForGame}
 */
export type OwPlayerStatsByGame = z.infer<typeof owPlayerStatsByGame>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const owPlayerStatsByGameResponse = z
  .object({
    averages: owPlayerAveragesResponse,
    game: owGameStatsGameResponse,
    game_id: z.number().gte(1),
    games_count: z.number().gte(0),
    per_10_minutes_averages: owPlayer10MinAveragesResponse,
    per_game_averages: owPlayerGameAveragesResponse,
    totals: owPlayerGameTotalsForGameResponse,
  })
  .transform((data) => ({
    averages: data['averages'],
    game: data['game'],
    gameId: data['game_id'],
    gamesCount: data['games_count'],
    per10MinutesAverages: data['per_10_minutes_averages'],
    perGameAverages: data['per_game_averages'],
    totals: data['totals'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const owPlayerStatsByGameRequest = z
  .object({
    averages: owPlayerAveragesRequest.nullish(),
    game: owGameStatsGameRequest.nullish(),
    gameId: z.number().nullish(),
    gamesCount: z.number().nullish(),
    per10MinutesAverages: owPlayer10MinAveragesRequest.nullish(),
    perGameAverages: owPlayerGameAveragesRequest.nullish(),
    totals: owPlayerGameTotalsForGameRequest.nullish(),
  })
  .transform((data) => ({
    averages: data['averages'],
    game: data['game'],
    game_id: data['gameId'],
    games_count: data['gamesCount'],
    per_10_minutes_averages: data['per10MinutesAverages'],
    per_game_averages: data['perGameAverages'],
    totals: data['totals'],
  }));
