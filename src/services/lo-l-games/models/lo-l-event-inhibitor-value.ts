import { z } from 'zod';

export const loLEventInhibitorValue = z.enum(['Inhibitor']);

export type LoLEventInhibitorValue = z.infer<typeof loLEventInhibitorValue>;
