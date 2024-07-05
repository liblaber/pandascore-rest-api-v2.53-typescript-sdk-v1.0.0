import { z } from 'zod';

export const loLMatchPlayerRole = z.enum(['adc', 'jun', 'mid', 'sup', 'top']);

export type LoLMatchPlayerRole = z.infer<typeof loLMatchPlayerRole>;
