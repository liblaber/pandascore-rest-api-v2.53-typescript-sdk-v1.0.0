import { z } from 'zod';

export const loLEventVoidgrubValue = z.enum(['Voidgrub']);

export type LoLEventVoidgrubValue = z.infer<typeof loLEventVoidgrubValue>;
