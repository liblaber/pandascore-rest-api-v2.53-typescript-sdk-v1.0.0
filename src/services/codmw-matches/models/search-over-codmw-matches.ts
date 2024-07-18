import { z } from 'zod';
import { matchType } from '../../common/match-type';
import { matchStatus } from '../../common/match-status';
import { matchWinnerType } from '../../common/match-winner-type';

/**
 * The shape of the model inside the application code - what the users use
 */
export const searchOverCodmwMatches: any = z.lazy(() => {
  return z.object({
    matchType: matchType.optional(),
    name: z.string().optional(),
    slug: z
      .string()
      .min(1)
      .regex(/^[ a-zA-Z0-9_-]+$/)
      .optional(),
    status: matchStatus.optional(),
    winnerType: matchWinnerType.optional(),
  });
});

/**
 *
 * @typedef  {SearchOverCodmwMatches} searchOverCodmwMatches
 * @property {MatchType}
 * @property {string}
 * @property {string}
 * @property {MatchStatus}
 * @property {MatchWinnerType}
 */
export type SearchOverCodmwMatches = z.infer<typeof searchOverCodmwMatches>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const searchOverCodmwMatchesResponse: any = z.lazy(() => {
  return z
    .object({
      match_type: matchType.optional(),
      name: z.string().optional(),
      slug: z
        .string()
        .min(1)
        .regex(/^[ a-zA-Z0-9_-]+$/)
        .optional(),
      status: matchStatus.optional(),
      winner_type: matchWinnerType.optional(),
    })
    .transform((data) => ({
      matchType: data['match_type'],
      name: data['name'],
      slug: data['slug'],
      status: data['status'],
      winnerType: data['winner_type'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const searchOverCodmwMatchesRequest: any = z.lazy(() => {
  return z
    .object({
      matchType: matchType.nullish(),
      name: z.string().nullish(),
      slug: z.string().nullish(),
      status: matchStatus.nullish(),
      winnerType: matchWinnerType.nullish(),
    })
    .transform((data) => ({
      match_type: data['matchType'],
      name: data['name'],
      slug: data['slug'],
      status: data['status'],
      winner_type: data['winnerType'],
    }));
});
