import { z } from 'zod';
import {
  loLPlayerTotalKillCounters,
  loLPlayerTotalKillCountersRequest,
  loLPlayerTotalKillCountersResponse,
} from './lo-l-player-total-kill-counters';
import { loLKillsSeries, loLKillsSeriesRequest, loLKillsSeriesResponse } from './lo-l-kills-series';

/**
 * The shape of the model inside the application code - what the users use
 */
export const loLPlayerStatsTotals = z.object({
  assists: z.number().gte(0),
  deaths: z.number().gte(0),
  gamesLost: z.number().gte(0),
  gamesPlayed: z.number().gte(0),
  gamesWon: z.number().gte(0),
  killCounters: loLPlayerTotalKillCounters,
  kills: z.number().gte(0),
  killsSeries: loLKillsSeries,
  matchesLost: z.number().gte(0),
  matchesPlayed: z.number().gte(0),
  matchesWon: z.number().gte(0),
  wardsPlaced: z.number().gte(0),
});

/**
 *
 * @typedef  {LoLPlayerStatsTotals} loLPlayerStatsTotals
 * @property {number}
 * @property {number}
 * @property {number} - Number of games
 * @property {number} - Number of games
 * @property {number} - Number of games
 * @property {LoLPlayerTotalKillCounters}
 * @property {number}
 * @property {LoLKillsSeries}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 */
export type LoLPlayerStatsTotals = z.infer<typeof loLPlayerStatsTotals>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const loLPlayerStatsTotalsResponse = z
  .object({
    assists: z.number().gte(0),
    deaths: z.number().gte(0),
    games_lost: z.number().gte(0),
    games_played: z.number().gte(0),
    games_won: z.number().gte(0),
    kill_counters: loLPlayerTotalKillCountersResponse,
    kills: z.number().gte(0),
    kills_series: loLKillsSeriesResponse,
    matches_lost: z.number().gte(0),
    matches_played: z.number().gte(0),
    matches_won: z.number().gte(0),
    wards_placed: z.number().gte(0),
  })
  .transform((data) => ({
    assists: data['assists'],
    deaths: data['deaths'],
    gamesLost: data['games_lost'],
    gamesPlayed: data['games_played'],
    gamesWon: data['games_won'],
    killCounters: data['kill_counters'],
    kills: data['kills'],
    killsSeries: data['kills_series'],
    matchesLost: data['matches_lost'],
    matchesPlayed: data['matches_played'],
    matchesWon: data['matches_won'],
    wardsPlaced: data['wards_placed'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const loLPlayerStatsTotalsRequest = z
  .object({
    assists: z.number().nullish(),
    deaths: z.number().nullish(),
    gamesLost: z.number().nullish(),
    gamesPlayed: z.number().nullish(),
    gamesWon: z.number().nullish(),
    killCounters: loLPlayerTotalKillCountersRequest.nullish(),
    kills: z.number().nullish(),
    killsSeries: loLKillsSeriesRequest.nullish(),
    matchesLost: z.number().nullish(),
    matchesPlayed: z.number().nullish(),
    matchesWon: z.number().nullish(),
    wardsPlaced: z.number().nullish(),
  })
  .transform((data) => ({
    assists: data['assists'],
    deaths: data['deaths'],
    games_lost: data['gamesLost'],
    games_played: data['gamesPlayed'],
    games_won: data['gamesWon'],
    kill_counters: data['killCounters'],
    kills: data['kills'],
    kills_series: data['killsSeries'],
    matches_lost: data['matchesLost'],
    matches_played: data['matchesPlayed'],
    matches_won: data['matchesWon'],
    wards_placed: data['wardsPlaced'],
  }));
