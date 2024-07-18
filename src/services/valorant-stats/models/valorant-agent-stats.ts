import { z } from 'zod';
import {
  valorantPlayerClutchWins,
  valorantPlayerClutchWinsRequest,
  valorantPlayerClutchWinsResponse,
} from '../../common/valorant-player-clutch-wins';
import {
  valorantPlayerStreaks,
  valorantPlayerStreaksRequest,
  valorantPlayerStreaksResponse,
} from '../../common/valorant-player-streaks';

/**
 * The shape of the model inside the application code - what the users use
 */
export const valorantAgentStats: any = z.lazy(() => {
  return z.object({
    assists: z.number().gte(0),
    clutchWins: valorantPlayerClutchWins,
    deaths: z.number().gte(0),
    defusedSpikes: z.number().gte(0),
    firstDeaths: z.number().gte(0),
    firstKills: z.number().gte(0),
    headshotPercentage: z.number().gte(0).lte(100),
    id: z.number().gte(1),
    kills: z.number().gte(0),
    losses: z.number().gte(0),
    name: z.string(),
    picks: z.number().gte(0),
    plantedSpikes: z.number().gte(0),
    portraitUrl: z.string(),
    roundsPlayed: z.number().gte(0),
    streaks: valorantPlayerStreaks,
    videogameVersions: z.array(z.string()),
    wins: z.number().gte(0),
  });
});

/**
 *
 * @typedef  {ValorantAgentStats} valorantAgentStats
 * @property {number} - Number of player's assists
 * @property {ValorantPlayerClutchWins} - Round wins when the player was the last team member alive
 * @property {number} - Number of player's death
 * @property {number} - Number of spikes defused by the player
 * @property {number} - Number of rounds where the player died first
 * @property {number} - Number of rounds where the player did the first kill
 * @property {number} - Percentage of headshots within the player's shots
 * @property {number} - ID of the agent
 * @property {number} - Number of player's kills
 * @property {number} - Number of games lost with this agent
 * @property {string} - Name of the agent
 * @property {number} - Number of times the agent was picked
 * @property {number} - Number of spikes planted by the player
 * @property {string} - URL to a portrait image of the agent
 * @property {number} - Number of rounds played
 * @property {ValorantPlayerStreaks} - Streaks done by the player (in a given round)
 * @property {string[]} - Array of of video game versions (ie. patches) for this resource
 * @property {number} - Number of games won with this agent
 */
export type ValorantAgentStats = z.infer<typeof valorantAgentStats>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const valorantAgentStatsResponse: any = z.lazy(() => {
  return z
    .object({
      assists: z.number().gte(0),
      clutch_wins: valorantPlayerClutchWinsResponse,
      deaths: z.number().gte(0),
      defused_spikes: z.number().gte(0),
      first_deaths: z.number().gte(0),
      first_kills: z.number().gte(0),
      headshot_percentage: z.number().gte(0).lte(100),
      id: z.number().gte(1),
      kills: z.number().gte(0),
      losses: z.number().gte(0),
      name: z.string(),
      picks: z.number().gte(0),
      planted_spikes: z.number().gte(0),
      portrait_url: z.string(),
      rounds_played: z.number().gte(0),
      streaks: valorantPlayerStreaksResponse,
      videogame_versions: z.array(z.string()),
      wins: z.number().gte(0),
    })
    .transform((data) => ({
      assists: data['assists'],
      clutchWins: data['clutch_wins'],
      deaths: data['deaths'],
      defusedSpikes: data['defused_spikes'],
      firstDeaths: data['first_deaths'],
      firstKills: data['first_kills'],
      headshotPercentage: data['headshot_percentage'],
      id: data['id'],
      kills: data['kills'],
      losses: data['losses'],
      name: data['name'],
      picks: data['picks'],
      plantedSpikes: data['planted_spikes'],
      portraitUrl: data['portrait_url'],
      roundsPlayed: data['rounds_played'],
      streaks: data['streaks'],
      videogameVersions: data['videogame_versions'],
      wins: data['wins'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const valorantAgentStatsRequest: any = z.lazy(() => {
  return z
    .object({
      assists: z.number().nullish(),
      clutchWins: valorantPlayerClutchWinsRequest.nullish(),
      deaths: z.number().nullish(),
      defusedSpikes: z.number().nullish(),
      firstDeaths: z.number().nullish(),
      firstKills: z.number().nullish(),
      headshotPercentage: z.number().nullish(),
      id: z.number().nullish(),
      kills: z.number().nullish(),
      losses: z.number().nullish(),
      name: z.string().nullish(),
      picks: z.number().nullish(),
      plantedSpikes: z.number().nullish(),
      portraitUrl: z.string().nullish(),
      roundsPlayed: z.number().nullish(),
      streaks: valorantPlayerStreaksRequest.nullish(),
      videogameVersions: z.array(z.string()).nullish(),
      wins: z.number().nullish(),
    })
    .transform((data) => ({
      assists: data['assists'],
      clutch_wins: data['clutchWins'],
      deaths: data['deaths'],
      defused_spikes: data['defusedSpikes'],
      first_deaths: data['firstDeaths'],
      first_kills: data['firstKills'],
      headshot_percentage: data['headshotPercentage'],
      id: data['id'],
      kills: data['kills'],
      losses: data['losses'],
      name: data['name'],
      picks: data['picks'],
      planted_spikes: data['plantedSpikes'],
      portrait_url: data['portraitUrl'],
      rounds_played: data['roundsPlayed'],
      streaks: data['streaks'],
      videogame_versions: data['videogameVersions'],
      wins: data['wins'],
    }));
});