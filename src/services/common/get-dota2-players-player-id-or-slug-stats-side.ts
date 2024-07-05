import { z } from 'zod';

export const getDota2PlayersPlayerIdOrSlugStatsSide = z.enum(['radiant', 'dire']);

export type GetDota2PlayersPlayerIdOrSlugStatsSide = z.infer<
  typeof getDota2PlayersPlayerIdOrSlugStatsSide
>;
