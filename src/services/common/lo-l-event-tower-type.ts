import { z } from 'zod';

export const loLEventTowerType = z.enum(['tower']);

export type LoLEventTowerType = z.infer<typeof loLEventTowerType>;
