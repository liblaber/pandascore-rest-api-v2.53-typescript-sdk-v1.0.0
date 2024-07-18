import { z } from 'zod';

export const loLDrakeType = z.enum(['chemtech', 'cloud', 'elder', 'hextech', 'infernal', 'mountain', 'ocean']);

export type LoLDrakeType = z.infer<typeof loLDrakeType>;
