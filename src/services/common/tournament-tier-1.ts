import { z } from 'zod';

export const tournamentTier1 = z.enum(['a', 'b', 'c', 'd', 's', 'unranked']);

export type TournamentTier1 = z.infer<typeof tournamentTier1>;
