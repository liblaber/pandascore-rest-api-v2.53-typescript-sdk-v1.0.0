import { z } from 'zod';

export const owMapGameMode = z.enum(['Assault', 'Control', 'Escort', 'Hybrid', 'Push']);

export type OwMapGameMode = z.infer<typeof owMapGameMode>;
