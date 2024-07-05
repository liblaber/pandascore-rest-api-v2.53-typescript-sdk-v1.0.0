import { z } from 'zod';

export const loLEventTowerValue = z.enum(['Tower']);

export type LoLEventTowerValue = z.infer<typeof loLEventTowerValue>;
