import { z } from 'zod';

export const loLGameWinnerType = z.enum(['Player', 'Team']);

export type LoLGameWinnerType = z.infer<typeof loLGameWinnerType>;
