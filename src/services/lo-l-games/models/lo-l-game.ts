import { z } from 'zod';
import { fullGameMatch, fullGameMatchRequest, fullGameMatchResponse } from '../../common/full-game-match';
import { loLGamePlayer, loLGamePlayerRequest, loLGamePlayerResponse } from '../../common/lo-l-game-player';
import { gameStatus } from '../../common/game-status';
import { loLGameTeam, loLGameTeamRequest, loLGameTeamResponse } from '../../common/lo-l-game-team';
import { gameWinner, gameWinnerRequest, gameWinnerResponse } from '../../common/game-winner';
import { loLGameWinnerType } from './lo-l-game-winner-type';

/**
 * The shape of the model inside the application code - what the users use
 */
export const loLGame: any = z.lazy(() => {
  return z.object({
    beginAt: z.string().min(1).nullable(),
    complete: z.boolean(),
    detailedStats: z.boolean(),
    endAt: z.string().min(1).nullable(),
    finished: z.boolean(),
    forfeit: z.boolean(),
    id: z.number().gte(1),
    length: z.number().gte(0).nullable(),
    match: fullGameMatch,
    matchId: z.number().gte(1),
    players: z.array(loLGamePlayer).nullable(),
    position: z.number().gte(1),
    status: gameStatus,
    teams: z.array(loLGameTeam).nullable(),
    winner: gameWinner,
    winnerType: loLGameWinnerType.nullable(),
  });
});

/**
 *
 * @typedef  {LoLGame} loLGame
 * @property {string} - The game begin time, UTC. <br/>`null` when the game status is `not_started`
 * @property {boolean} - Whether When `true`, the game statistics are complete and will not be updated again
 * @property {boolean} - Whether historical data is available for the game
 * @property {string} - The game end time, UTC. <br/>`null` when the game status is not `finished`
 * @property {boolean} - Whether the game is finished
 * @property {boolean} - Whether the game has been forfeited
 * @property {number} - LoL game ID
 * @property {number} - Duration of the game in seconds. <br/>`null` when the game status is not `finished`
 * @property {FullGameMatch} - A match
 * @property {number}
 * @property {LoLGamePlayer[]}
 * @property {number} - Game position in the match. Starts at 1
 * @property {GameStatus} - The game status
 * @property {LoLGameTeam[]}
 * @property {GameWinner}
 * @property {LoLGameWinnerType}
 */
export type LoLGame = z.infer<typeof loLGame>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const loLGameResponse: any = z.lazy(() => {
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
      match: fullGameMatchResponse,
      match_id: z.number().gte(1),
      players: z.array(loLGamePlayerResponse).nullable(),
      position: z.number().gte(1),
      status: gameStatus,
      teams: z.array(loLGameTeamResponse).nullable(),
      winner: gameWinnerResponse,
      winner_type: loLGameWinnerType.nullable(),
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
export const loLGameRequest: any = z.lazy(() => {
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
      match: fullGameMatchRequest.nullish(),
      matchId: z.number().nullish(),
      players: z.array(loLGamePlayerRequest).nullish(),
      position: z.number().nullish(),
      status: gameStatus.nullish(),
      teams: z.array(loLGameTeamRequest).nullish(),
      winner: gameWinnerRequest.nullish(),
      winnerType: loLGameWinnerType.nullish(),
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
