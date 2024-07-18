import { z } from 'zod';

export const loLEventHeraldType = z.enum(['herald', 'rift_herald']);

export type LoLEventHeraldType = z.infer<typeof loLEventHeraldType>;
