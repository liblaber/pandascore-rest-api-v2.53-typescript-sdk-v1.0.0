import { z } from 'zod';
import {
  loLGamePlayerForStatsChampion,
  loLGamePlayerForStatsChampionRequest,
  loLGamePlayerForStatsChampionResponse,
} from './lo-l-game-player-for-stats-champion';
import { loLFlags, loLFlagsRequest, loLFlagsResponse } from './lo-l-flags';
import { baseLoLItem, baseLoLItemRequest, baseLoLItemResponse } from './base-lo-l-item';
import {
  loLKillCounters,
  loLKillCountersRequest,
  loLKillCountersResponse,
} from './lo-l-kill-counters';
import { loLKillsSeries, loLKillsSeriesRequest, loLKillsSeriesResponse } from './lo-l-kills-series';
import {
  loLGamePlayerDamageForStats,
  loLGamePlayerDamageForStatsRequest,
  loLGamePlayerDamageForStatsResponse,
} from './lo-l-game-player-damage-for-stats';
import { loLMastery, loLMasteryRequest, loLMasteryResponse } from './lo-l-mastery';
import {
  loLGamePlayerForStatsOpponent,
  loLGamePlayerForStatsOpponentRequest,
  loLGamePlayerForStatsOpponentResponse,
} from './lo-l-game-player-for-stats-opponent';
import { basePlayer, basePlayerRequest, basePlayerResponse } from './base-player';
import { loLGamePlayerForStatsRole } from './lo-l-game-player-for-stats-role';
import { loLRune, loLRuneRequest, loLRuneResponse } from './lo-l-rune';
import {
  loLPlayerRunesReforged,
  loLPlayerRunesReforgedRequest,
  loLPlayerRunesReforgedResponse,
} from './lo-l-player-runes-reforged';
import { loLSpell, loLSpellRequest, loLSpellResponse } from './lo-l-spell';
import { baseTeam, baseTeamRequest, baseTeamResponse } from './base-team';
import { loLWards, loLWardsRequest, loLWardsResponse } from './lo-l-wards';

/**
 * The shape of the model inside the application code - what the users use
 */
export const loLGamePlayerForStats = z.object({
  assists: z.number().gte(0),
  champion: loLGamePlayerForStatsChampion,
  creepScore: z.number().gte(0),
  csAt14: z.number().gte(0),
  deaths: z.number().gte(0),
  flags: loLFlags,
  gameId: z.number().gte(1),
  goldEarned: z.number().gte(0),
  goldSpent: z.number().gte(0),
  items: z.array(baseLoLItem),
  kills: z.number().gte(0),
  killsCounters: loLKillCounters,
  killsSeries: loLKillsSeries,
  largestCriticalStrike: z.number().gte(0),
  largestKillingSpree: z.number().gte(0),
  largestMultiKill: z.number().gte(0),
  level: z.number().gte(1),
  magicDamage: loLGamePlayerDamageForStats,
  masteries: z.array(loLMastery),
  minionsKilled: z.number().gte(0),
  opponent: loLGamePlayerForStatsOpponent,
  physicalDamage: loLGamePlayerDamageForStats,
  player: basePlayer,
  playerId: z.number().gte(1),
  role: loLGamePlayerForStatsRole,
  runes: z.array(loLRune),
  runesReforged: loLPlayerRunesReforged,
  spells: z.array(loLSpell),
  team: baseTeam,
  totalDamage: loLGamePlayerDamageForStats,
  totalHeal: z.number().gte(0),
  totalTimeCrowdControlDealt: z.number().gte(0),
  totalUnitsHealed: z.number().gte(0),
  trueDamage: loLGamePlayerDamageForStats,
  wards: loLWards,
  wardsPlaced: z.number().gte(0),
});

/**
 * Player's data for a Game
 * @typedef  {LoLGamePlayerForStats} loLGamePlayerForStats - Player's data for a Game - Player's data for a Game
 * @property {number}
 * @property {LoLGamePlayerForStatsChampion}
 * @property {number} - The player's Creep Score (CS.) <br/> <br/>NB: Creep Score can be different that the number of minions killed because neutral monsters can give more score.
 * @property {number} - The player's Creep Score (CS.) at 14minutes
 * @property {number}
 * @property {LoLFlags}
 * @property {number} - LoL game ID
 * @property {number}
 * @property {number}
 * @property {BaseLoLItem[]}
 * @property {number}
 * @property {LoLKillCounters}
 * @property {LoLKillsSeries}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {LoLGamePlayerDamageForStats}
 * @property {LoLMastery[]}
 * @property {number} - The player's Creep Score (CS.)
 * @property {LoLGamePlayerForStatsOpponent}
 * @property {LoLGamePlayerDamageForStats}
 * @property {BasePlayer}
 * @property {number} - ID of the player
 * @property {LoLGamePlayerForStatsRole}
 * @property {LoLRune[]}
 * @property {LoLPlayerRunesReforged}
 * @property {LoLSpell[]}
 * @property {BaseTeam}
 * @property {LoLGamePlayerDamageForStats}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {LoLGamePlayerDamageForStats}
 * @property {LoLWards}
 * @property {number}
 */
