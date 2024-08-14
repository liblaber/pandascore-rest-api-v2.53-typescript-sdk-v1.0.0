// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const rangeOverValorantGames = z.lazy(() => {
  return z.object({
    beginAt: z.array(z.string()).min(2).max(2).optional(),
    complete: z.array(z.boolean()).min(2).max(2).optional(),
    detailedStats: z.array(z.boolean()).min(2).max(2).optional(),
    endAt: z.array(z.string()).min(2).max(2).optional(),
    finished: z.array(z.boolean()).min(2).max(2).optional(),
    forfeit: z.array(z.boolean()).min(2).max(2).optional(),
    id: z.array(z.number()).min(2).max(2).optional(),
    length: z.array(z.number()).min(2).max(2).optional(),
    position: z.array(z.number()).min(2).max(2).optional(),
    status: z.array(z.string()).min(2).max(2).optional(),
  });
});

/**
 *
 * @typedef  {RangeOverValorantGames} rangeOverValorantGames
 * @property {string[]}
 * @property {boolean[]}
 * @property {boolean[]}
 * @property {string[]}
 * @property {boolean[]}
 * @property {boolean[]}
 * @property {number[]}
 * @property {number[]}
 * @property {number[]}
 * @property {GameStatus[]}
 */
export type RangeOverValorantGames = z.infer<typeof rangeOverValorantGames>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const rangeOverValorantGamesResponse = z.lazy(() => {
  return z
    .object({
      begin_at: z.array(z.string()).min(2).max(2).optional(),
      complete: z.array(z.boolean()).min(2).max(2).optional(),
      detailed_stats: z.array(z.boolean()).min(2).max(2).optional(),
      end_at: z.array(z.string()).min(2).max(2).optional(),
      finished: z.array(z.boolean()).min(2).max(2).optional(),
      forfeit: z.array(z.boolean()).min(2).max(2).optional(),
      id: z.array(z.number()).min(2).max(2).optional(),
      length: z.array(z.number()).min(2).max(2).optional(),
      position: z.array(z.number()).min(2).max(2).optional(),
      status: z.array(z.string()).min(2).max(2).optional(),
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
      position: data['position'],
      status: data['status'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const rangeOverValorantGamesRequest = z.lazy(() => {
  return z
    .object({
      beginAt: z.array(z.string()).nullish(),
      complete: z.array(z.boolean()).nullish(),
      detailedStats: z.array(z.boolean()).nullish(),
      endAt: z.array(z.string()).nullish(),
      finished: z.array(z.boolean()).nullish(),
      forfeit: z.array(z.boolean()).nullish(),
      id: z.array(z.number()).nullish(),
      length: z.array(z.number()).nullish(),
      position: z.array(z.number()).nullish(),
      status: z.array(z.string()).nullish(),
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
      position: data['position'],
      status: data['status'],
    }));
});
