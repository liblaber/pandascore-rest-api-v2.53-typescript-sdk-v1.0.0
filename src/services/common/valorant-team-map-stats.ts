import { z } from 'zod';
import {
  valorantAgentStats,
  valorantAgentStatsRequest,
  valorantAgentStatsResponse,
} from './valorant-agent-stats';
import {
  valorantTeamClutchWins,
  valorantTeamClutchWinsRequest,
  valorantTeamClutchWinsResponse,
} from './valorant-team-clutch-wins';
import {
  valorantTeamStreaks,
  valorantTeamStreaksRequest,
  valorantTeamStreaksResponse,
} from './valorant-team-streaks';

/**
 * The shape of the model inside the application code - what the users use
 */
export const valorantTeamMapStats = z.object({
  agents: z.array(valorantAgentStats),
  assists: z.number().gte(0),
  averageRounds: z.number().gte(0),
  clutchWins: valorantTeamClutchWins,
  deaths: z.number().gte(0),
  defusedSpikes: z.number().gte(0),
  draws: z.number().gte(0),
  firstDeaths: z.number().gte(0),
  firstKills: z.number().gte(0),
  headshotPercentage: z.number().gte(0).lte(100),
  id: z.number().gte(1),
  imageUrl: z.string(),
  kills: z.number().gte(0),
  killsPerDeath: z.number().gte(0),
  losses: z.number().gte(0),
  name: z.string(),
  pistolRoundLosses: z.number().gte(0),
  pistolRoundTotalPlayed: z.number().gte(0),
  pistolRoundWins: z.number().gte(0),
  plantedSpikes: z.number().gte(0),
  slug: z
    .string()
    .min(1)
    .regex(/^[a-z0-9_-]+$/),
  streaks: valorantTeamStreaks,
  totalPlayed: z.number().gte(0),
  videogameVersions: z.array(z.string()),
  wins: z.number().gte(0),
});

/**
 *
 * @typedef  {ValorantTeamMapStats} valorantTeamMapStats
 * @property {ValorantAgentStats[]} - Agents picks, wins, and losses stats for this map
 * @property {number} - Number of team's assists
 * @property {number} - Average number of rounds played by the team on this map
 * @property {ValorantTeamClutchWins} - Rounds wins with a single team member alive
 * @property {number} - Number of team's death
 * @property {number} - Number of spikes defused by a team member
 * @property {number} - Number of team draws on this map
 * @property {number} - Number of rounds where a team member died first
 * @property {number} - Number of rounds where a team member did the first kill
 * @property {number} - Percentage of headshots within the player's shots
 * @property {number} - ID of the map
 * @property {string} - URL to an image of the map
 * @property {number} - Number of team's kills
 * @property {number} - Ratio of team's kills per deaths
 * @property {number} - Number of team losses on this map
 * @property {string} - Name of the map
 * @property {number} - Number of pistol rounds lost by the team
 * @property {number} - Number of pistol rounds played by the team
 * @property {number} - Number of pistol rounds won by the team
 * @property {number} - Number of spikes planted by a team member
 * @property {string} - Human-readable identifier of the map
 * @property {ValorantTeamStreaks} - Streaks done by a team member (in a given round)
 * @property {number} - Number of times the team played on this map
 * @property {string[]} - Array of of video game versions (ie. patches) for this resource
 * @property {number} - Number of team wins on this map
 */
