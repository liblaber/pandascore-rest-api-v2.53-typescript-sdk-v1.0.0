import { z } from 'zod';

export const loLGamePlayerForStatsRole = z.enum(['adc', 'jun', 'mid', 'sup', 'top']);

export type LoLGamePlayerForStatsRole = z.infer<typeof loLGamePlayerForStatsRole>;