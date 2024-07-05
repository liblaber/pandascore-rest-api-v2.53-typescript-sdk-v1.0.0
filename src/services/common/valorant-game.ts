import { z } from 'zod';
import {
  valorantGameMap,
  valorantGameMapRequest,
  valorantGameMapResponse,
} from './valorant-game-map';
import { fullGameMatch, fullGameMatchRequest, fullGameMatchResponse } from './full-game-match';
import {
  valorantGameRound,
  valorantGameRoundRequest,
  valorantGameRoundResponse,
} from './valorant-game-round';
import { gameStatus } from './game-status';
import {
  valorantGameTeam,
  valorantGameTeamRequest,
  valorantGameTeamResponse,
} from './valorant-game-team';
import { gameWinner, gameWinnerRequest, gameWinnerResponse } from './game-winner';

/**
 * The shape of the model inside the application code - what the users use
 */
export const valorantGame = z.object({
  beginAt: z.string().min(1),
  complete: z.boolean(),
  detailedStats: z.boolean(),
  endAt: z.string().min(1),
  finished: z.boolean(),
  forfeit: z.boolean(),
  id: z.number().gte(1),
  length: z.number().gte(0),
  map: valorantGameMap,
  match: fullGameMatch,
  position: z.number().gte(1),
  rounds: z.array(valorantGameRound),
  status: gameStatus,
  teams: z.array(valorantGameTeam),
  winner: gameWinner,
});

/**
 *
 * @typedef  {ValorantGame} valorantGame
 * @property {string} - The game begin time, UTC. <br/>`null` when the game status is `not_started`
 * @property {boolean} - Whether When `true`, the game statistics are complete and will not be updated again
 * @property {boolean} - Whether historical data is available for the game
 * @property {string} - The game end time, UTC. <br/>`null` when the game status is not `finished`
 * @property {boolean} - Whether the game is finished
 * @property {boolean} - Whether the game has been forfeited
 * @property {number}
 * @property {number} - Duration of the game in seconds. <br/>`null` when the game status is not `finished`
 * @property {ValorantGameMap} - An object that represents a Valorant map
 * @property {FullGameMatch} - A match
 * @property {number} - Game position in the match. Starts at 1
 * @property {ValorantGameRound[]} - Summary of rounds
 * @property {GameStatus} - The game status
 * @property {ValorantGameTeam[]}
 * @property {GameWinner}
 */
export type ValorantGame = z.infer<typeof valorantGame>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const valorantGameResponse = z
  .object({
    begin_at: z.string().min(1),
    complete: z.boolean(),
    detailed_stats: z.boolean(),
    end_at: z.string().min(1),
    finished: z.boolean(),
    forfeit: z.boolean(),
    id: z.number().gte(1),
    length: z.number().gte(0),
    map: valorantGameMapResponse,
    match: fullGameMatchResponse,
    position: z.number().gte(1),
    rounds: z.array(valorantGameRoundResponse),
    status: gameStatus,
    teams: z.array(valorantGameTeamResponse),
    winner: gameWinnerResponse,
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
    position: data['position'],
    rounds: data['rounds'],
    status: data['status'],
    teams: data['teams'],
    winner: data['winner'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const valorantGameRequest = z
  .object({
    beginAt: z.string().nullish(),
    complete: z.boolean().nullish(),
    detailedStats: z.boolean().nullish(),
    endAt: z.string().nullish(),
    finished: z.boolean().nullish(),
    forfeit: z.boolean().nullish(),
    id: z.number().nullish(),
    length: z.number().nullish(),
    map: valorantGameMapRequest.nullish(),
    match: fullGameMatchRequest.nullish(),
    position: z.number().nullish(),
    rounds: z.array(valorantGameRoundRequest).nullish(),
    status: gameStatus.nullish(),
    teams: z.array(valorantGameTeamRequest).nullish(),
    winner: gameWinnerRequest.nullish(),
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
    position: data['position'],
    rounds: data['rounds'],
    status: data['status'],
    teams: data['teams'],
    winner: data['winner'],
  }));
