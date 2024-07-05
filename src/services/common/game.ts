import { z } from 'zod';
import { gameId, gameIdRequest, gameIdResponse } from './game-id';
import { gameStatus } from './game-status';
import { gameWinner, gameWinnerRequest, gameWinnerResponse } from './game-winner';
import { gameWinnerType1 } from './game-winner-type-1';

/**
 * The shape of the model inside the application code - what the users use
 */
export const game = z.object({
  beginAt: z.string().min(1),
  complete: z.boolean(),
  detailedStats: z.boolean(),
  endAt: z.string().min(1),
  finished: z.boolean(),
  forfeit: z.boolean(),
  id: gameId,
  length: z.number().gte(0),
  matchId: z.number().gte(1),
  position: z.number().gte(1),
  status: gameStatus,
  winner: gameWinner,
  winnerType: gameWinnerType1,
});

/**
 *
 * @typedef  {Game} game
 * @property {string} - The game begin time, UTC. <br/>`null` when the game status is `not_started`
 * @property {boolean} - Whether When `true`, the game statistics are complete and will not be updated again
 * @property {boolean} - Whether historical data is available for the game
 * @property {string} - The game end time, UTC. <br/>`null` when the game status is not `finished`
 * @property {boolean} - Whether the game is finished
 * @property {boolean} - Whether the game has been forfeited
 * @property {GameId} - ID of the game. <br/>IDs are video game-specific, ie. a Valorant game and an Overwatch game can have the same game ID.
 * @property {number} - Duration of the game in seconds. <br/>`null` when the game status is not `finished`
 * @property {number}
 * @property {number} - Game position in the match. Starts at 1
 * @property {GameStatus} - The game status
 * @property {GameWinner}
 * @property {GameWinnerType1}
 */
export type Game = z.infer<typeof game>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const gameResponse = z
  .object({
    begin_at: z.string().min(1),
    complete: z.boolean(),
    detailed_stats: z.boolean(),
    end_at: z.string().min(1),
    finished: z.boolean(),
    forfeit: z.boolean(),
    id: gameIdResponse,
    length: z.number().gte(0),
    match_id: z.number().gte(1),
    position: z.number().gte(1),
    status: gameStatus,
    winner: gameWinnerResponse,
    winner_type: gameWinnerType1,
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
    position: data['position'],
    status: data['status'],
    winner: data['winner'],
    winnerType: data['winner_type'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const gameRequest = z
  .object({
    beginAt: z.string().nullish(),
    complete: z.boolean().nullish(),
    detailedStats: z.boolean().nullish(),
    endAt: z.string().nullish(),
    finished: z.boolean().nullish(),
    forfeit: z.boolean().nullish(),
    id: gameIdRequest.nullish(),
    length: z.number().nullish(),
    matchId: z.number().nullish(),
    position: z.number().nullish(),
    status: gameStatus.nullish(),
    winner: gameWinnerRequest.nullish(),
    winnerType: gameWinnerType1.nullish(),
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
    position: data['position'],
    status: data['status'],
    winner: data['winner'],
    winner_type: data['winnerType'],
  }));
