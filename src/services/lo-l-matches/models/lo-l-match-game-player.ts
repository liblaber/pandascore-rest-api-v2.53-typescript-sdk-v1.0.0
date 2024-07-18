import { z } from 'zod';
import { loLFlags, loLFlagsRequest, loLFlagsResponse } from '../../common/lo-l-flags';
import { loLKillCounters, loLKillCountersRequest, loLKillCountersResponse } from '../../common/lo-l-kill-counters';
import { loLKillsSeries, loLKillsSeriesRequest, loLKillsSeriesResponse } from '../../common/lo-l-kills-series';
import { loLMatchGamePlayerRole } from './lo-l-match-game-player-role';

/**
 * The shape of the model inside the application code - what the users use
 */
export const loLMatchGamePlayer: any = z.lazy(() => {
  return z.object({
    assists: z.number().gte(0).nullable(),
    deaths: z.number().gte(0).nullable(),
    flags: loLFlags,
    kills: z.number().gte(0).nullable(),
    killsCounters: loLKillCounters,
    killsSeries: loLKillsSeries,
    largestCriticalStrike: z.number().gte(0).nullable(),
    largestKillingSpree: z.number().gte(0).nullable(),
    largestMultiKill: z.number().gte(0).nullable(),
    playerId: z.number().gte(1),
    role: loLMatchGamePlayerRole.nullable(),
  });
});

/**
 * Player's data for a Game in a LoL Match
 * @typedef  {LoLMatchGamePlayer} loLMatchGamePlayer - Player's data for a Game in a LoL Match - Player's data for a Game in a LoL Match
 * @property {number}
 * @property {number}
 * @property {LoLFlags}
 * @property {number}
 * @property {LoLKillCounters}
 * @property {LoLKillsSeries}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number} - ID of the player
 * @property {LoLMatchGamePlayerRole}
 */
export type LoLMatchGamePlayer = z.infer<typeof loLMatchGamePlayer>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const loLMatchGamePlayerResponse: any = z.lazy(() => {
  return z
    .object({
      assists: z.number().gte(0).nullable(),
      deaths: z.number().gte(0).nullable(),
      flags: loLFlagsResponse,
      kills: z.number().gte(0).nullable(),
      kills_counters: loLKillCountersResponse,
      kills_series: loLKillsSeriesResponse,
      largest_critical_strike: z.number().gte(0).nullable(),
      largest_killing_spree: z.number().gte(0).nullable(),
      largest_multi_kill: z.number().gte(0).nullable(),
      player_id: z.number().gte(1),
      role: loLMatchGamePlayerRole.nullable(),
    })
    .transform((data) => ({
      assists: data['assists'],
      deaths: data['deaths'],
      flags: data['flags'],
      kills: data['kills'],
      killsCounters: data['kills_counters'],
      killsSeries: data['kills_series'],
      largestCriticalStrike: data['largest_critical_strike'],
      largestKillingSpree: data['largest_killing_spree'],
      largestMultiKill: data['largest_multi_kill'],
      playerId: data['player_id'],
      role: data['role'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const loLMatchGamePlayerRequest: any = z.lazy(() => {
  return z
    .object({
      assists: z.number().nullish(),
      deaths: z.number().nullish(),
      flags: loLFlagsRequest.nullish(),
      kills: z.number().nullish(),
      killsCounters: loLKillCountersRequest.nullish(),
      killsSeries: loLKillsSeriesRequest.nullish(),
      largestCriticalStrike: z.number().nullish(),
      largestKillingSpree: z.number().nullish(),
      largestMultiKill: z.number().nullish(),
      playerId: z.number().nullish(),
      role: loLMatchGamePlayerRole.nullish(),
    })
    .transform((data) => ({
      assists: data['assists'],
      deaths: data['deaths'],
      flags: data['flags'],
      kills: data['kills'],
      kills_counters: data['killsCounters'],
      kills_series: data['killsSeries'],
      largest_critical_strike: data['largestCriticalStrike'],
      largest_killing_spree: data['largestKillingSpree'],
      largest_multi_kill: data['largestMultiKill'],
      player_id: data['playerId'],
      role: data['role'],
    }));
});
