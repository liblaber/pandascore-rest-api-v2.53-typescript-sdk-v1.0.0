import { z } from 'zod';

export const valorantEventType = z.enum(['kill', 'spike_defused', 'spike_planted']);

export type ValorantEventType = z.infer<typeof valorantEventType>;
