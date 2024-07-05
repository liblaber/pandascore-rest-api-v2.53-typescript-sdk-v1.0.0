import { z } from 'zod';

export const loLEventInhibitorType = z.enum(['inhibitor']);

export type LoLEventInhibitorType = z.infer<typeof loLEventInhibitorType>;
