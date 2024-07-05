import { z } from 'zod';

export const loLGamePlayerRole = z.enum(['adc', 'jun', 'mid', 'sup', 'top']);

export type LoLGamePlayerRole = z.infer<typeof loLGamePlayerRole>;
