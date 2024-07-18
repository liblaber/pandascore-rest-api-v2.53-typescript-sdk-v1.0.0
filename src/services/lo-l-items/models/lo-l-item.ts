import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const loLItem: any = z.lazy(() => {
  return z.object({
    flatArmorMod: z.number().gte(0).nullable(),
    flatCritChanceMod: z.number().gte(0).nullable(),
    flatHpPoolMod: z.number().gte(0).nullable(),
    flatHpRegenMod: z.number().gte(0).nullable(),
    flatMagicDamageMod: z.number().gte(0).nullable(),
    flatMovementSpeedMod: z.number().gte(0).nullable(),
    flatMpPoolMod: z.number().gte(0).nullable(),
    flatMpRegenMod: z.number().gte(0).nullable(),
    flatPhysicalDamageMod: z.number().gte(0).nullable(),
    flatSpellBlockMod: z.number().gte(0).nullable(),
    goldBase: z.number().gte(0).nullable(),
    goldPurchasable: z.boolean().nullable(),
    goldSell: z.number().gte(0).nullable(),
    goldTotal: z.number().gte(0).nullable(),
    id: z.number().gte(1),
    imageUrl: z.string().nullable(),
    isTrinket: z.boolean().nullable(),
    name: z.string(),
    percentAttackSpeedMod: z.number().gte(0).nullable(),
    percentLifeStealMod: z.number().gte(0).nullable(),
    percentMovementSpeedMod: z.number().gte(0).nullable(),
    videogameVersions: z.array(z.string()),
  });
});

/**
 *
 * @typedef  {LoLItem} loLItem
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {boolean} - Whether gold can be bought
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {string}
 * @property {boolean} - Whether item is a trinket
 * @property {string}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {string[]} - Array of of video game versions (ie. patches) for this resource
 */
export type LoLItem = z.infer<typeof loLItem>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const loLItemResponse: any = z.lazy(() => {
  return z
    .object({
      flat_armor_mod: z.number().gte(0).nullable(),
      flat_crit_chance_mod: z.number().gte(0).nullable(),
      flat_hp_pool_mod: z.number().gte(0).nullable(),
      flat_hp_regen_mod: z.number().gte(0).nullable(),
      flat_magic_damage_mod: z.number().gte(0).nullable(),
      flat_movement_speed_mod: z.number().gte(0).nullable(),
      flat_mp_pool_mod: z.number().gte(0).nullable(),
      flat_mp_regen_mod: z.number().gte(0).nullable(),
      flat_physical_damage_mod: z.number().gte(0).nullable(),
      flat_spell_block_mod: z.number().gte(0).nullable(),
      gold_base: z.number().gte(0).nullable(),
      gold_purchasable: z.boolean().nullable(),
      gold_sell: z.number().gte(0).nullable(),
      gold_total: z.number().gte(0).nullable(),
      id: z.number().gte(1),
      image_url: z.string().nullable(),
      is_trinket: z.boolean().nullable(),
      name: z.string(),
      percent_attack_speed_mod: z.number().gte(0).nullable(),
      percent_life_steal_mod: z.number().gte(0).nullable(),
      percent_movement_speed_mod: z.number().gte(0).nullable(),
      videogame_versions: z.array(z.string()),
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
      imageUrl: data['image_url'],
      isTrinket: data['is_trinket'],
      name: data['name'],
      percentAttackSpeedMod: data['percent_attack_speed_mod'],
      percentLifeStealMod: data['percent_life_steal_mod'],
      percentMovementSpeedMod: data['percent_movement_speed_mod'],
      videogameVersions: data['videogame_versions'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const loLItemRequest: any = z.lazy(() => {
  return z
    .object({
      flatArmorMod: z.number().nullish(),
      flatCritChanceMod: z.number().nullish(),
      flatHpPoolMod: z.number().nullish(),
      flatHpRegenMod: z.number().nullish(),
      flatMagicDamageMod: z.number().nullish(),
      flatMovementSpeedMod: z.number().nullish(),
      flatMpPoolMod: z.number().nullish(),
      flatMpRegenMod: z.number().nullish(),
      flatPhysicalDamageMod: z.number().nullish(),
      flatSpellBlockMod: z.number().nullish(),
      goldBase: z.number().nullish(),
      goldPurchasable: z.boolean().nullish(),
      goldSell: z.number().nullish(),
      goldTotal: z.number().nullish(),
      id: z.number().nullish(),
      imageUrl: z.string().nullish(),
      isTrinket: z.boolean().nullish(),
      name: z.string().nullish(),
      percentAttackSpeedMod: z.number().nullish(),
      percentLifeStealMod: z.number().nullish(),
      percentMovementSpeedMod: z.number().nullish(),
      videogameVersions: z.array(z.string()).nullish(),
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
      image_url: data['imageUrl'],
      is_trinket: data['isTrinket'],
      name: data['name'],
      percent_attack_speed_mod: data['percentAttackSpeedMod'],
      percent_life_steal_mod: data['percentLifeStealMod'],
      percent_movement_speed_mod: data['percentMovementSpeedMod'],
      videogame_versions: data['videogameVersions'],
    }));
});
