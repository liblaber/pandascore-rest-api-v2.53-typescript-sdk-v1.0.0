import { z } from 'zod';

export const opponentTypeTeam = z.enum(['Team']);

export type OpponentTypeTeam = z.infer<typeof opponentTypeTeam>;
