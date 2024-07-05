import { z } from 'zod';
import { owGameMap, owGameMapRequest, owGameMapResponse } from './ow-game-map';
import { fullGameMatch, fullGameMatchRequest, fullGameMatchResponse } from './full-game-match';
import { owGameRound, owGameRoundRequest, owGameRoundResponse } from './ow-game-round';
import { gameStatus } from './game-status';
import { gameWinner, gameWinnerRequest, gameWinnerResponse } from './game-winner';
import { owGameWinnerType } from './ow-game-winner-type';

/**
 * The shape of the model inside the application code - what the users use
 */
export const owGame = z.object({
  beginAt: z.string().min(1),
  complete: z.boolean(),
  detailedStats: z.boolean(),
  endAt: z.string().min(1),
  finished: z.boolean(),
  forfeit: z.boolean(),
  id: z.number().gte(1),
  length: z.number().gte(0),
  map: owGameMap,
  match: fullGameMatch,
  matchId: z.number().gte(1),
  position: z.number().gte(1),
  rounds: z.array(owGameRound),
  status: gameStatus,
  winner: gameWinner,
  winnerType: owGameWinnerType,
});

/**
 * A game
 * @typedef  {OwGame} owGame - A game - A game
 * @property {string} - The game begin time, UTC. <br/>`null` when the game status is `not_started`
 * @property {boolean} - Whether When `true`, the game statistics are complete and will not be updated again
 * @property {boolean} - Whether historical data is available for the game
 * @property {string} - The game end time, UTC. <br/>`null` when the game status is not `finished`
 * @property {boolean} - Whether the game is finished
 * @property {boolean} - Whether the game has been forfeited
 * @property {number}
 * @property {number} - Duration of the game in seconds. <br/>`null` when the game status is not `finished`
 * @property {OwGameMap}
 * @property {FullGameMatch} - A match
 * @property {number}
 * @property {number} - Game position in the match. Starts at 1
 * @property {OwGameRound[]}
 * @property {GameStatus} - The game status
 * @property {GameWinner}
 * @property {OwGameWinnerType}
 */
export type OwGame = z.infer<typeof owGame>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const owGameResponse = z
  .object({
    begin_at: z.string().min(1),
    complete: z.boolean(),
    detailed_stats: z.boolean(),
    end_at: z.string().min(1),
    finished: z.boolean(),
    forfeit: z.boolean(),
    id: z.number().gte(1),
    length: z.number().gte(0),
    map: owGameMapResponse,
    match: fullGameMatchResponse,
    match_id: z.number().gte(1),
    position: z.number().gte(1),
    rounds: z.array(owGameRoundResponse),
    status: gameStatus,
    winner: gameWinnerResponse,
    winner_type: owGameWinnerType,
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
    map: data['map'],
    match: data['match'],
    matchId: data['match_id'],
    position: data['position'],
    rounds: data['rounds'],
    status: data['status'],
    winner: data['winner'],
    winnerType: data['winner_type'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const owGameRequest = z
  .object({
    beginAt: z.string().nullish(),
    complete: z.boolean().nullish(),
    detailedStats: z.boolean().nullish(),
    endAt: z.string().nullish(),
    finished: z.boolean().nullish(),
    forfeit: z.boolean().nullish(),
    id: z.number().nullish(),
    length: z.number().nullish(),
    map: owGameMapRequest.nullish(),
    match: fullGameMatchRequest.nullish(),
    matchId: z.number().nullish(),
    position: z.number().nullish(),
    rounds: z.array(owGameRoundRequest).nullish(),
    status: gameStatus.nullish(),
    winner: gameWinnerRequest.nullish(),
    winnerType: owGameWinnerType.nullish(),
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
    map: data['map'],
    match: data['match'],
    match_id: data['matchId'],
    position: data['position'],
    rounds: data['rounds'],
    status: data['status'],
    winner: data['winner'],
    winner_type: data['winnerType'],
  }));
