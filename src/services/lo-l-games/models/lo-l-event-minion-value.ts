import { z } from 'zod';

export const loLEventMinionValue = z.enum(['Minion']);

export type LoLEventMinionValue = z.infer<typeof loLEventMinionValue>;
