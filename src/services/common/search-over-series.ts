import { z } from 'zod';
import { opponentType } from './opponent-type';

/**
 * The shape of the model inside the application code - what the users use
 */
export const searchOverSeries: any = z.lazy(() => {
  return z.object({
    name: z.string().optional(),
    season: z.string().optional(),
    slug: z
      .string()
      .min(1)
      .regex(/^[a-z0-9_-]+$/)
      .optional(),
    winnerType: opponentType.optional(),
  });
});

/**
 *
 * @typedef  {SearchOverSeries} searchOverSeries
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {OpponentType}
 */
export type SearchOverSeries = z.infer<typeof searchOverSeries>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const searchOverSeriesResponse: any = z.lazy(() => {
  return z
    .object({
      name: z.string().optional(),
      season: z.string().optional(),
      slug: z
        .string()
        .min(1)
        .regex(/^[a-z0-9_-]+$/)
        .optional(),
      winner_type: opponentType.optional(),
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
export const searchOverSeriesRequest: any = z.lazy(() => {
  return z
    .object({
      name: z.string().nullish(),
      season: z.string().nullish(),
      slug: z.string().nullish(),
      winnerType: opponentType.nullish(),
    })
    .transform((data) => ({
      name: data['name'],
      season: data['season'],
      slug: data['slug'],
      winner_type: data['winnerType'],
    }));
});
