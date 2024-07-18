import { z } from 'zod';

export const baseCsgoGameWinnerType = z.enum(['Player', 'Team']);

export type BaseCsgoGameWinnerType = z.infer<typeof baseCsgoGameWinnerType>;
