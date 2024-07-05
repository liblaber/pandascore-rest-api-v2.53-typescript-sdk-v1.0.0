import { z } from 'zod';

export const csgoSide = z.enum(['ct', 'terrorists']);

export type CsgoSide = z.infer<typeof csgoSide>;
