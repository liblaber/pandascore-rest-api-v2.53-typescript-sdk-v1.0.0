import { z } from 'zod';
import {
  dota2FullGamePlayer,
  dota2FullGamePlayerRequest,
  dota2FullGamePlayerResponse,
} from './dota2-full-game-player';
import { gameStatus } from './game-status';
import { dota2GameTeam, dota2GameTeamRequest, dota2GameTeamResponse } from './dota2-game-team';
import { gameWinner, gameWinnerRequest, gameWinnerResponse } from './game-winner';
import { baseDota2GameWinnerType } from './base-dota2-game-winner-type';

/**
 * The shape of the model inside the application code - what the users use
 */
export const baseDota2Game = z.object({
  beginAt: z.string().min(1),
  complete: z.boolean(),
  detailedStats: z.boolean(),
  endAt: z.string().min(1),
  finished: z.boolean(),
  firstBlood: z.number().gte(0),
  forfeit: z.boolean(),
  id: z.number().gte(1),
  length: z.number().gte(0),
  matchId: z.number().gte(1),
  players: z.array(dota2FullGamePlayer),
  position: z.number().gte(1),
  status: gameStatus,
  teams: z.array(dota2GameTeam),
  winner: gameWinner,
  winnerType: baseDota2GameWinnerType,
});

/**
 *
 * @typedef  {BaseDota2Game} baseDota2Game
 * @property {string} - The game begin time, UTC. <br/>`null` when the game status is `not_started`
 * @property {boolean} - Whether When `true`, the game statistics are complete and will not be updated again
 * @property {boolean} - Whether historical data is available for the game
 * @property {string} - The game end time, UTC. <br/>`null` when the game status is not `finished`
 * @property {boolean} - Whether the game is finished
 * @property {number}
 * @property {boolean} - Whether the game has been forfeited
 * @property {number}
 * @property {number} - Duration of the game in seconds. <br/>`null` when the game status is not `finished`
 * @property {number}
 * @property {Dota2FullGamePlayer[]}
 * @property {number} - Game position in the match. Starts at 1
 * @property {GameStatus} - The game status
 * @property {Dota2GameTeam[]}
 * @property {GameWinner}
 * @property {BaseDota2GameWinnerType}
 */
export type BaseDota2Game = z.infer<typeof baseDota2Game>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const baseDota2GameResponse = z
  .object({
    begin_at: z.string().min(1),
    complete: z.boolean(),
    detailed_stats: z.boolean(),
    end_at: z.string().min(1),
    finished: z.boolean(),
    first_blood: z.number().gte(0),
    forfeit: z.boolean(),
    id: z.number().gte(1),
    length: z.number().gte(0),
    match_id: z.number().gte(1),
    players: z.array(dota2FullGamePlayerResponse),
    position: z.number().gte(1),
    status: gameStatus,
    teams: z.array(dota2GameTeamResponse),
    winner: gameWinnerResponse,
    winner_type: baseDota2GameWinnerType,
  })
  .transform((data) => ({
    beginAt: data['begin_at'],
    complete: data['complete'],
    detailedStats: data['detailed_stats'],
    endAt: data['end_at'],
    finished: data['finished'],
    firstBlood: data['first_blood'],
    forfeit: data['forfeit'],
    id: data['id'],
    length: data['length'],
    matchId: data['match_id'],
    players: data['players'],
    position: data['position'],
    status: data['status'],
    teams: data['teams'],
    winner: data['winner'],
    winnerType: data['winner_type'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const baseDota2GameRequest = z
  .object({
    beginAt: z.string().nullish(),
    complete: z.boolean().nullish(),
    detailedStats: z.boolean().nullish(),
    endAt: z.string().nullish(),
    finished: z.boolean().nullish(),
    firstBlood: z.number().nullish(),
    forfeit: z.boolean().nullish(),
    id: z.number().nullish(),
    length: z.number().nullish(),
    matchId: z.number().nullish(),
    players: z.array(dota2FullGamePlayerRequest).nullish(),
    position: z.number().nullish(),
    status: gameStatus.nullish(),
    teams: z.array(dota2GameTeamRequest).nullish(),
    winner: gameWinnerRequest.nullish(),
    winnerType: baseDota2GameWinnerType.nullish(),
  })
  .transform((data) => ({
    begin_at: data['beginAt'],
    complete: data['complete'],
    detailed_stats: data['detailedStats'],
    end_at: data['endAt'],
    finished: data['finished'],
    first_blood: data['firstBlood'],
    forfeit: data['forfeit'],
    id: data['id'],
    length: data['length'],
    match_id: data['matchId'],
    players: data['players'],
    position: data['position'],
    status: data['status'],
    teams: data['teams'],
    winner: data['winner'],
    winner_type: data['winnerType'],
  }));
