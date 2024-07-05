import { z } from 'zod';

export const baseDota2GameWinnerType = z.enum(['Player', 'Team']);

export type BaseDota2GameWinnerType = z.infer<typeof baseDota2GameWinnerType>;
