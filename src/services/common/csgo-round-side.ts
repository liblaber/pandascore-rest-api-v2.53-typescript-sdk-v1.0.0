import { z } from 'zod';

export const csgoRoundSide = z.enum(['counter_terrorists', 'terrorists']);

export type CsgoRoundSide = z.infer<typeof csgoRoundSide>;
