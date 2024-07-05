import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const rangeOverLoLItems = z.object({
  flatArmorMod: z.array(z.number()).min(2).max(2).optional(),
  flatCritChanceMod: z.array(z.number()).min(2).max(2).optional(),
  flatHpPoolMod: z.array(z.number()).min(2).max(2).optional(),
  flatHpRegenMod: z.array(z.number()).min(2).max(2).optional(),
  flatMagicDamageMod: z.array(z.number()).min(2).max(2).optional(),
  flatMovementSpeedMod: z.array(z.number()).min(2).max(2).optional(),
  flatMpPoolMod: z.array(z.number()).min(2).max(2).optional(),
  flatMpRegenMod: z.array(z.number()).min(2).max(2).optional(),
  flatPhysicalDamageMod: z.array(z.number()).min(2).max(2).optional(),
  flatSpellBlockMod: z.array(z.number()).min(2).max(2).optional(),
  goldBase: z.array(z.number()).min(2).max(2).optional(),
  goldPurchasable: z.array(z.boolean()).min(2).max(2).optional(),
  goldSell: z.array(z.number()).min(2).max(2).optional(),
  goldTotal: z.array(z.number()).min(2).max(2).optional(),
  id: z.array(z.number()).min(2).max(2).optional(),
  name: z.array(z.string()).min(2).max(2).optional(),
  percentAttackSpeedMod: z.array(z.number()).min(2).max(2).optional(),
  percentLifeStealMod: z.array(z.number()).min(2).max(2).optional(),
  percentMovementSpeedMod: z.array(z.number()).min(2).max(2).optional(),
});

/**
 *
 * @typedef  {RangeOverLoLItems} rangeOverLoLItems
 * @property {number[]}
 * @property {number[]}
 * @property {number[]}
 * @property {number[]}
 * @property {number[]}
 * @property {number[]}
 * @property {number[]}
 * @property {number[]}
 * @property {number[]}
 * @property {number[]}
 * @property {number[]}
 * @property {boolean[]}
 * @property {number[]}
 * @property {number[]}
 * @property {number[]}
 * @property {string[]}
 * @property {number[]}
 * @property {number[]}
 * @property {number[]}
 */
export type RangeOverLoLItems = z.infer<typeof rangeOverLoLItems>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const rangeOverLoLItemsResponse = z
  .object({
    flat_armor_mod: z.array(z.number()).min(2).max(2).optional(),
    flat_crit_chance_mod: z.array(z.number()).min(2).max(2).optional(),
    flat_hp_pool_mod: z.array(z.number()).min(2).max(2).optional(),
    flat_hp_regen_mod: z.array(z.number()).min(2).max(2).optional(),
    flat_magic_damage_mod: z.array(z.number()).min(2).max(2).optional(),
    flat_movement_speed_mod: z.array(z.number()).min(2).max(2).optional(),
    flat_mp_pool_mod: z.array(z.number()).min(2).max(2).optional(),
    flat_mp_regen_mod: z.array(z.number()).min(2).max(2).optional(),
    flat_physical_damage_mod: z.array(z.number()).min(2).max(2).optional(),
    flat_spell_block_mod: z.array(z.number()).min(2).max(2).optional(),
    gold_base: z.array(z.number()).min(2).max(2).optional(),
    gold_purchasable: z.array(z.boolean()).min(2).max(2).optional(),
    gold_sell: z.array(z.number()).min(2).max(2).optional(),
    gold_total: z.array(z.number()).min(2).max(2).optional(),
    id: z.array(z.number()).min(2).max(2).optional(),
    name: z.array(z.string()).min(2).max(2).optional(),
    percent_attack_speed_mod: z.array(z.number()).min(2).max(2).optional(),
    percent_life_steal_mod: z.array(z.number()).min(2).max(2).optional(),
    percent_movement_speed_mod: z.array(z.number()).min(2).max(2).optional(),
  })
  .transform((data) => ({
    flatArmorMod: data['flat_armor_mod'],
    flatCritChanceMod: data['flat_crit_chance_mod'],
    flatHpPoolMod: data['flat_hp_pool_mod'],
    flatHpRegenMod: data['flat_hp_regen_mod'],
    flatMagicDamageMod: data['flat_magic_damage_mod'],
    flatMovementSpeedMod: data['flat_movement_speed_mod'],
    flatMpPoolMod: data['flat_mp_pool_mod'],
    flatMpRegenMod: data['flat_mp_regen_mod'],
    flatPhysicalDamageMod: data['flat_physical_damage_mod'],
    flatSpellBlockMod: data['flat_spell_block_mod'],
    goldBase: data['gold_base'],
    goldPurchasable: data['gold_purchasable'],
    goldSell: data['gold_sell'],
    goldTotal: data['gold_total'],
    id: data['id'],
    name: data['name'],
    percentAttackSpeedMod: data['percent_attack_speed_mod'],
    percentLifeStealMod: data['percent_life_steal_mod'],
    percentMovementSpeedMod: data['percent_movement_speed_mod'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const rangeOverLoLItemsRequest = z
  .object({
    flatArmorMod: z.array(z.number()).nullish(),
    flatCritChanceMod: z.array(z.number()).nullish(),
    flatHpPoolMod: z.array(z.number()).nullish(),
    flatHpRegenMod: z.array(z.number()).nullish(),
    flatMagicDamageMod: z.array(z.number()).nullish(),
    flatMovementSpeedMod: z.array(z.number()).nullish(),
    flatMpPoolMod: z.array(z.number()).nullish(),
    flatMpRegenMod: z.array(z.number()).nullish(),
    flatPhysicalDamageMod: z.array(z.number()).nullish(),
    flatSpellBlockMod: z.array(z.number()).nullish(),
    goldBase: z.array(z.number()).nullish(),
    goldPurchasable: z.array(z.boolean()).nullish(),
    goldSell: z.array(z.number()).nullish(),
    goldTotal: z.array(z.number()).nullish(),
    id: z.array(z.number()).nullish(),
    name: z.array(z.string()).nullish(),
    percentAttackSpeedMod: z.array(z.number()).nullish(),
    percentLifeStealMod: z.array(z.number()).nullish(),
    percentMovementSpeedMod: z.array(z.number()).nullish(),
  })
  .transform((data) => ({
    flat_armor_mod: data['flatArmorMod'],
    flat_crit_chance_mod: data['flatCritChanceMod'],
    flat_hp_pool_mod: data['flatHpPoolMod'],
    flat_hp_regen_mod: data['flatHpRegenMod'],
    flat_magic_damage_mod: data['flatMagicDamageMod'],
    flat_movement_speed_mod: data['flatMovementSpeedMod'],
    flat_mp_pool_mod: data['flatMpPoolMod'],
    flat_mp_regen_mod: data['flatMpRegenMod'],
    flat_physical_damage_mod: data['flatPhysicalDamageMod'],
    flat_spell_block_mod: data['flatSpellBlockMod'],
    gold_base: data['goldBase'],
    gold_purchasable: data['goldPurchasable'],
    gold_sell: data['goldSell'],
    gold_total: data['goldTotal'],
    id: data['id'],
    name: data['name'],
    percent_attack_speed_mod: data['percentAttackSpeedMod'],
    percent_life_steal_mod: data['percentLifeStealMod'],
    percent_movement_speed_mod: data['percentMovementSpeedMod'],
  }));
