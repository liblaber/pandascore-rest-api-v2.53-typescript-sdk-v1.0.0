import { z } from 'zod';

export const loLEventNashorType = z.enum(['baron_nashor']);

export type LoLEventNashorType = z.infer<typeof loLEventNashorType>;
