import { z } from 'zod';

export const matchType = z.enum([
  'all_games_played',
  'best_of',
  'custom',
  'first_to',
  'ow_best_of',
  'red_bull_home_ground',
]);

export type MatchType = z.infer<typeof matchType>;
