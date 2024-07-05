import { z } from 'zod';

export const dota2GameWinnerType = z.enum(['Player', 'Team']);

export type Dota2GameWinnerType = z.infer<typeof dota2GameWinnerType>;
