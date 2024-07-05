import { z } from 'zod';

export const valorantTeamSide = z.enum(['attackers', 'defenders']);

export type ValorantTeamSide = z.infer<typeof valorantTeamSide>;
