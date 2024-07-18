import { z } from 'zod';

export const valorantAbilityType = z.enum(['ability_one', 'ability_two', 'grenade_ability', 'ultimate_ability']);

export type ValorantAbilityType = z.infer<typeof valorantAbilityType>;
