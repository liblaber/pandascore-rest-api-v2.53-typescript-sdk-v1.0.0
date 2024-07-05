import { z } from 'zod';

export const loLMatchGameWinnerType = z.enum(['Player', 'Team']);

export type LoLMatchGameWinnerType = z.infer<typeof loLMatchGameWinnerType>;
