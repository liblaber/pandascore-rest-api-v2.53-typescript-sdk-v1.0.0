import { z } from 'zod';

export const previousMatchType = z.enum(['loser', 'winner']);

export type PreviousMatchType = z.infer<typeof previousMatchType>;
