import { z } from 'zod';

export const loLEventVoidgrubType = z.enum(['voidgrub']);

export type LoLEventVoidgrubType = z.infer<typeof loLEventVoidgrubType>;
