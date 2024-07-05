import { z } from 'zod';

export const loLEventHeraldValue = z.enum(['Rift Herald', 'riftherald']);

export type LoLEventHeraldValue = z.infer<typeof loLEventHeraldValue>;
