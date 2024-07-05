import { z } from 'zod';
import { gameStatus } from '../../common/game-status';
import { opponentType } from '../../common/opponent-type';

/**
 * The shape of the model inside the application code - what the users use
 */
export const rangeOverDota2Games = z.object({
  beginAt: z.array(z.string()).min(2).max(2).optional(),
  complete: z.array(z.boolean()).min(2).max(2).optional(),
  detailedStats: z.array(z.boolean()).min(2).max(2).optional(),
  endAt: z.array(z.string()).min(2).max(2).optional(),
  finished: z.array(z.boolean()).min(2).max(2).optional(),
  firstBlood: z.array(z.number()).min(2).max(2).optional(),
  forfeit: z.array(z.boolean()).min(2).max(2).optional(),
  id: z.array(z.number()).min(2).max(2).optional(),
  length: z.array(z.number()).min(2).max(2).optional(),
  matchId: z.array(z.number()).min(2).max(2).optional(),
  position: z.array(z.number()).min(2).max(2).optional(),
  status: z.array(gameStatus).min(2).max(2).optional(),
  winnerType: z.array(opponentType).min(2).max(2).optional(),
});

/**
 *
 * @typedef  {RangeOverDota2Games} rangeOverDota2Games
 * @property {string[]}
 * @property {boolean[]}
 * @property {boolean[]}
 * @property {string[]}
 * @property {boolean[]}
 * @property {number[]}
 * @property {boolean[]}
 * @property {number[]}
 * @property {number[]}
 * @property {number[]}
 * @property {number[]}
 * @property {GameStatus[]}
 * @property {OpponentType[]}
 */
export type RangeOverDota2Games = z.infer<typeof rangeOverDota2Games>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const rangeOverDota2GamesResponse = z
  .object({
    begin_at: z.array(z.string()).min(2).max(2).optional(),
    complete: z.array(z.boolean()).min(2).max(2).optional(),
    detailed_stats: z.array(z.boolean()).min(2).max(2).optional(),
    end_at: z.array(z.string()).min(2).max(2).optional(),
    finished: z.array(z.boolean()).min(2).max(2).optional(),
    first_blood: z.array(z.number()).min(2).max(2).optional(),
    forfeit: z.array(z.boolean()).min(2).max(2).optional(),
    id: z.array(z.number()).min(2).max(2).optional(),
    length: z.array(z.number()).min(2).max(2).optional(),
    match_id: z.array(z.number()).min(2).max(2).optional(),
    position: z.array(z.number()).min(2).max(2).optional(),
    status: z.array(gameStatus).min(2).max(2).optional(),
    winner_type: z.array(opponentType).min(2).max(2).optional(),
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

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const rangeOverDota2GamesRequest = z
  .object({
    beginAt: z.array(z.string()).nullish(),
    complete: z.array(z.boolean()).nullish(),
    detailedStats: z.array(z.boolean()).nullish(),
    endAt: z.array(z.string()).nullish(),
    finished: z.array(z.boolean()).nullish(),
    firstBlood: z.array(z.number()).nullish(),
    forfeit: z.array(z.boolean()).nullish(),
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
