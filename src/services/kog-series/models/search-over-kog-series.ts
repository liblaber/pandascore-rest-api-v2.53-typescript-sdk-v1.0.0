// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const searchOverKogSeries = z.lazy(() => {
  return z.object({
    name: z.string().optional(),
    season: z.string().optional(),
    slug: z
      .string()
      .min(1)
      .regex(/^[a-z0-9_-]+$/)
      .optional(),
    winnerType: z.string().optional(),
  });
});

/**
 *
 * @typedef  {SearchOverKogSeries} searchOverKogSeries
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {OpponentType}
 */
export type SearchOverKogSeries = z.infer<typeof searchOverKogSeries>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const searchOverKogSeriesResponse = z.lazy(() => {
  return z
    .object({
      name: z.string().optional(),
      season: z.string().optional(),
      slug: z
        .string()
        .min(1)
        .regex(/^[a-z0-9_-]+$/)
        .optional(),
      winner_type: z.string().optional(),
    })
    .transform((data) => ({
      name: data['name'],
      season: data['season'],
      slug: data['slug'],
      winnerType: data['winner_type'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const searchOverKogSeriesRequest = z.lazy(() => {
  return z
    .object({
      name: z.string().nullish(),
      season: z.string().nullish(),
      slug: z.string().nullish(),
      winnerType: z.string().nullish(),
    })
    .transform((data) => ({
      name: data['name'],
      season: data['season'],
      slug: data['slug'],
      winner_type: data['winnerType'],
    }));
});
