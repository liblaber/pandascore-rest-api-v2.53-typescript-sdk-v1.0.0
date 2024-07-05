import { z } from 'zod';

export const shortTournamentTier = z.enum(['a', 'b', 'c', 'd', 's', 'unranked']);

export type ShortTournamentTier = z.infer<typeof shortTournamentTier>;
