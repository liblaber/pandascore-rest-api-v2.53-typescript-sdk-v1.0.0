import { z } from 'zod';
import {
  loLMatchGamePlayer,
  loLMatchGamePlayerRequest,
  loLMatchGamePlayerResponse,
} from './lo-l-match-game-player';
import { gameStatus } from '../../common/game-status';
import { gameWinner, gameWinnerRequest, gameWinnerResponse } from '../../common/game-winner';
import { loLMatchGameWinnerType } from './lo-l-match-game-winner-type';

/**
 * The shape of the model inside the application code - what the users use
 */
export const loLMatchGame = z.object({
  beginAt: z.string().min(1),
  complete: z.boolean(),
  detailedStats: z.boolean(),
  endAt: z.string().min(1),
  finished: z.boolean(),
  forfeit: z.boolean(),
  id: z.number().gte(1),
  length: z.number().gte(0),
  matchId: z.number().gte(1),
  players: z.array(loLMatchGamePlayer),
  position: z.number().gte(1),
  status: gameStatus,
  winner: gameWinner,
  winnerType: loLMatchGameWinnerType,
});

/**
 *
 * @typedef  {LoLMatchGame} loLMatchGame
 * @property {string} - The game begin time, UTC. <br/>`null` when the game status is `not_started`
 * @property {boolean} - Whether When `true`, the game statistics are complete and will not be updated again
 * @property {boolean} - Whether historical data is available for the game
 * @property {string} - The game end time, UTC. <br/>`null` when the game status is not `finished`
 * @property {boolean} - Whether the game is finished
 * @property {boolean} - Whether the game has been forfeited
 * @property {number} - LoL game ID
 * @property {number} - Duration of the game in seconds. <br/>`null` when the game status is not `finished`
 * @property {number}
 * @property {LoLMatchGamePlayer[]}
 * @property {number} - Game position in the match. Starts at 1
 * @property {GameStatus} - The game status
 * @property {GameWinner}
 * @property {LoLMatchGameWinnerType}
 */
export type LoLMatchGame = z.infer<typeof loLMatchGame>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const loLMatchGameResponse = z
  .object({
    begin_at: z.string().min(1),
    complete: z.boolean(),
    detailed_stats: z.boolean(),
    end_at: z.string().min(1),
    finished: z.boolean(),
    forfeit: z.boolean(),
    id: z.number().gte(1),
    length: z.number().gte(0),
    match_id: z.number().gte(1),
    players: z.array(loLMatchGamePlayerResponse),
    position: z.number().gte(1),
    status: gameStatus,
    winner: gameWinnerResponse,
    winner_type: loLMatchGameWinnerType,
  })
  .transform((data) => ({
    beginAt: data['begin_at'],
    complete: data['complete'],
    detailedStats: data['detailed_stats'],
    endAt: data['end_at'],
    finished: data['finished'],
    forfeit: data['forfeit'],
    id: data['id'],
    length: data['length'],
    matchId: data['match_id'],
    players: data['players'],
    position: data['position'],
    status: data['status'],
    winner: data['winner'],
    winnerType: data['winner_type'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const loLMatchGameRequest = z
  .object({
    beginAt: z.string().nullish(),
    complete: z.boolean().nullish(),
    detailedStats: z.boolean().nullish(),
    endAt: z.string().nullish(),
    finished: z.boolean().nullish(),
    forfeit: z.boolean().nullish(),
    id: z.number().nullish(),
    length: z.number().nullish(),
    matchId: z.number().nullish(),
    players: z.array(loLMatchGamePlayerRequest).nullish(),
    position: z.number().nullish(),
    status: gameStatus.nullish(),
    winner: gameWinnerRequest.nullish(),
    winnerType: loLMatchGameWinnerType.nullish(),
  })
  .transform((data) => ({
    begin_at: data['beginAt'],
    complete: data['complete'],
    detailed_stats: data['detailedStats'],
    end_at: data['endAt'],
    finished: data['finished'],
    forfeit: data['forfeit'],
    id: data['id'],
    length: data['length'],
    match_id: data['matchId'],
    players: data['players'],
    position: data['position'],
    status: data['status'],
    winner: data['winner'],
    winner_type: data['winnerType'],
  }));
