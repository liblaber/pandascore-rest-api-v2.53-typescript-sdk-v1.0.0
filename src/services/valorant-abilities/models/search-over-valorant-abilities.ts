import { z } from 'zod';
import { valorantAbilityType } from './valorant-ability-type';

/**
 * The shape of the model inside the application code - what the users use
 */
export const searchOverValorantAbilities: any = z.lazy(() => {
  return z.object({
    abilityType: valorantAbilityType.optional(),
    name: z.string().optional(),
  });
});

/**
 *
 * @typedef  {SearchOverValorantAbilities} searchOverValorantAbilities
 * @property {ValorantAbilityType} - Ability type
 * @property {string} - Name of the ability
 */
export type SearchOverValorantAbilities = z.infer<typeof searchOverValorantAbilities>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const searchOverValorantAbilitiesResponse: any = z.lazy(() => {
  return z
    .object({
      ability_type: valorantAbilityType.optional(),
      name: z.string().optional(),
    })
    .transform((data) => ({
      abilityType: data['ability_type'],
      name: data['name'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const searchOverValorantAbilitiesRequest: any = z.lazy(() => {
  return z.object({ abilityType: valorantAbilityType.nullish(), name: z.string().nullish() }).transform((data) => ({
    ability_type: data['abilityType'],
    name: data['name'],
  }));
});
