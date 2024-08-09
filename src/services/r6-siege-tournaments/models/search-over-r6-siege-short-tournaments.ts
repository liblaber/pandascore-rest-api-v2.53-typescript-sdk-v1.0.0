// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const searchOverR6SiegeShortTournaments = z.lazy(() => {
  return z.object({
    name: z.string().optional(),
    prizepool: z.string().optional(),
    slug: z
      .string()
      .min(1)
      .regex(/^[a-z0-9_-]+$/)
      .optional(),
    tier: z.string().optional(),
    winnerType: z.string().optional(),
  });
});

/**
 *
 * @typedef  {SearchOverR6SiegeShortTournaments} searchOverR6SiegeShortTournaments
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {SearchOverValorantShortTournamentsTier2} - The tier of the tournament, ranging from 'S' to 'Unranked'. Ranking 'S' > 'A' > 'B' > 'C' > 'D' > 'Unranked'
 * @property {OpponentType}
 */
export type SearchOverR6SiegeShortTournaments = z.infer<typeof searchOverR6SiegeShortTournaments>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const searchOverR6SiegeShortTournamentsResponse = z.lazy(() => {
  return z
    .object({
      name: z.string().optional(),
      prizepool: z.string().optional(),
      slug: z
        .string()
        .min(1)
        .regex(/^[a-z0-9_-]+$/)
        .optional(),
      tier: z.string().optional(),
      winner_type: z.string().optional(),
    })
    .transform((data) => ({
      name: data['name'],
      prizepool: data['prizepool'],
      slug: data['slug'],
      tier: data['tier'],
      winnerType: data['winner_type'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const searchOverR6SiegeShortTournamentsRequest = z.lazy(() => {
  return z
    .object({
      name: z.string().nullish(),
      prizepool: z.string().nullish(),
      slug: z.string().nullish(),
      tier: z.string().nullish(),
      winnerType: z.string().nullish(),
    })
    .transform((data) => ({
      name: data['name'],
      prizepool: data['prizepool'],
      slug: data['slug'],
      tier: data['tier'],
      winner_type: data['winnerType'],
    }));
});
