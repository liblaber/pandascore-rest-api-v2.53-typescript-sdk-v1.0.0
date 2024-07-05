import { z } from 'zod';

export const dota2FullGamePlayerFaction = z.enum(['dire', 'radiant']);

export type Dota2FullGamePlayerFaction = z.infer<typeof dota2FullGamePlayerFaction>;
