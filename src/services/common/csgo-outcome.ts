import { z } from 'zod';

export const csgoOutcome = z.enum(['defused', 'eliminated', 'exploded', 'planted_eliminated', 'timeout']);

export type CsgoOutcome = z.infer<typeof csgoOutcome>;
