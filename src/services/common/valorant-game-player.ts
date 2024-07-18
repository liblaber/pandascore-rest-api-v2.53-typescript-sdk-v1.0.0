import { z } from 'zod';
import { valorantShortAgent, valorantShortAgentRequest, valorantShortAgentResponse } from './valorant-short-agent';
import {
  valorantPlayerClutchWins,
  valorantPlayerClutchWinsRequest,
  valorantPlayerClutchWinsResponse,
} from './valorant-player-clutch-wins';
import {
  valorantPlayerStreaks,
  valorantPlayerStreaksRequest,
  valorantPlayerStreaksResponse,
} from './valorant-player-streaks';

/**
 * The shape of the model inside the application code - what the users use
 */
export const valorantGamePlayer: any = z.lazy(() => {
  return z.object({
    active: z.boolean(),
    age: z.number().gte(0).nullable(),
    agent: valorantShortAgent,
    assists: z.number().gte(0),
    averageCombatScore: z.number().gte(0).nullable(),
    averageDamagePerRound: z.number().gte(0).nullable(),
    averageEconomyScore: z.number().gte(0).nullable(),
    birthday: z.string().nullable(),
    clutchWins: valorantPlayerClutchWins,
    deaths: z.number().gte(0),
    defusedSpikes: z.number().gte(0).nullable(),
    firstDeaths: z.number().gte(0).nullable(),
    firstKills: z.number().gte(0).nullable(),
    firstName: z.string().nullable(),
    headshotPercentage: z.number().gte(0).lte(100).nullable(),
    id: z.number().gte(1),
    imageUrl: z.string().nullable(),
    killDeathDifference: z.number(),
    kills: z.number().gte(0),
    killsPerDeath: z.number().gte(0),
    lastName: z.string().nullable(),
    modifiedAt: z.string().min(1),
    name: z.string(),
    nationality: z.string().nullable(),
    plantedSpikes: z.number().gte(0).nullable(),
    role: z.string().nullable(),
    slug: z
      .string()
      .min(1)
      .regex(/^[a-z0-9_-]+$/)
      .nullable(),
    streaks: valorantPlayerStreaks,
  });
});

/**
 *
 * @typedef  {ValorantGamePlayer} valorantGamePlayer
 * @property {boolean} - Whether player is active
 * @property {number} - Age of the player, `null` if unknown. When `birthday` is `null`, `age` is an approxiamation. Read more about [players' age](/docs/about-players-age) <br/>**Note**: This field is only present for users running the Historical plan or above.
 * @property {ValorantShortAgent}
 * @property {number} - Number of player's assists
 * @property {number} - Average combat score (ACS) of the player
 * @property {number} - Average damage per round (ADR) of the player
 * @property {number} - Average economy score (ECS) of the player
 * @property {string} - Birth day of the player, `YYYY-MM-DD` format. `null` if unknown. <br/>**Note**: This field is only present for users running the Historical plan or above.
 * @property {ValorantPlayerClutchWins} - Round wins when the player was the last team member alive
 * @property {number} - Number of player's death
 * @property {number} - Number of spikes defused by the player
 * @property {number} - Number of rounds where the player died first
 * @property {number} - Number of rounds where the player did the first kill
 * @property {string} - First name of the player. `null` if unknown
 * @property {number} - Percentage of headshots within the player's shots
 * @property {number} - ID of the player
 * @property {string} - URL to the photo of the player. `null` if not available.
 * @property {number} - Difference between the player's number of kills and number of death (kills - deaths)
 * @property {number} - Number of player's kills
 * @property {number} - Ratio of player's kills per deaths (kills / deaths)
 * @property {string} - Last name of the player. `null` if unknown
 * @property {string}
 * @property {string} - Professional name of the player
 * @property {string} - Country code matching the nationality of the player according to the ISO 3166-1 standard (Alpha-2 code). <br/>In addition to the standard, the `XK` code is used for Kosovo. <br/>`null` if unknown
 * @property {number} - Number of spikes planted by the player
 * @property {string} - Role/position of the player. Field value varies depending on the video game.`null` if unknown. <br/>**Note**: role is only available for DotA 2, League of Legends, and Overwatch players. <br/>`null` for other video games.
 * @property {string} - Unique, human-readable identifier for the player. <br/>`id` and `slug` can be used interchangeably throughout the API.
 * @property {ValorantPlayerStreaks} - Streaks done by the player (in a given round)
 */
