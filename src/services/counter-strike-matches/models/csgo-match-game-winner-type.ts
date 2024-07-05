import { z } from 'zod';

export const csgoMatchGameWinnerType = z.enum(['Player', 'Team']);

export type CsgoMatchGameWinnerType = z.infer<typeof csgoMatchGameWinnerType>;
