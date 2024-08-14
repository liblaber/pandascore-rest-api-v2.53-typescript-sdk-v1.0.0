// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import { opponentId, opponentIdRequest, opponentIdResponse } from '../../common/opponent-id';

/**
 * The shape of the model inside the application code - what the users use
 */
export const rangeOverCsgoSeries = z.lazy(() => {
  return z.object({
    beginAt: z.array(z.string()).min(2).max(2).optional(),
    endAt: z.array(z.string()).min(2).max(2).optional(),
    id: z.array(z.number()).min(2).max(2).optional(),
    leagueId: z.array(z.number()).min(2).max(2).optional(),
    modifiedAt: z.array(z.string()).min(2).max(2).optional(),
    name: z.array(z.string()).min(2).max(2).optional(),
    season: z.array(z.string()).min(2).max(2).optional(),
    slug: z.array(z.string()).min(2).max(2).optional(),
    winnerId: z.array(opponentId).min(2).max(2).optional(),
    winnerType: z.array(z.string()).min(2).max(2).optional(),
    year: z.array(z.number()).min(2).max(2).optional(),
  });
});

/**
 *
 * @typedef  {RangeOverCsgoSeries} rangeOverCsgoSeries
 * @property {string[]}
 * @property {string[]}
 * @property {number[]}
 * @property {number[]}
 * @property {string[]}
 * @property {string[]}
 * @property {string[]}
 * @property {string[]}
 * @property {OpponentId[]}
 * @property {OpponentType[]}
 * @property {number[]}
 */
export type RangeOverCsgoSeries = z.infer<typeof rangeOverCsgoSeries>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const rangeOverCsgoSeriesResponse = z.lazy(() => {
  return z
    .object({
      begin_at: z.array(z.string()).min(2).max(2).optional(),
      end_at: z.array(z.string()).min(2).max(2).optional(),
      id: z.array(z.number()).min(2).max(2).optional(),
      league_id: z.array(z.number()).min(2).max(2).optional(),
      modified_at: z.array(z.string()).min(2).max(2).optional(),
      name: z.array(z.string()).min(2).max(2).optional(),
      season: z.array(z.string()).min(2).max(2).optional(),
      slug: z.array(z.string()).min(2).max(2).optional(),
      winner_id: z.array(opponentIdResponse).min(2).max(2).optional(),
      winner_type: z.array(z.string()).min(2).max(2).optional(),
      year: z.array(z.number()).min(2).max(2).optional(),
    })
    .transform((data) => ({
      beginAt: data['begin_at'],
      endAt: data['end_at'],
      id: data['id'],
      leagueId: data['league_id'],
      modifiedAt: data['modified_at'],
      name: data['name'],
      season: data['season'],
      slug: data['slug'],
      winnerId: data['winner_id'],
      winnerType: data['winner_type'],
      year: data['year'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const rangeOverCsgoSeriesRequest = z.lazy(() => {
  return z
    .object({
      beginAt: z.array(z.string()).nullish(),
      endAt: z.array(z.string()).nullish(),
      id: z.array(z.number()).nullish(),
      leagueId: z.array(z.number()).nullish(),
      modifiedAt: z.array(z.string()).nullish(),
      name: z.array(z.string()).nullish(),
      season: z.array(z.string()).nullish(),
      slug: z.array(z.string()).nullish(),
      winnerId: z.array(opponentIdRequest).nullish(),
      winnerType: z.array(z.string()).nullish(),
      year: z.array(z.number()).nullish(),
    })
    .transform((data) => ({
      begin_at: data['beginAt'],
      end_at: data['endAt'],
      id: data['id'],
      league_id: data['leagueId'],
      modified_at: data['modifiedAt'],
      name: data['name'],
      season: data['season'],
      slug: data['slug'],
      winner_id: data['winnerId'],
      winner_type: data['winnerType'],
      year: data['year'],
    }));
});
