import { z } from 'zod';

export const getLolPlayersPlayerIdOrSlugStatsSide = z.enum(['blue', 'red']);

export type GetLolPlayersPlayerIdOrSlugStatsSide = z.infer<
  typeof getLolPlayersPlayerIdOrSlugStatsSide
>;
