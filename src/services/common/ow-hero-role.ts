import { z } from 'zod';

export const owHeroRole = z.enum(['damage', 'defense', 'offense', 'support', 'tank']);

export type OwHeroRole = z.infer<typeof owHeroRole>;
