import { z } from 'zod';

export const dota2Faction = z.enum(['dire', 'radiant']);

export type Dota2Faction = z.infer<typeof dota2Faction>;
