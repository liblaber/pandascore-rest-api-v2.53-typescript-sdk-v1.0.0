import { z } from 'zod';

export const opponentType = z.enum(['Player', 'Team']);

export type OpponentType = z.infer<typeof opponentType>;
