import { z } from 'zod';

export const owGameStatsGameWinnerType = z.enum(['Player', 'Team']);

export type OwGameStatsGameWinnerType = z.infer<typeof owGameStatsGameWinnerType>;
