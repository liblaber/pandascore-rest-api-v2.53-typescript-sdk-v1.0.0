import { z } from 'zod';

export const baseTournamentWinnerType = z.enum(['Player', 'Team']);

export type BaseTournamentWinnerType = z.infer<typeof baseTournamentWinnerType>;
