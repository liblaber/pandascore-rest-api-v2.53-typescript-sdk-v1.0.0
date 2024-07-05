import { z } from 'zod';

export const serieWinnerType = z.enum(['Player', 'Team']);

export type SerieWinnerType = z.infer<typeof serieWinnerType>;
