import { z } from 'zod';

export const gameWinnerType1 = z.enum(['Player', 'Team']);

export type GameWinnerType1 = z.infer<typeof gameWinnerType1>;
