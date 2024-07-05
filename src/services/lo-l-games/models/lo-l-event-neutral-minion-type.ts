import { z } from 'zod';

export const loLEventNeutralMinionType = z.enum(['neutral_minion']);

export type LoLEventNeutralMinionType = z.infer<typeof loLEventNeutralMinionType>;
