import { z } from 'zod';
import {
  baseCsgoGameMap,
  baseCsgoGameMapRequest,
  baseCsgoGameMapResponse,
} from './base-csgo-game-map';
import { csgoGamePlayer, csgoGamePlayerRequest, csgoGamePlayerResponse } from './csgo-game-player';
import { csgoRound, csgoRoundRequest, csgoRoundResponse } from './csgo-round';
import {
  csgoRoundsScore,
  csgoRoundsScoreRequest,
  csgoRoundsScoreResponse,
} from './csgo-rounds-score';
import { gameStatus } from './game-status';
import { baseTeam, baseTeamRequest, baseTeamResponse } from './base-team';
import { gameWinner, gameWinnerRequest, gameWinnerResponse } from './game-winner';
import { baseCsgoGameWinnerType } from './base-csgo-game-winner-type';

/**
 * The shape of the model inside the application code - what the users use
 */
export const baseCsgoGame = z.object({
  beginAt: z.string().min(1),
  complete: z.boolean(),
  detailedStats: z.boolean(),
  endAt: z.string().min(1),
  finished: z.boolean(),
  forfeit: z.boolean(),
  id: z.number().gte(1),
  length: z.number().gte(0),
  map: baseCsgoGameMap,
  matchId: z.number().gte(1),
  players: z.array(csgoGamePlayer),
  position: z.number().gte(1),
  rounds: z.array(csgoRound),
  roundsScore: z.array(csgoRoundsScore),
  status: gameStatus,
  teams: z.array(baseTeam),
  winner: gameWinner,
  winnerType: baseCsgoGameWinnerType,
});

/**
 * A game
 * @typedef  {BaseCsgoGame} baseCsgoGame - A game - A game
 * @property {string} - The game begin time, UTC. <br/>`null` when the game status is `not_started`
 * @property {boolean} - Whether When `true`, the game statistics are complete and will not be updated again
 * @property {boolean} - Whether historical data is available for the game
 * @property {string} - The game end time, UTC. <br/>`null` when the game status is not `finished`
 * @property {boolean} - Whether the game is finished
 * @property {boolean} - Whether the game has been forfeited
 * @property {number} - Counter-Strike game ID
 * @property {number} - Duration of the game in seconds. <br/>`null` when the game status is not `finished`
 * @property {BaseCsgoGameMap}
 * @property {number}
 * @property {CsgoGamePlayer[]}
 * @property {number} - Game position in the match. Starts at 1
 * @property {CsgoRound[]}
 * @property {CsgoRoundsScore[]}
 * @property {GameStatus} - The game status
 * @property {BaseTeam[]}
 * @property {GameWinner}
 * @property {BaseCsgoGameWinnerType}
 */
export type BaseCsgoGame = z.infer<typeof baseCsgoGame>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const baseCsgoGameResponse = z
  .object({
    begin_at: z.string().min(1),
    complete: z.boolean(),
    detailed_stats: z.boolean(),
    end_at: z.string().min(1),
    finished: z.boolean(),
    forfeit: z.boolean(),
    id: z.number().gte(1),
    length: z.number().gte(0),
    map: baseCsgoGameMapResponse,
    match_id: z.number().gte(1),
    players: z.array(csgoGamePlayerResponse),
    position: z.number().gte(1),
    rounds: z.array(csgoRoundResponse),
    rounds_score: z.array(csgoRoundsScoreResponse),
    status: gameStatus,
    teams: z.array(baseTeamResponse),
    winner: gameWinnerResponse,
    winner_type: baseCsgoGameWinnerType,
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
    matchId: data['match_id'],
    players: data['players'],
    position: data['position'],
    rounds: data['rounds'],
    roundsScore: data['rounds_score'],
    status: data['status'],
    teams: data['teams'],
    winner: data['winner'],
    winnerType: data['winner_type'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const baseCsgoGameRequest = z
  .object({
    beginAt: z.string().nullish(),
    complete: z.boolean().nullish(),
    detailedStats: z.boolean().nullish(),
    endAt: z.string().nullish(),
    finished: z.boolean().nullish(),
    forfeit: z.boolean().nullish(),
    id: z.number().nullish(),
    length: z.number().nullish(),
    map: baseCsgoGameMapRequest.nullish(),
    matchId: z.number().nullish(),
    players: z.array(csgoGamePlayerRequest).nullish(),
    position: z.number().nullish(),
    rounds: z.array(csgoRoundRequest).nullish(),
    roundsScore: z.array(csgoRoundsScoreRequest).nullish(),
    status: gameStatus.nullish(),
    teams: z.array(baseTeamRequest).nullish(),
    winner: gameWinnerRequest.nullish(),
    winnerType: baseCsgoGameWinnerType.nullish(),
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
    match_id: data['matchId'],
    players: data['players'],
    position: data['position'],
    rounds: data['rounds'],
    rounds_score: data['roundsScore'],
    status: data['status'],
    teams: data['teams'],
    winner: data['winner'],
    winner_type: data['winnerType'],
  }));
