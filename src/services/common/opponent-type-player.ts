import { z } from 'zod';

export const opponentTypePlayer = z.enum(['Player']);

export type OpponentTypePlayer = z.infer<typeof opponentTypePlayer>;
