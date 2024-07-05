import { z } from 'zod';

export const loLMatchGamePlayerRole = z.enum(['adc', 'jun', 'mid', 'sup', 'top']);

export type LoLMatchGamePlayerRole = z.infer<typeof loLMatchGamePlayerRole>;
