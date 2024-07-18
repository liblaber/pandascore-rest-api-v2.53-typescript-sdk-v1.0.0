import { z } from 'zod';
import {
  loLGamePlayerChampion,
  loLGamePlayerChampionRequest,
  loLGamePlayerChampionResponse,
} from './lo-l-game-player-champion';
import { loLFlags, loLFlagsRequest, loLFlagsResponse } from './lo-l-flags';
import { baseLoLItem, baseLoLItemRequest, baseLoLItemResponse } from './base-lo-l-item';
import { loLKillCounters, loLKillCountersRequest, loLKillCountersResponse } from './lo-l-kill-counters';
import { loLKillsSeries, loLKillsSeriesRequest, loLKillsSeriesResponse } from './lo-l-kills-series';
import { loLMagicDamage, loLMagicDamageRequest, loLMagicDamageResponse } from './lo-l-magic-damage';
import { loLMastery, loLMasteryRequest, loLMasteryResponse } from './lo-l-mastery';
import {
  loLGamePlayerOpponent,
  loLGamePlayerOpponentRequest,
  loLGamePlayerOpponentResponse,
} from './lo-l-game-player-opponent';
import { loLPhysicalDamage, loLPhysicalDamageRequest, loLPhysicalDamageResponse } from './lo-l-physical-damage';
import { basePlayer, basePlayerRequest, basePlayerResponse } from './base-player';
import { loLGamePlayerRole } from './lo-l-game-player-role';
import { loLRune, loLRuneRequest, loLRuneResponse } from './lo-l-rune';
import {
  loLPlayerRunesReforged,
  loLPlayerRunesReforgedRequest,
  loLPlayerRunesReforgedResponse,
} from './lo-l-player-runes-reforged';
import { loLSpell, loLSpellRequest, loLSpellResponse } from './lo-l-spell';
import { baseTeam, baseTeamRequest, baseTeamResponse } from './base-team';
import { loLTotalDamage, loLTotalDamageRequest, loLTotalDamageResponse } from './lo-l-total-damage';
import { loLTrueDamage, loLTrueDamageRequest, loLTrueDamageResponse } from './lo-l-true-damage';
import { loLWards, loLWardsRequest, loLWardsResponse } from './lo-l-wards';

/**
 * The shape of the model inside the application code - what the users use
 */
export const loLGamePlayer: any = z.lazy(() => {
  return z.object({
    assists: z.number().gte(0).nullable(),
    champion: loLGamePlayerChampion.nullable(),
    creepScore: z.number().gte(0).nullable(),
    csAt14: z.number().gte(0).nullable(),
    csDiffAt14: z.number().nullable(),
    deaths: z.number().gte(0).nullable(),
    flags: loLFlags,
    gameId: z.number().gte(1),
    goldEarned: z.number().gte(0).nullable(),
    goldPercentage: z.number().gte(0).lte(100).nullable(),
    goldSpent: z.number().gte(0).nullable(),
    items: z.array(baseLoLItem),
    kills: z.number().gte(0).nullable(),
    killsCounters: loLKillCounters,
    killsSeries: loLKillsSeries,
    largestCriticalStrike: z.number().gte(0).nullable(),
    largestKillingSpree: z.number().gte(0).nullable(),
    largestMultiKill: z.number().gte(0).nullable(),
    level: z.number().gte(1).nullable(),
    magicDamage: loLMagicDamage,
    masteries: z.array(loLMastery),
    minionsKilled: z.number().gte(0).nullable(),
    opponent: loLGamePlayerOpponent,
    physicalDamage: loLPhysicalDamage,
    player: basePlayer,
    playerId: z.number().gte(1),
    role: loLGamePlayerRole.nullable(),
    runes: z.array(loLRune),
    runesReforged: loLPlayerRunesReforged,
    spells: z.array(loLSpell),
    team: baseTeam,
    totalDamage: loLTotalDamage,
    totalHeal: z.number().gte(0).nullable(),
    totalTimeCrowdControlDealt: z.number().gte(0).nullable(),
    totalUnitsHealed: z.number().gte(0).nullable(),
    trueDamage: loLTrueDamage,
    wards: loLWards,
    wardsPlaced: z.number().gte(0).nullable(),
  });
});

