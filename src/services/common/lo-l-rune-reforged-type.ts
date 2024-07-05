import { z } from 'zod';

export const loLRuneReforgedType = z.enum(['keystone', 'path', 'shard', 'slot1', 'slot2', 'slot3']);

export type LoLRuneReforgedType = z.infer<typeof loLRuneReforgedType>;
