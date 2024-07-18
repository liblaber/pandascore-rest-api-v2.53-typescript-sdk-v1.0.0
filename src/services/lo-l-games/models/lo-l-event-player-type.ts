import { z } from 'zod';

export const loLEventPlayerType = z.enum(['player']);

export type LoLEventPlayerType = z.infer<typeof loLEventPlayerType>;
