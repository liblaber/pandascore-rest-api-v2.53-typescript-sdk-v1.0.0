import { z } from 'zod';

export const armor = z.enum(['kevlar', 'kevlar_and_helmet']);

export type Armor = z.infer<typeof armor>;
