import { z } from 'zod';

export const loLEventMinionType = z.enum(['minion']);

export type LoLEventMinionType = z.infer<typeof loLEventMinionType>;
