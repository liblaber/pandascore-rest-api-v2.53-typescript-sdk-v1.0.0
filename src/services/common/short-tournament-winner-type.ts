import { z } from 'zod';

export const shortTournamentWinnerType = z.enum(['Player', 'Team']);

export type ShortTournamentWinnerType = z.infer<typeof shortTournamentWinnerType>;
