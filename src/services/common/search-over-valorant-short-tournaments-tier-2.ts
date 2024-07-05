import { z } from 'zod';

export const searchOverValorantShortTournamentsTier2 = z.enum([
  'a',
  'b',
  'c',
  'd',
  's',
  'unranked',
]);

export type SearchOverValorantShortTournamentsTier2 = z.infer<
  typeof searchOverValorantShortTournamentsTier2
>;
