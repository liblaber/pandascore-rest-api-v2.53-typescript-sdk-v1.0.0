import { z } from 'zod';

export const loLEventDrakeType = z.enum(['drake']);

export type LoLEventDrakeType = z.infer<typeof loLEventDrakeType>;
