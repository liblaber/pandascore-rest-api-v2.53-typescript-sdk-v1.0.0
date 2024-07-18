import { z } from 'zod';
import { dota2GameMatch, dota2GameMatchRequest, dota2GameMatchResponse } from './dota2-game-match';
import {
  dota2FullGamePlayer,
  dota2FullGamePlayerRequest,
  dota2FullGamePlayerResponse,
} from '../../common/dota2-full-game-player';
import { gameStatus } from '../../common/game-status';
import { dota2GameTeam, dota2GameTeamRequest, dota2GameTeamResponse } from '../../common/dota2-game-team';
import { gameWinner, gameWinnerRequest, gameWinnerResponse } from '../../common/game-winner';
import { dota2GameWinnerType } from './dota2-game-winner-type';

/**
 * The shape of the model inside the application code - what the users use
 */
export const dota2Game: any = z.lazy(() => {
  return z.object({
    beginAt: z.string().min(1).nullable(),
    complete: z.boolean(),
    detailedStats: z.boolean(),
    endAt: z.string().min(1).nullable(),
    finished: z.boolean(),
    firstBlood: z.number().gte(0).nullable(),
    forfeit: z.boolean(),
    id: z.number().gte(1),
    length: z.number().gte(0).nullable(),
    match: dota2GameMatch,
    matchId: z.number().gte(1),
    players: z.array(dota2FullGamePlayer).nullable(),
    position: z.number().gte(1),
    status: gameStatus,
    teams: z.array(dota2GameTeam).nullable(),
    winner: gameWinner,
    winnerType: dota2GameWinnerType.nullable(),
  });
});

/**
 *
 * @typedef  {Dota2Game} dota2Game
 * @property {string} - The game begin time, UTC. <br/>`null` when the game status is `not_started`
 * @property {boolean} - Whether When `true`, the game statistics are complete and will not be updated again
 * @property {boolean} - Whether historical data is available for the game
 * @property {string} - The game end time, UTC. <br/>`null` when the game status is not `finished`
 * @property {boolean} - Whether the game is finished
 * @property {number}
 * @property {boolean} - Whether the game has been forfeited
 * @property {number}
 * @property {number} - Duration of the game in seconds. <br/>`null` when the game status is not `finished`
 * @property {Dota2GameMatch}
 * @property {number}
 * @property {Dota2FullGamePlayer[]}
 * @property {number} - Game position in the match. Starts at 1
 * @property {GameStatus} - The game status
 * @property {Dota2GameTeam[]}
 * @property {GameWinner}
 * @property {Dota2GameWinnerType}
 */
export type Dota2Game = z.infer<typeof dota2Game>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const dota2GameResponse: any = z.lazy(() => {
  return z
    .object({
      begin_at: z.string().min(1).nullable(),
      complete: z.boolean(),
      detailed_stats: z.boolean(),
      end_at: z.string().min(1).nullable(),
      finished: z.boolean(),
      first_blood: z.number().gte(0).nullable(),
      forfeit: z.boolean(),
      id: z.number().gte(1),
      length: z.number().gte(0).nullable(),
      match: dota2GameMatchResponse,
      match_id: z.number().gte(1),
      players: z.array(dota2FullGamePlayerResponse).nullable(),
      position: z.number().gte(1),
      status: gameStatus,
      teams: z.array(dota2GameTeamResponse).nullable(),
      winner: gameWinnerResponse,
      winner_type: dota2GameWinnerType.nullable(),
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
      match: data['match'],
      matchId: data['match_id'],
      players: data['players'],
      position: data['position'],
      status: data['status'],
      teams: data['teams'],
      winner: data['winner'],
      winnerType: data['winner_type'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const dota2GameRequest: any = z.lazy(() => {
  return z
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
      match: dota2GameMatchRequest.nullish(),
      matchId: z.number().nullish(),
      players: z.array(dota2FullGamePlayerRequest).nullish(),
      position: z.number().nullish(),
      status: gameStatus.nullish(),
      teams: z.array(dota2GameTeamRequest).nullish(),
      winner: gameWinnerRequest.nullish(),
      winnerType: dota2GameWinnerType.nullish(),
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
      match: data['match'],
      match_id: data['matchId'],
      players: data['players'],
      position: data['position'],
      status: data['status'],
      teams: data['teams'],
      winner: data['winner'],
      winner_type: data['winnerType'],
    }));
});
