import { z } from 'zod';

export const loLTeamColor = z.enum(['blue', 'red']);

export type LoLTeamColor = z.infer<typeof loLTeamColor>;
