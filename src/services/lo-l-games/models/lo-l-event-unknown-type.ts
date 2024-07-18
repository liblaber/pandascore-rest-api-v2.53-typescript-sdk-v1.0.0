import { z } from 'zod';

export const loLEventUnknownType = z.enum(['unknown']);

export type LoLEventUnknownType = z.infer<typeof loLEventUnknownType>;