export type ValorantGamePlayer = z.infer<typeof valorantGamePlayer>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const valorantGamePlayerResponse: any = z.lazy(() => {
  return z
    .object({
      active: z.boolean(),
      age: z.number().gte(0).nullable(),
      agent: valorantShortAgentResponse,
      assists: z.number().gte(0),
      average_combat_score: z.number().gte(0).nullable(),
      average_damage_per_round: z.number().gte(0).nullable(),
      average_economy_score: z.number().gte(0).nullable(),
      birthday: z.string().nullable(),
      clutch_wins: valorantPlayerClutchWinsResponse,
      deaths: z.number().gte(0),
      defused_spikes: z.number().gte(0).nullable(),
      first_deaths: z.number().gte(0).nullable(),
      first_kills: z.number().gte(0).nullable(),
      first_name: z.string().nullable(),
      headshot_percentage: z.number().gte(0).lte(100).nullable(),
      id: z.number().gte(1),
      image_url: z.string().nullable(),
      kill_death_difference: z.number(),
      kills: z.number().gte(0),
      kills_per_death: z.number().gte(0),
      last_name: z.string().nullable(),
      modified_at: z.string().min(1),
      name: z.string(),
      nationality: z.string().nullable(),
      planted_spikes: z.number().gte(0).nullable(),
      role: z.string().nullable(),
      slug: z
        .string()
        .min(1)
        .regex(/^[a-z0-9_-]+$/)
        .nullable(),
      streaks: valorantPlayerStreaksResponse,
    })
    .transform((data) => ({
      active: data['active'],
      age: data['age'],
      agent: data['agent'],
      assists: data['assists'],
      averageCombatScore: data['average_combat_score'],
      averageDamagePerRound: data['average_damage_per_round'],
      averageEconomyScore: data['average_economy_score'],
      birthday: data['birthday'],
      clutchWins: data['clutch_wins'],
      deaths: data['deaths'],
      defusedSpikes: data['defused_spikes'],
      firstDeaths: data['first_deaths'],
      firstKills: data['first_kills'],
      firstName: data['first_name'],
      headshotPercentage: data['headshot_percentage'],
      id: data['id'],
      imageUrl: data['image_url'],
      killDeathDifference: data['kill_death_difference'],
      kills: data['kills'],
      killsPerDeath: data['kills_per_death'],
      lastName: data['last_name'],
      modifiedAt: data['modified_at'],
      name: data['name'],
      nationality: data['nationality'],
      plantedSpikes: data['planted_spikes'],
      role: data['role'],
      slug: data['slug'],
      streaks: data['streaks'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const valorantGamePlayerRequest: any = z.lazy(() => {
  return z
    .object({
      active: z.boolean().nullish(),
      age: z.number().nullish(),
      agent: valorantShortAgentRequest.nullish(),
      assists: z.number().nullish(),
      averageCombatScore: z.number().nullish(),
      averageDamagePerRound: z.number().nullish(),
      averageEconomyScore: z.number().nullish(),
      birthday: z.string().nullish(),
      clutchWins: valorantPlayerClutchWinsRequest.nullish(),
      deaths: z.number().nullish(),
      defusedSpikes: z.number().nullish(),
      firstDeaths: z.number().nullish(),
      firstKills: z.number().nullish(),
      firstName: z.string().nullish(),
      headshotPercentage: z.number().nullish(),
      id: z.number().nullish(),
      imageUrl: z.string().nullish(),
      killDeathDifference: z.number().nullish(),
      kills: z.number().nullish(),
      killsPerDeath: z.number().nullish(),
      lastName: z.string().nullish(),
      modifiedAt: z.string().nullish(),
      name: z.string().nullish(),
      nationality: z.string().nullish(),
      plantedSpikes: z.number().nullish(),
      role: z.string().nullish(),
      slug: z.string().nullish(),
      streaks: valorantPlayerStreaksRequest.nullish(),
    })
    .transform((data) => ({
      active: data['active'],
      age: data['age'],
      agent: data['agent'],
      assists: data['assists'],
      average_combat_score: data['averageCombatScore'],
      average_damage_per_round: data['averageDamagePerRound'],
      average_economy_score: data['averageEconomyScore'],
      birthday: data['birthday'],
      clutch_wins: data['clutchWins'],
      deaths: data['deaths'],
      defused_spikes: data['defusedSpikes'],
      first_deaths: data['firstDeaths'],
      first_kills: data['firstKills'],
      first_name: data['firstName'],
      headshot_percentage: data['headshotPercentage'],
      id: data['id'],
      image_url: data['imageUrl'],
      kill_death_difference: data['killDeathDifference'],
      kills: data['kills'],
      kills_per_death: data['killsPerDeath'],
      last_name: data['lastName'],
      modified_at: data['modifiedAt'],
      name: data['name'],
      nationality: data['nationality'],
      planted_spikes: data['plantedSpikes'],
      role: data['role'],
      slug: data['slug'],
      streaks: data['streaks'],
    }));
});