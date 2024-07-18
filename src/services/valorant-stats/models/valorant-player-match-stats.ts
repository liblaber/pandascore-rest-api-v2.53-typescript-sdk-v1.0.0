import { z } from 'zod';
import { valorantAgentStats, valorantAgentStatsRequest, valorantAgentStatsResponse } from './valorant-agent-stats';
import {
  valorantPlayerClutchWins,
  valorantPlayerClutchWinsRequest,
  valorantPlayerClutchWinsResponse,
} from '../../common/valorant-player-clutch-wins';
import { basePlayer, basePlayerRequest, basePlayerResponse } from '../../common/base-player';
import {
  valorantPlayerStreaks,
  valorantPlayerStreaksRequest,
  valorantPlayerStreaksResponse,
} from '../../common/valorant-player-streaks';

/**
 * The shape of the model inside the application code - what the users use
 */
export const valorantPlayerMatchStats: any = z.lazy(() => {
  return z.object({
    agents: z.array(valorantAgentStats),
    assists: z.number().gte(0).nullable(),
    averageDamagePerRound: z.number().gte(0).nullable(),
    clutchWins: valorantPlayerClutchWins,
    deaths: z.number().gte(0).nullable(),
    defusedSpikes: z.number().gte(0).nullable(),
    firstDeaths: z.number().gte(0).nullable(),
    firstKillPercentage: z.number().gte(0).lte(100).nullable(),
    firstKills: z.number().gte(0).nullable(),
    headshotPercentage: z.number().gte(0).lte(100).nullable(),
    kills: z.number().gte(0).nullable(),
    plantedSpikes: z.number().gte(0).nullable(),
    player: basePlayer,
    streaks: valorantPlayerStreaks,
    teamId: z.number().gte(1),
    totalGames: z.number().gte(0),
  });
});

/**
 *
 * @typedef  {ValorantPlayerMatchStats} valorantPlayerMatchStats
 * @property {ValorantAgentStats[]} - Agents picks, wins, and losses stats for this map
 * @property {number} - Number of player's assists
 * @property {number} - Average damage per round (ADR) of the player
 * @property {ValorantPlayerClutchWins} - Round wins when the player was the last team member alive
 * @property {number} - Number of player's death
 * @property {number} - Number of spikes defused by the player
 * @property {number} - Number of rounds where the player died first
 * @property {number} - First kill percentage of the player
 * @property {number} - Number of rounds where the player did the first kill
 * @property {number} - Percentage of headshots within the player's shots
 * @property {number} - Number of player's kills
 * @property {number} - Number of spikes planted by the player
 * @property {BasePlayer}
 * @property {ValorantPlayerStreaks} - Streaks done by the player (in a given round)
 * @property {number}
 * @property {number} - Amount of games played by the player
 */
export type ValorantPlayerMatchStats = z.infer<typeof valorantPlayerMatchStats>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const valorantPlayerMatchStatsResponse: any = z.lazy(() => {
  return z
    .object({
      agents: z.array(valorantAgentStatsResponse),
      assists: z.number().gte(0).nullable(),
      average_damage_per_round: z.number().gte(0).nullable(),
      clutch_wins: valorantPlayerClutchWinsResponse,
      deaths: z.number().gte(0).nullable(),
      defused_spikes: z.number().gte(0).nullable(),
      first_deaths: z.number().gte(0).nullable(),
      first_kill_percentage: z.number().gte(0).lte(100).nullable(),
      first_kills: z.number().gte(0).nullable(),
      headshot_percentage: z.number().gte(0).lte(100).nullable(),
      kills: z.number().gte(0).nullable(),
      planted_spikes: z.number().gte(0).nullable(),
      player: basePlayerResponse,
      streaks: valorantPlayerStreaksResponse,
      team_id: z.number().gte(1),
      total_games: z.number().gte(0),
    })
    .transform((data) => ({
      agents: data['agents'],
      assists: data['assists'],
      averageDamagePerRound: data['average_damage_per_round'],
      clutchWins: data['clutch_wins'],
      deaths: data['deaths'],
      defusedSpikes: data['defused_spikes'],
      firstDeaths: data['first_deaths'],
      firstKillPercentage: data['first_kill_percentage'],
      firstKills: data['first_kills'],
      headshotPercentage: data['headshot_percentage'],
      kills: data['kills'],
      plantedSpikes: data['planted_spikes'],
      player: data['player'],
      streaks: data['streaks'],
      teamId: data['team_id'],
      totalGames: data['total_games'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const valorantPlayerMatchStatsRequest: any = z.lazy(() => {
  return z
    .object({
      agents: z.array(valorantAgentStatsRequest).nullish(),
      assists: z.number().nullish(),
      averageDamagePerRound: z.number().nullish(),
      clutchWins: valorantPlayerClutchWinsRequest.nullish(),
      deaths: z.number().nullish(),
      defusedSpikes: z.number().nullish(),
      firstDeaths: z.number().nullish(),
      firstKillPercentage: z.number().nullish(),
      firstKills: z.number().nullish(),
      headshotPercentage: z.number().nullish(),
      kills: z.number().nullish(),
      plantedSpikes: z.number().nullish(),
      player: basePlayerRequest.nullish(),
      streaks: valorantPlayerStreaksRequest.nullish(),
      teamId: z.number().nullish(),
      totalGames: z.number().nullish(),
    })
    .transform((data) => ({
      agents: data['agents'],
      assists: data['assists'],
      average_damage_per_round: data['averageDamagePerRound'],
      clutch_wins: data['clutchWins'],
      deaths: data['deaths'],
      defused_spikes: data['defusedSpikes'],
      first_deaths: data['firstDeaths'],
      first_kill_percentage: data['firstKillPercentage'],
      first_kills: data['firstKills'],
      headshot_percentage: data['headshotPercentage'],
      kills: data['kills'],
      planted_spikes: data['plantedSpikes'],
      player: data['player'],
      streaks: data['streaks'],
      team_id: data['teamId'],
      total_games: data['totalGames'],
    }));
});