export type LoLGamePlayerForStats = z.infer<typeof loLGamePlayerForStats>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const loLGamePlayerForStatsResponse = z
  .object({
    assists: z.number().gte(0),
    champion: loLGamePlayerForStatsChampionResponse,
    creep_score: z.number().gte(0),
    cs_at_14: z.number().gte(0),
    deaths: z.number().gte(0),
    flags: loLFlagsResponse,
    game_id: z.number().gte(1),
    gold_earned: z.number().gte(0),
    gold_spent: z.number().gte(0),
    items: z.array(baseLoLItemResponse),
    kills: z.number().gte(0),
    kills_counters: loLKillCountersResponse,
    kills_series: loLKillsSeriesResponse,
    largest_critical_strike: z.number().gte(0),
    largest_killing_spree: z.number().gte(0),
    largest_multi_kill: z.number().gte(0),
    level: z.number().gte(1),
    magic_damage: loLGamePlayerDamageForStatsResponse,
    masteries: z.array(loLMasteryResponse),
    minions_killed: z.number().gte(0),
    opponent: loLGamePlayerForStatsOpponentResponse,
    physical_damage: loLGamePlayerDamageForStatsResponse,
    player: basePlayerResponse,
    player_id: z.number().gte(1),
    role: loLGamePlayerForStatsRole,
    runes: z.array(loLRuneResponse),
    runes_reforged: loLPlayerRunesReforgedResponse,
    spells: z.array(loLSpellResponse),
    team: baseTeamResponse,
    total_damage: loLGamePlayerDamageForStatsResponse,
    total_heal: z.number().gte(0),
    total_time_crowd_control_dealt: z.number().gte(0),
    total_units_healed: z.number().gte(0),
    true_damage: loLGamePlayerDamageForStatsResponse,
    wards: loLWardsResponse,
    wards_placed: z.number().gte(0),
  })
  .transform((data) => ({
    assists: data['assists'],
    champion: data['champion'],
    creepScore: data['creep_score'],
    csAt14: data['cs_at_14'],
    deaths: data['deaths'],
    flags: data['flags'],
    gameId: data['game_id'],
    goldEarned: data['gold_earned'],
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

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const loLGamePlayerForStatsRequest = z
  .object({
    assists: z.number().nullish(),
    champion: loLGamePlayerForStatsChampionRequest.nullish(),
    creepScore: z.number().nullish(),
    csAt14: z.number().nullish(),
    deaths: z.number().nullish(),
    flags: loLFlagsRequest.nullish(),
    gameId: z.number().nullish(),
    goldEarned: z.number().nullish(),
    goldSpent: z.number().nullish(),
    items: z.array(baseLoLItemRequest).nullish(),
    kills: z.number().nullish(),
    killsCounters: loLKillCountersRequest.nullish(),
    killsSeries: loLKillsSeriesRequest.nullish(),
    largestCriticalStrike: z.number().nullish(),
    largestKillingSpree: z.number().nullish(),
    largestMultiKill: z.number().nullish(),
    level: z.number().nullish(),
    magicDamage: loLGamePlayerDamageForStatsRequest.nullish(),
    masteries: z.array(loLMasteryRequest).nullish(),
    minionsKilled: z.number().nullish(),
    opponent: loLGamePlayerForStatsOpponentRequest.nullish(),
    physicalDamage: loLGamePlayerDamageForStatsRequest.nullish(),
    player: basePlayerRequest.nullish(),
    playerId: z.number().nullish(),
    role: loLGamePlayerForStatsRole.nullish(),
    runes: z.array(loLRuneRequest).nullish(),
    runesReforged: loLPlayerRunesReforgedRequest.nullish(),
    spells: z.array(loLSpellRequest).nullish(),
    team: baseTeamRequest.nullish(),
    totalDamage: loLGamePlayerDamageForStatsRequest.nullish(),
    totalHeal: z.number().nullish(),
    totalTimeCrowdControlDealt: z.number().nullish(),
    totalUnitsHealed: z.number().nullish(),
    trueDamage: loLGamePlayerDamageForStatsRequest.nullish(),
    wards: loLWardsRequest.nullish(),
    wardsPlaced: z.number().nullish(),
  })
  .transform((data) => ({
    assists: data['assists'],
    champion: data['champion'],
    creep_score: data['creepScore'],
    cs_at_14: data['csAt14'],
    deaths: data['deaths'],
    flags: data['flags'],
    game_id: data['gameId'],
    gold_earned: data['goldEarned'],
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
