import { z } from 'zod';

export const owGameWinnerType = z.enum(['Player', 'Team']);

export type OwGameWinnerType = z.infer<typeof owGameWinnerType>;