/**
 * Player's data for a Game
 * @typedef  {LoLGamePlayer} loLGamePlayer - Player's data for a Game - Player's data for a Game
 * @property {number}
 * @property {LoLGamePlayerChampion}
 * @property {number} - The player's Creep Score (CS.) <br/> <br/>NB: Creep Score can be different that the number of minions killed because neutral monsters can give more score.
 * @property {number} - The player's Creep Score (CS.) at 14minutes
 * @property {number} - Player CS difference compared to their lane opponent at the 14th minute in-game
 * @property {number}
 * @property {LoLFlags}
 * @property {number} - LoL game ID
 * @property {number}
 * @property {number} - Percentage of gold the player had compared to the total gold of the team
 * @property {number}
 * @property {BaseLoLItem[]}
 * @property {number}
 * @property {LoLKillCounters}
 * @property {LoLKillsSeries}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {LoLMagicDamage}
 * @property {LoLMastery[]}
 * @property {number} - The player's Creep Score (CS.)
 * @property {LoLGamePlayerOpponent}
 * @property {LoLPhysicalDamage}
 * @property {BasePlayer}
 * @property {number} - ID of the player
 * @property {LoLGamePlayerRole}
 * @property {LoLRune[]}
 * @property {LoLPlayerRunesReforged}
 * @property {LoLSpell[]}
 * @property {BaseTeam}
 * @property {LoLTotalDamage}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {LoLTrueDamage}
 * @property {LoLWards}
 * @property {number}
 */
