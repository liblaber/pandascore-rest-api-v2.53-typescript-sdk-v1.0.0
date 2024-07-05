import { z } from 'zod';

export const loLEventNashorValue = z.enum(['Baron Nashor']);

export type LoLEventNashorValue = z.infer<typeof loLEventNashorValue>;
