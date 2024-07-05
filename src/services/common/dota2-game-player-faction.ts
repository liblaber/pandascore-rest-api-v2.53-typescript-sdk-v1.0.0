import { z } from 'zod';

export const dota2GamePlayerFaction = z.enum(['dire', 'radiant']);

export type Dota2GamePlayerFaction = z.infer<typeof dota2GamePlayerFaction>;
