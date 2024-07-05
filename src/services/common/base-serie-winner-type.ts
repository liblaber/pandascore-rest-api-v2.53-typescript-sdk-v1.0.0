import { z } from 'zod';

export const baseSerieWinnerType = z.enum(['Player', 'Team']);

export type BaseSerieWinnerType = z.infer<typeof baseSerieWinnerType>;
