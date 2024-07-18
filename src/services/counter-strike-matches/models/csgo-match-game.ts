import { z } from 'zod';
import { csgoMatchGamePlayer, csgoMatchGamePlayerRequest, csgoMatchGamePlayerResponse } from './csgo-match-game-player';
import { csgoRoundsScore, csgoRoundsScoreRequest, csgoRoundsScoreResponse } from '../../common/csgo-rounds-score';
import { gameStatus } from '../../common/game-status';
import { gameWinner, gameWinnerRequest, gameWinnerResponse } from '../../common/game-winner';
import { csgoMatchGameWinnerType } from './csgo-match-game-winner-type';

/**
 * The shape of the model inside the application code - what the users use
 */
export const csgoMatchGame: any = z.lazy(() => {
  return z.object({
    beginAt: z.string().min(1).nullable(),
    complete: z.boolean(),
    detailedStats: z.boolean(),
    endAt: z.string().min(1).nullable(),
    finished: z.boolean(),
    forfeit: z.boolean(),
    id: z.number().gte(1),
    length: z.number().gte(0).nullable(),
    matchId: z.number().gte(1),
    players: z.array(csgoMatchGamePlayer).nullable(),
    position: z.number().gte(1),
    roundsScore: z.array(csgoRoundsScore),
    status: gameStatus,
    winner: gameWinner,
    winnerType: csgoMatchGameWinnerType.nullable(),
  });
});

/**
 *
 * @typedef  {CsgoMatchGame} csgoMatchGame
 * @property {string} - The game begin time, UTC. <br/>`null` when the game status is `not_started`
 * @property {boolean} - Whether When `true`, the game statistics are complete and will not be updated again
 * @property {boolean} - Whether historical data is available for the game
 * @property {string} - The game end time, UTC. <br/>`null` when the game status is not `finished`
 * @property {boolean} - Whether the game is finished
 * @property {boolean} - Whether the game has been forfeited
 * @property {number} - Counter-Strike game ID
 * @property {number} - Duration of the game in seconds. <br/>`null` when the game status is not `finished`
 * @property {number}
 * @property {CsgoMatchGamePlayer[]}
 * @property {number} - Game position in the match. Starts at 1
 * @property {CsgoRoundsScore[]}
 * @property {GameStatus} - The game status
 * @property {GameWinner}
 * @property {CsgoMatchGameWinnerType}
 */
export type CsgoMatchGame = z.infer<typeof csgoMatchGame>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const csgoMatchGameResponse: any = z.lazy(() => {
  return z
    .object({
      begin_at: z.string().min(1).nullable(),
      complete: z.boolean(),
      detailed_stats: z.boolean(),
      end_at: z.string().min(1).nullable(),
      finished: z.boolean(),
      forfeit: z.boolean(),
      id: z.number().gte(1),
      length: z.number().gte(0).nullable(),
      match_id: z.number().gte(1),
      players: z.array(csgoMatchGamePlayerResponse).nullable(),
      position: z.number().gte(1),
      rounds_score: z.array(csgoRoundsScoreResponse),
      status: gameStatus,
      winner: gameWinnerResponse,
      winner_type: csgoMatchGameWinnerType.nullable(),
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
      roundsScore: data['rounds_score'],
      status: data['status'],
      winner: data['winner'],
      winnerType: data['winner_type'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const csgoMatchGameRequest: any = z.lazy(() => {
  return z
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
      players: z.array(csgoMatchGamePlayerRequest).nullish(),
      position: z.number().nullish(),
      roundsScore: z.array(csgoRoundsScoreRequest).nullish(),
      status: gameStatus.nullish(),
      winner: gameWinnerRequest.nullish(),
      winnerType: csgoMatchGameWinnerType.nullish(),
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
      rounds_score: data['roundsScore'],
      status: data['status'],
      winner: data['winner'],
      winner_type: data['winnerType'],
    }));
});