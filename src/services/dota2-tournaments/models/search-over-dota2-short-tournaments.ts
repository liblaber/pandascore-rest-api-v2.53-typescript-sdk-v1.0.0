import { z } from 'zod';
import { searchOverValorantShortTournamentsTier2 } from '../../common/search-over-valorant-short-tournaments-tier-2';
import { opponentType } from '../../common/opponent-type';

/**
 * The shape of the model inside the application code - what the users use
 */
export const searchOverDota2ShortTournaments: any = z.lazy(() => {
  return z.object({
    name: z.string().optional(),
    prizepool: z.string().optional(),
    slug: z
      .string()
      .min(1)
      .regex(/^[a-z0-9_-]+$/)
      .optional(),
    tier: searchOverValorantShortTournamentsTier2.optional(),
    winnerType: opponentType.optional(),
  });
});

/**
 *
 * @typedef  {SearchOverDota2ShortTournaments} searchOverDota2ShortTournaments
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {SearchOverValorantShortTournamentsTier2} - The tier of the tournament, ranging from 'S' to 'Unranked'. Ranking 'S' > 'A' > 'B' > 'C' > 'D' > 'Unranked'
 * @property {OpponentType}
 */
export type SearchOverDota2ShortTournaments = z.infer<typeof searchOverDota2ShortTournaments>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const searchOverDota2ShortTournamentsResponse: any = z.lazy(() => {
  return z
    .object({
      name: z.string().optional(),
      prizepool: z.string().optional(),
      slug: z
        .string()
        .min(1)
        .regex(/^[a-z0-9_-]+$/)
        .optional(),
      tier: searchOverValorantShortTournamentsTier2.optional(),
      winner_type: opponentType.optional(),
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
export const searchOverDota2ShortTournamentsRequest: any = z.lazy(() => {
  return z
    .object({
      name: z.string().nullish(),
      prizepool: z.string().nullish(),
      slug: z.string().nullish(),
      tier: searchOverValorantShortTournamentsTier2.nullish(),
      winnerType: opponentType.nullish(),
    })
    .transform((data) => ({
      name: data['name'],
      prizepool: data['prizepool'],
      slug: data['slug'],
      tier: data['tier'],
      winner_type: data['winnerType'],
    }));
});