export type ValorantTeamMapStats = z.infer<typeof valorantTeamMapStats>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const valorantTeamMapStatsResponse = z
  .object({
    agents: z.array(valorantAgentStatsResponse),
    assists: z.number().gte(0),
    average_rounds: z.number().gte(0),
    clutch_wins: valorantTeamClutchWinsResponse,
    deaths: z.number().gte(0),
    defused_spikes: z.number().gte(0),
    draws: z.number().gte(0),
    first_deaths: z.number().gte(0),
    first_kills: z.number().gte(0),
    headshot_percentage: z.number().gte(0).lte(100),
    id: z.number().gte(1),
    image_url: z.string(),
    kills: z.number().gte(0),
    kills_per_death: z.number().gte(0),
    losses: z.number().gte(0),
    name: z.string(),
    pistol_round_losses: z.number().gte(0),
    pistol_round_total_played: z.number().gte(0),
    pistol_round_wins: z.number().gte(0),
    planted_spikes: z.number().gte(0),
    slug: z
      .string()
      .min(1)
      .regex(/^[a-z0-9_-]+$/),
    streaks: valorantTeamStreaksResponse,
    total_played: z.number().gte(0),
    videogame_versions: z.array(z.string()),
    wins: z.number().gte(0),
  })
  .transform((data) => ({
    agents: data['agents'],
    assists: data['assists'],
    averageRounds: data['average_rounds'],
    clutchWins: data['clutch_wins'],
    deaths: data['deaths'],
    defusedSpikes: data['defused_spikes'],
    draws: data['draws'],
    firstDeaths: data['first_deaths'],
    firstKills: data['first_kills'],
    headshotPercentage: data['headshot_percentage'],
    id: data['id'],
    imageUrl: data['image_url'],
    kills: data['kills'],
    killsPerDeath: data['kills_per_death'],
    losses: data['losses'],
    name: data['name'],
    pistolRoundLosses: data['pistol_round_losses'],
    pistolRoundTotalPlayed: data['pistol_round_total_played'],
    pistolRoundWins: data['pistol_round_wins'],
    plantedSpikes: data['planted_spikes'],
    slug: data['slug'],
    streaks: data['streaks'],
    totalPlayed: data['total_played'],
    videogameVersions: data['videogame_versions'],
    wins: data['wins'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const valorantTeamMapStatsRequest = z
  .object({
    agents: z.array(valorantAgentStatsRequest).nullish(),
    assists: z.number().nullish(),
    averageRounds: z.number().nullish(),
    clutchWins: valorantTeamClutchWinsRequest.nullish(),
    deaths: z.number().nullish(),
    defusedSpikes: z.number().nullish(),
    draws: z.number().nullish(),
    firstDeaths: z.number().nullish(),
    firstKills: z.number().nullish(),
    headshotPercentage: z.number().nullish(),
    id: z.number().nullish(),
    imageUrl: z.string().nullish(),
    kills: z.number().nullish(),
    killsPerDeath: z.number().nullish(),
    losses: z.number().nullish(),
    name: z.string().nullish(),
    pistolRoundLosses: z.number().nullish(),
    pistolRoundTotalPlayed: z.number().nullish(),
    pistolRoundWins: z.number().nullish(),
    plantedSpikes: z.number().nullish(),
    slug: z.string().nullish(),
    streaks: valorantTeamStreaksRequest.nullish(),
    totalPlayed: z.number().nullish(),
    videogameVersions: z.array(z.string()).nullish(),
    wins: z.number().nullish(),
  })
  .transform((data) => ({
    agents: data['agents'],
    assists: data['assists'],
    average_rounds: data['averageRounds'],
    clutch_wins: data['clutchWins'],
    deaths: data['deaths'],
    defused_spikes: data['defusedSpikes'],
    draws: data['draws'],
    first_deaths: data['firstDeaths'],
    first_kills: data['firstKills'],
    headshot_percentage: data['headshotPercentage'],
    id: data['id'],
    image_url: data['imageUrl'],
    kills: data['kills'],
    kills_per_death: data['killsPerDeath'],
    losses: data['losses'],
    name: data['name'],
    pistol_round_losses: data['pistolRoundLosses'],
    pistol_round_total_played: data['pistolRoundTotalPlayed'],
    pistol_round_wins: data['pistolRoundWins'],
    planted_spikes: data['plantedSpikes'],
    slug: data['slug'],
    streaks: data['streaks'],
    total_played: data['totalPlayed'],
    videogame_versions: data['videogameVersions'],
    wins: data['wins'],
  }));
