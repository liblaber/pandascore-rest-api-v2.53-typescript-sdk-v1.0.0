import { z } from 'zod';
import {
  loLAverageKillCounters,
  loLAverageKillCountersRequest,
  loLAverageKillCountersResponse,
} from './lo-l-average-kill-counters';
import {
  loLAverageMagicDamage,
  loLAverageMagicDamageRequest,
  loLAverageMagicDamageResponse,
} from './lo-l-average-magic-damage';
import {
  loLAveragePhysicalDamage,
  loLAveragePhysicalDamageRequest,
  loLAveragePhysicalDamageResponse,
} from './lo-l-average-physical-damage';
import {
  loLAverageTotalDamage,
  loLAverageTotalDamageRequest,
  loLAverageTotalDamageResponse,
} from './lo-l-average-total-damage';
import {
  loLAverageTrueDamage,
  loLAverageTrueDamageRequest,
  loLAverageTrueDamageResponse,
} from './lo-l-average-true-damage';

/**
 * The shape of the model inside the application code - what the users use
 */
export const loLPlayerAverages: any = z.lazy(() => {
  return z.object({
    assists: z.number().gte(0).nullable(),
    csAt14: z.number().gte(0).nullable(),
    csDiffAt14: z.number().nullable(),
    deaths: z.number().gte(0).nullable(),
    goldEarned: z.number().gte(0).nullable(),
    goldPercentage: z.number().gte(0).lte(100).nullable(),
    goldSpent: z.number().gte(0).nullable(),
    killCounters: loLAverageKillCounters,
    kills: z.number().gte(0).nullable(),
    magicDamage: loLAverageMagicDamage,
    minionsKilled: z.number().gte(0).nullable(),
    physicalDamage: loLAveragePhysicalDamage,
    totalDamage: loLAverageTotalDamage,
    totalHeal: z.number().gte(0).nullable(),
    totalTimeCrowdControlDealt: z.number().gte(0).nullable(),
    totalUnitsHealed: z.number().gte(0).nullable(),
    trueDamage: loLAverageTrueDamage,
    visionWardsBoughtInGame: z.number().gte(0).nullable(),
    wardsPlaced: z.number().gte(0).nullable(),
  });
});

/**
 *
 * @typedef  {LoLPlayerAverages} loLPlayerAverages
 * @property {number}
 * @property {number}
 * @property {number} - Player CS difference compared to their lane opponent at the 14th minute in-game
 * @property {number}
 * @property {number}
 * @property {number} - Percentage of gold the player had compared to the total gold of the team
 * @property {number}
 * @property {LoLAverageKillCounters}
 * @property {number}
 * @property {LoLAverageMagicDamage}
 * @property {number}
 * @property {LoLAveragePhysicalDamage}
 * @property {LoLAverageTotalDamage}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {LoLAverageTrueDamage}
 * @property {number}
 * @property {number}
 */
export type LoLPlayerAverages = z.infer<typeof loLPlayerAverages>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const loLPlayerAveragesResponse: any = z.lazy(() => {
  return z
    .object({
      assists: z.number().gte(0).nullable(),
      cs_at_14: z.number().gte(0).nullable(),
      cs_diff_at_14: z.number().nullable(),
      deaths: z.number().gte(0).nullable(),
      gold_earned: z.number().gte(0).nullable(),
      gold_percentage: z.number().gte(0).lte(100).nullable(),
      gold_spent: z.number().gte(0).nullable(),
      kill_counters: loLAverageKillCountersResponse,
      kills: z.number().gte(0).nullable(),
      magic_damage: loLAverageMagicDamageResponse,
      minions_killed: z.number().gte(0).nullable(),
      physical_damage: loLAveragePhysicalDamageResponse,
      total_damage: loLAverageTotalDamageResponse,
      total_heal: z.number().gte(0).nullable(),
      total_time_crowd_control_dealt: z.number().gte(0).nullable(),
      total_units_healed: z.number().gte(0).nullable(),
      true_damage: loLAverageTrueDamageResponse,
      vision_wards_bought_in_game: z.number().gte(0).nullable(),
      wards_placed: z.number().gte(0).nullable(),
    })
    .transform((data) => ({
      assists: data['assists'],
      csAt14: data['cs_at_14'],
      csDiffAt14: data['cs_diff_at_14'],
      deaths: data['deaths'],
      goldEarned: data['gold_earned'],
      goldPercentage: data['gold_percentage'],
      goldSpent: data['gold_spent'],
      killCounters: data['kill_counters'],
      kills: data['kills'],
      magicDamage: data['magic_damage'],
      minionsKilled: data['minions_killed'],
      physicalDamage: data['physical_damage'],
      totalDamage: data['total_damage'],
      totalHeal: data['total_heal'],
      totalTimeCrowdControlDealt: data['total_time_crowd_control_dealt'],
      totalUnitsHealed: data['total_units_healed'],
      trueDamage: data['true_damage'],
      visionWardsBoughtInGame: data['vision_wards_bought_in_game'],
      wardsPlaced: data['wards_placed'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const loLPlayerAveragesRequest: any = z.lazy(() => {
  return z
    .object({
      assists: z.number().nullish(),
      csAt14: z.number().nullish(),
      csDiffAt14: z.number().nullish(),
      deaths: z.number().nullish(),
      goldEarned: z.number().nullish(),
      goldPercentage: z.number().nullish(),
      goldSpent: z.number().nullish(),
      killCounters: loLAverageKillCountersRequest.nullish(),
      kills: z.number().nullish(),
      magicDamage: loLAverageMagicDamageRequest.nullish(),
      minionsKilled: z.number().nullish(),
      physicalDamage: loLAveragePhysicalDamageRequest.nullish(),
      totalDamage: loLAverageTotalDamageRequest.nullish(),
      totalHeal: z.number().nullish(),
      totalTimeCrowdControlDealt: z.number().nullish(),
      totalUnitsHealed: z.number().nullish(),
      trueDamage: loLAverageTrueDamageRequest.nullish(),
      visionWardsBoughtInGame: z.number().nullish(),
      wardsPlaced: z.number().nullish(),
    })
    .transform((data) => ({
      assists: data['assists'],
      cs_at_14: data['csAt14'],
      cs_diff_at_14: data['csDiffAt14'],
      deaths: data['deaths'],
      gold_earned: data['goldEarned'],
      gold_percentage: data['goldPercentage'],
      gold_spent: data['goldSpent'],
      kill_counters: data['killCounters'],
      kills: data['kills'],
      magic_damage: data['magicDamage'],
      minions_killed: data['minionsKilled'],
      physical_damage: data['physicalDamage'],
      total_damage: data['totalDamage'],
      total_heal: data['totalHeal'],
      total_time_crowd_control_dealt: data['totalTimeCrowdControlDealt'],
      total_units_healed: data['totalUnitsHealed'],
      true_damage: data['trueDamage'],
      vision_wards_bought_in_game: data['visionWardsBoughtInGame'],
      wards_placed: data['wardsPlaced'],
    }));
});
