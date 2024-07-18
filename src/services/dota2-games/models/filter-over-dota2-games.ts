import { z } from 'zod';
import { gameStatus } from '../../common/game-status';
import { opponentType } from '../../common/opponent-type';

/**
 * The shape of the model inside the application code - what the users use
 */
export const filterOverDota2Games: any = z.lazy(() => {
  return z.object({
    beginAt: z.array(z.string()).min(1).optional(),
    complete: z.boolean().optional(),
    detailedStats: z.boolean().optional(),
    endAt: z.array(z.string()).min(1).optional(),
    finished: z.boolean().optional(),
    firstBlood: z.array(z.number()).min(1).optional(),
    forfeit: z.boolean().optional(),
    id: z.array(z.number()).min(1).optional(),
    length: z.array(z.number()).min(1).optional(),
    matchId: z.array(z.number()).min(1).optional(),
    position: z.array(z.number()).min(1).optional(),
    status: z.array(gameStatus).min(1).optional(),
    winnerType: z.array(opponentType).min(1).optional(),
  });
});

/**
 *
 * @typedef  {FilterOverDota2Games} filterOverDota2Games
 * @property {string[]}
 * @property {boolean} - Whether When `true`, the game statistics are complete and will not be updated again
 * @property {boolean} - Whether historical data is available for the game
 * @property {string[]}
 * @property {boolean} - Whether the game is finished
 * @property {number[]}
 * @property {boolean} - Whether the game has been forfeited
 * @property {number[]}
 * @property {number[]}
 * @property {number[]}
 * @property {number[]}
 * @property {GameStatus[]}
 * @property {OpponentType[]}
 */
export type FilterOverDota2Games = z.infer<typeof filterOverDota2Games>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverDota2GamesResponse: any = z.lazy(() => {
  return z
    .object({
      begin_at: z.array(z.string()).min(1).optional(),
      complete: z.boolean().optional(),
      detailed_stats: z.boolean().optional(),
      end_at: z.array(z.string()).min(1).optional(),
      finished: z.boolean().optional(),
      first_blood: z.array(z.number()).min(1).optional(),
      forfeit: z.boolean().optional(),
      id: z.array(z.number()).min(1).optional(),
      length: z.array(z.number()).min(1).optional(),
      match_id: z.array(z.number()).min(1).optional(),
      position: z.array(z.number()).min(1).optional(),
      status: z.array(gameStatus).min(1).optional(),
      winner_type: z.array(opponentType).min(1).optional(),
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
      position: data['position'],
      status: data['status'],
      winnerType: data['winner_type'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverDota2GamesRequest: any = z.lazy(() => {
  return z
    .object({
      beginAt: z.array(z.string()).nullish(),
      complete: z.boolean().nullish(),
      detailedStats: z.boolean().nullish(),
      endAt: z.array(z.string()).nullish(),
      finished: z.boolean().nullish(),
      firstBlood: z.array(z.number()).nullish(),
      forfeit: z.boolean().nullish(),
      id: z.array(z.number()).nullish(),
      length: z.array(z.number()).nullish(),
      matchId: z.array(z.number()).nullish(),
      position: z.array(z.number()).nullish(),
      status: z.array(gameStatus).nullish(),
      winnerType: z.array(opponentType).nullish(),
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
      position: data['position'],
      status: data['status'],
      winner_type: data['winnerType'],
    }));
});
