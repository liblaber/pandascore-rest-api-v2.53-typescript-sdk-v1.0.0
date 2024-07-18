import { z } from 'zod';
import { baseValorantGameMap, baseValorantGameMapRequest, baseValorantGameMapResponse } from './base-valorant-game-map';
import {
  valorantGameRound,
  valorantGameRoundRequest,
  valorantGameRoundResponse,
} from '../../common/valorant-game-round';
import { gameStatus } from '../../common/game-status';
import { valorantGameTeam, valorantGameTeamRequest, valorantGameTeamResponse } from '../../common/valorant-game-team';
import { gameWinner, gameWinnerRequest, gameWinnerResponse } from '../../common/game-winner';

/**
 * The shape of the model inside the application code - what the users use
 */
export const baseValorantGame: any = z.lazy(() => {
  return z.object({
    beginAt: z.string().min(1).nullable(),
    complete: z.boolean(),
    detailedStats: z.boolean(),
    endAt: z.string().min(1).nullable(),
    finished: z.boolean(),
    forfeit: z.boolean(),
    id: z.number().gte(1),
    length: z.number().gte(0).nullable(),
    map: baseValorantGameMap.nullable(),
    matchId: z.number().gte(1),
    position: z.number().gte(1),
    rounds: z.array(valorantGameRound).nullable(),
    status: gameStatus,
    teams: z.array(valorantGameTeam).nullable(),
    winner: gameWinner,
  });
});

/**
 * A game
 * @typedef  {BaseValorantGame} baseValorantGame - A game - A game
 * @property {string} - The game begin time, UTC. <br/>`null` when the game status is `not_started`
 * @property {boolean} - Whether When `true`, the game statistics are complete and will not be updated again
 * @property {boolean} - Whether historical data is available for the game
 * @property {string} - The game end time, UTC. <br/>`null` when the game status is not `finished`
 * @property {boolean} - Whether the game is finished
 * @property {boolean} - Whether the game has been forfeited
 * @property {number}
 * @property {number} - Duration of the game in seconds. <br/>`null` when the game status is not `finished`
 * @property {BaseValorantGameMap} - An object that represents a Valorant map
 * @property {number}
 * @property {number} - Game position in the match. Starts at 1
 * @property {ValorantGameRound[]} - Summary of rounds
 * @property {GameStatus} - The game status
 * @property {ValorantGameTeam[]}
 * @property {GameWinner}
 */
export type BaseValorantGame = z.infer<typeof baseValorantGame>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const baseValorantGameResponse: any = z.lazy(() => {
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
      map: baseValorantGameMapResponse.nullable(),
      match_id: z.number().gte(1),
      position: z.number().gte(1),
      rounds: z.array(valorantGameRoundResponse).nullable(),
      status: gameStatus,
      teams: z.array(valorantGameTeamResponse).nullable(),
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
      matchId: data['match_id'],
      position: data['position'],
      rounds: data['rounds'],
      status: data['status'],
      teams: data['teams'],
      winner: data['winner'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const baseValorantGameRequest: any = z.lazy(() => {
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
      map: baseValorantGameMapRequest.nullish(),
      matchId: z.number().nullish(),
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
      match_id: data['matchId'],
      position: data['position'],
      rounds: data['rounds'],
      status: data['status'],
      teams: data['teams'],
      winner: data['winner'],
    }));
});