import { z } from 'zod';

export const valorantPlayerShield = z.enum(['heavy_shield', 'light_shield', 'no_shield']);

export type ValorantPlayerShield = z.infer<typeof valorantPlayerShield>;
