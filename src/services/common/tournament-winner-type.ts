import { z } from 'zod';

export const tournamentWinnerType = z.enum(['Player', 'Team']);

export type TournamentWinnerType = z.infer<typeof tournamentWinnerType>;
