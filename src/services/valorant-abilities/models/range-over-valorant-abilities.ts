import { z } from 'zod';
import { valorantAbilityType } from './valorant-ability-type';

/**
 * The shape of the model inside the application code - what the users use
 */
export const rangeOverValorantAbilities: any = z.lazy(() => {
  return z.object({
    abilityType: z.array(valorantAbilityType).min(2).max(2).optional(),
    creds: z.array(z.number()).min(2).max(2).optional(),
    id: z.array(z.number()).min(2).max(2).optional(),
    name: z.array(z.string()).min(2).max(2).optional(),
  });
});

/**
 *
 * @typedef  {RangeOverValorantAbilities} rangeOverValorantAbilities
 * @property {ValorantAbilityType[]}
 * @property {number[]}
 * @property {number[]}
 * @property {string[]}
 */
export type RangeOverValorantAbilities = z.infer<typeof rangeOverValorantAbilities>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const rangeOverValorantAbilitiesResponse: any = z.lazy(() => {
  return z
    .object({
      ability_type: z.array(valorantAbilityType).min(2).max(2).optional(),
      creds: z.array(z.number()).min(2).max(2).optional(),
      id: z.array(z.number()).min(2).max(2).optional(),
      name: z.array(z.string()).min(2).max(2).optional(),
    })
    .transform((data) => ({
      abilityType: data['ability_type'],
      creds: data['creds'],
      id: data['id'],
      name: data['name'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const rangeOverValorantAbilitiesRequest: any = z.lazy(() => {
  return z
    .object({
      abilityType: z.array(valorantAbilityType).nullish(),
      creds: z.array(z.number()).nullish(),
      id: z.array(z.number()).nullish(),
      name: z.array(z.string()).nullish(),
    })
    .transform((data) => ({
      ability_type: data['abilityType'],
      creds: data['creds'],
      id: data['id'],
      name: data['name'],
    }));
});