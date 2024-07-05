import { z } from 'zod';
import {
  valorantAgentStats,
  valorantAgentStatsRequest,
  valorantAgentStatsResponse,
} from '../../common/valorant-agent-stats';
import {
  valorantPlayerClutchWins,
  valorantPlayerClutchWinsRequest,
  valorantPlayerClutchWinsResponse,
} from '../../common/valorant-player-clutch-wins';
import {
  valorantGamePlayer,
  valorantGamePlayerRequest,
  valorantGamePlayerResponse,
} from '../../common/valorant-game-player';
import { basePlayer, basePlayerRequest, basePlayerResponse } from '../../common/base-player';
import {
  valorantPlayerStreaks,
  valorantPlayerStreaksRequest,
  valorantPlayerStreaksResponse,
} from '../../common/valorant-player-streaks';
import { tournament, tournamentRequest, tournamentResponse } from '../../common/tournament';

/**
 * The shape of the model inside the application code - what the users use
 */
export const valorantStatsForPlayerByTournament = z.object({
  agents: z.array(valorantAgentStats),
  assists: z.number().gte(0),
  averageDamagePerRound: z.number().gte(0),
  clutchWins: valorantPlayerClutchWins,
  deaths: z.number().gte(0),
  defusedSpikes: z.number().gte(0),
  firstDeaths: z.number().gte(0),
  firstKillPercentage: z.number().gte(0).lte(100),
  firstKills: z.number().gte(0),
  headshotPercentage: z.number().gte(0).lte(100),
  kills: z.number().gte(0),
  lastGames: z.array(valorantGamePlayer),
  plantedSpikes: z.number().gte(0),
  player: basePlayer,
  streaks: valorantPlayerStreaks,
  totalGames: z.number().gte(0),
  tournament: tournament,
});

/**
 *
 * @typedef  {ValorantStatsForPlayerByTournament} valorantStatsForPlayerByTournament
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
 * @property {ValorantGamePlayer[]}
 * @property {number} - Number of spikes planted by the player
 * @property {BasePlayer}
 * @property {ValorantPlayerStreaks} - Streaks done by the player (in a given round)
 * @property {number} - Amount of games played by the player
 * @property {Tournament}
 */
export type ValorantStatsForPlayerByTournament = z.infer<typeof valorantStatsForPlayerByTournament>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const valorantStatsForPlayerByTournamentResponse = z
  .object({
    agents: z.array(valorantAgentStatsResponse),
    assists: z.number().gte(0),
    average_damage_per_round: z.number().gte(0),
    clutch_wins: valorantPlayerClutchWinsResponse,
    deaths: z.number().gte(0),
    defused_spikes: z.number().gte(0),
    first_deaths: z.number().gte(0),
    first_kill_percentage: z.number().gte(0).lte(100),
    first_kills: z.number().gte(0),
    headshot_percentage: z.number().gte(0).lte(100),
    kills: z.number().gte(0),
    last_games: z.array(valorantGamePlayerResponse),
    planted_spikes: z.number().gte(0),
    player: basePlayerResponse,
    streaks: valorantPlayerStreaksResponse,
    total_games: z.number().gte(0),
    tournament: tournamentResponse,
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
    lastGames: data['last_games'],
    plantedSpikes: data['planted_spikes'],
    player: data['player'],
    streaks: data['streaks'],
    totalGames: data['total_games'],
    tournament: data['tournament'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const valorantStatsForPlayerByTournamentRequest = z
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
    lastGames: z.array(valorantGamePlayerRequest).nullish(),
    plantedSpikes: z.number().nullish(),
    player: basePlayerRequest.nullish(),
    streaks: valorantPlayerStreaksRequest.nullish(),
    totalGames: z.number().nullish(),
    tournament: tournamentRequest.nullish(),
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
    last_games: data['lastGames'],
    planted_spikes: data['plantedSpikes'],
    player: data['player'],
    streaks: data['streaks'],
    total_games: data['totalGames'],
    tournament: data['tournament'],
  }));
