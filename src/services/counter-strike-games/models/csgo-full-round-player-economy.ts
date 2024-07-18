import { z } from 'zod';
import { armor } from './armor';
import { primaryWeapon, primaryWeaponRequest, primaryWeaponResponse } from './primary-weapon';
import { secondaryWeapon, secondaryWeaponRequest, secondaryWeaponResponse } from './secondary-weapon';
import {
  csgoFullRoundUtility,
  csgoFullRoundUtilityRequest,
  csgoFullRoundUtilityResponse,
} from './csgo-full-round-utility';

/**
 * The shape of the model inside the application code - what the users use
 */
export const csgoFullRoundPlayerEconomy: any = z.lazy(() => {
  return z.object({
    armor: armor.nullable(),
    defuseKit: z.boolean().optional(),
    economy: z.number().gte(0),
    primaryWeapon: primaryWeapon.nullable(),
    secondaryWeapon: secondaryWeapon.nullable(),
    utilities: z.array(csgoFullRoundUtility),
  });
});

/**
 *
 * @typedef  {CsgoFullRoundPlayerEconomy} csgoFullRoundPlayerEconomy
 * @property {Armor}
 * @property {boolean} - Whether the player carries a defuse kit
 * @property {number} - The in-game money that a player has.
 * @property {PrimaryWeapon}
 * @property {SecondaryWeapon}
 * @property {CsgoFullRoundUtility[]}
 */
export type CsgoFullRoundPlayerEconomy = z.infer<typeof csgoFullRoundPlayerEconomy>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const csgoFullRoundPlayerEconomyResponse: any = z.lazy(() => {
  return z
    .object({
      armor: armor.nullable(),
      defuse_kit: z.boolean().optional(),
      economy: z.number().gte(0),
      primary_weapon: primaryWeaponResponse.nullable(),
      secondary_weapon: secondaryWeaponResponse.nullable(),
      utilities: z.array(csgoFullRoundUtilityResponse),
    })
    .transform((data) => ({
      armor: data['armor'],
      defuseKit: data['defuse_kit'],
      economy: data['economy'],
      primaryWeapon: data['primary_weapon'],
      secondaryWeapon: data['secondary_weapon'],
      utilities: data['utilities'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const csgoFullRoundPlayerEconomyRequest: any = z.lazy(() => {
  return z
    .object({
      armor: armor.nullish(),
      defuseKit: z.boolean().nullish(),
      economy: z.number().nullish(),
      primaryWeapon: primaryWeaponRequest.nullish(),
      secondaryWeapon: secondaryWeaponRequest.nullish(),
      utilities: z.array(csgoFullRoundUtilityRequest).nullish(),
    })
    .transform((data) => ({
      armor: data['armor'],
      defuse_kit: data['defuseKit'],
      economy: data['economy'],
      primary_weapon: data['primaryWeapon'],
      secondary_weapon: data['secondaryWeapon'],
      utilities: data['utilities'],
    }));
});
