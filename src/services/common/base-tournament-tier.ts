import { z } from 'zod';

export const baseTournamentTier = z.enum(['a', 'b', 'c', 'd', 's', 'unranked']);

export type BaseTournamentTier = z.infer<typeof baseTournamentTier>;
