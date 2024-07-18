import { z } from 'zod';

export const abilityType = z.enum(['ability_one', 'ability_two', 'grenade_ability', 'ultimate_ability']);

export type AbilityType = z.infer<typeof abilityType>;