export type LoLGamePlayer = z.infer<typeof loLGamePlayer>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const loLGamePlayerResponse: any = z.lazy(() => {
  return z
    .object({
      assists: z.number().gte(0).nullable(),
      champion: loLGamePlayerChampionResponse.nullable(),
      creep_score: z.number().gte(0).nullable(),
      cs_at_14: z.number().gte(0).nullable(),
      cs_diff_at_14: z.number().nullable(),
      deaths: z.number().gte(0).nullable(),
      flags: loLFlagsResponse,
      game_id: z.number().gte(1),
      gold_earned: z.number().gte(0).nullable(),
      gold_percentage: z.number().gte(0).lte(100).nullable(),
      gold_spent: z.number().gte(0).nullable(),
      items: z.array(baseLoLItemResponse),
      kills: z.number().gte(0).nullable(),
      kills_counters: loLKillCountersResponse,
      kills_series: loLKillsSeriesResponse,
      largest_critical_strike: z.number().gte(0).nullable(),
      largest_killing_spree: z.number().gte(0).nullable(),
      largest_multi_kill: z.number().gte(0).nullable(),
      level: z.number().gte(1).nullable(),
      magic_damage: loLMagicDamageResponse,
      masteries: z.array(loLMasteryResponse),
      minions_killed: z.number().gte(0).nullable(),
      opponent: loLGamePlayerOpponentResponse,
      physical_damage: loLPhysicalDamageResponse,
      player: basePlayerResponse,
      player_id: z.number().gte(1),
      role: loLGamePlayerRole.nullable(),
      runes: z.array(loLRuneResponse),
      runes_reforged: loLPlayerRunesReforgedResponse,
      spells: z.array(loLSpellResponse),
      team: baseTeamResponse,
      total_damage: loLTotalDamageResponse,
      total_heal: z.number().gte(0).nullable(),
      total_time_crowd_control_dealt: z.number().gte(0).nullable(),
      total_units_healed: z.number().gte(0).nullable(),
      true_damage: loLTrueDamageResponse,
      wards: loLWardsResponse,
      wards_placed: z.number().gte(0).nullable(),
    })
    .transform((data) => ({
      assists: data['assists'],
      champion: data['champion'],
      creepScore: data['creep_score'],
      csAt14: data['cs_at_14'],
      csDiffAt14: data['cs_diff_at_14'],
      deaths: data['deaths'],
      flags: data['flags'],
      gameId: data['game_id'],
      goldEarned: data['gold_earned'],
      goldPercentage: data['gold_percentage'],
      goldSpent: data['gold_spent'],
      items: data['items'],
      kills: data['kills'],
      killsCounters: data['kills_counters'],
      killsSeries: data['kills_series'],
      largestCriticalStrike: data['largest_critical_strike'],
      largestKillingSpree: data['largest_killing_spree'],
      largestMultiKill: data['largest_multi_kill'],
      level: data['level'],
      magicDamage: data['magic_damage'],
      masteries: data['masteries'],
      minionsKilled: data['minions_killed'],
      opponent: data['opponent'],
      physicalDamage: data['physical_damage'],
      player: data['player'],
      playerId: data['player_id'],
      role: data['role'],
      runes: data['runes'],
      runesReforged: data['runes_reforged'],
      spells: data['spells'],
      team: data['team'],
      totalDamage: data['total_damage'],
      totalHeal: data['total_heal'],
      totalTimeCrowdControlDealt: data['total_time_crowd_control_dealt'],
      totalUnitsHealed: data['total_units_healed'],
      trueDamage: data['true_damage'],
      wards: data['wards'],
      wardsPlaced: data['wards_placed'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const loLGamePlayerRequest: any = z.lazy(() => {
  return z
    .object({
      assists: z.number().nullish(),
      champion: loLGamePlayerChampionRequest.nullish(),
      creepScore: z.number().nullish(),
      csAt14: z.number().nullish(),
      csDiffAt14: z.number().nullish(),
      deaths: z.number().nullish(),
      flags: loLFlagsRequest.nullish(),
      gameId: z.number().nullish(),
      goldEarned: z.number().nullish(),
      goldPercentage: z.number().nullish(),
      goldSpent: z.number().nullish(),
      items: z.array(baseLoLItemRequest).nullish(),
      kills: z.number().nullish(),
      killsCounters: loLKillCountersRequest.nullish(),
      killsSeries: loLKillsSeriesRequest.nullish(),
      largestCriticalStrike: z.number().nullish(),
      largestKillingSpree: z.number().nullish(),
      largestMultiKill: z.number().nullish(),
      level: z.number().nullish(),
      magicDamage: loLMagicDamageRequest.nullish(),
      masteries: z.array(loLMasteryRequest).nullish(),
      minionsKilled: z.number().nullish(),
      opponent: loLGamePlayerOpponentRequest.nullish(),
      physicalDamage: loLPhysicalDamageRequest.nullish(),
      player: basePlayerRequest.nullish(),
      playerId: z.number().nullish(),
      role: loLGamePlayerRole.nullish(),
      runes: z.array(loLRuneRequest).nullish(),
      runesReforged: loLPlayerRunesReforgedRequest.nullish(),
      spells: z.array(loLSpellRequest).nullish(),
      team: baseTeamRequest.nullish(),
      totalDamage: loLTotalDamageRequest.nullish(),
      totalHeal: z.number().nullish(),
      totalTimeCrowdControlDealt: z.number().nullish(),
      totalUnitsHealed: z.number().nullish(),
      trueDamage: loLTrueDamageRequest.nullish(),
      wards: loLWardsRequest.nullish(),
      wardsPlaced: z.number().nullish(),
    })
    .transform((data) => ({
      assists: data['assists'],
      champion: data['champion'],
      creep_score: data['creepScore'],
      cs_at_14: data['csAt14'],
      cs_diff_at_14: data['csDiffAt14'],
      deaths: data['deaths'],
      flags: data['flags'],
      game_id: data['gameId'],
      gold_earned: data['goldEarned'],
      gold_percentage: data['goldPercentage'],
      gold_spent: data['goldSpent'],
      items: data['items'],
      kills: data['kills'],
      kills_counters: data['killsCounters'],
      kills_series: data['killsSeries'],
      largest_critical_strike: data['largestCriticalStrike'],
      largest_killing_spree: data['largestKillingSpree'],
      largest_multi_kill: data['largestMultiKill'],
      level: data['level'],
      magic_damage: data['magicDamage'],
      masteries: data['masteries'],
      minions_killed: data['minionsKilled'],
      opponent: data['opponent'],
      physical_damage: data['physicalDamage'],
      player: data['player'],
      player_id: data['playerId'],
      role: data['role'],
      runes: data['runes'],
      runes_reforged: data['runesReforged'],
      spells: data['spells'],
      team: data['team'],
      total_damage: data['totalDamage'],
      total_heal: data['totalHeal'],
      total_time_crowd_control_dealt: data['totalTimeCrowdControlDealt'],
      total_units_healed: data['totalUnitsHealed'],
      true_damage: data['trueDamage'],
      wards: data['wards'],
      wards_placed: data['wardsPlaced'],
    }));
});
