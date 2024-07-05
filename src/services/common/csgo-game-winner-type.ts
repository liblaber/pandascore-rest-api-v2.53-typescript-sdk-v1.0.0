import { z } from 'zod';

export const csgoGameWinnerType = z.enum(['Player', 'Team']);

export type CsgoGameWinnerType = z.infer<typeof csgoGameWinnerType>;
