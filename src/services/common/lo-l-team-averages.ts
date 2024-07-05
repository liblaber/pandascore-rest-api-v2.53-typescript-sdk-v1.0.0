import { z } from 'zod';
import { loLTeamRatios, loLTeamRatiosRequest, loLTeamRatiosResponse } from './lo-l-team-ratios';

/**
 * The shape of the model inside the application code - what the users use
 */
export const loLTeamAverages = z.object({
  assists: z.number().gte(0),
  baronKills: z.number().gte(0),
  deaths: z.number().gte(0),
  dragonKills: z.number().gte(0),
  gameLength: z.number().gte(0),
  goldEarned: z.number().gte(0),
  heraldKill: z.number().gte(0),
  inhibitorKills: z.number().gte(0),
  kills: z.number().gte(0),
  ratios: loLTeamRatios,
  totalMinionsKilled: z.number().gte(0),
  towerKills: z.number().gte(0),
  voidgrubKills: z.number().gte(0).lte(6),
  wardsPlaced: z.number().gte(0),
});

/**
 *
 * @typedef  {LoLTeamAverages} loLTeamAverages
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number} - Duration of the game in seconds. <br/>`null` when the game status is not `finished`
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {LoLTeamRatios}
 * @property {number}
 * @property {number}
 * @property {number} - The number of voidgrubs killed by a team.
 * @property {number}
 */
export type LoLTeamAverages = z.infer<typeof loLTeamAverages>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const loLTeamAveragesResponse = z
  .object({
    assists: z.number().gte(0),
    baron_kills: z.number().gte(0),
    deaths: z.number().gte(0),
    dragon_kills: z.number().gte(0),
    game_length: z.number().gte(0),
    gold_earned: z.number().gte(0),
    herald_kill: z.number().gte(0),
    inhibitor_kills: z.number().gte(0),
    kills: z.number().gte(0),
    ratios: loLTeamRatiosResponse,
    total_minions_killed: z.number().gte(0),
    tower_kills: z.number().gte(0),
    voidgrub_kills: z.number().gte(0).lte(6),
    wards_placed: z.number().gte(0),
  })
  .transform((data) => ({
    assists: data['assists'],
    baronKills: data['baron_kills'],
    deaths: data['deaths'],
    dragonKills: data['dragon_kills'],
    gameLength: data['game_length'],
    goldEarned: data['gold_earned'],
    heraldKill: data['herald_kill'],
    inhibitorKills: data['inhibitor_kills'],
    kills: data['kills'],
    ratios: data['ratios'],
    totalMinionsKilled: data['total_minions_killed'],
    towerKills: data['tower_kills'],
    voidgrubKills: data['voidgrub_kills'],
    wardsPlaced: data['wards_placed'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const loLTeamAveragesRequest = z
  .object({
    assists: z.number().nullish(),
    baronKills: z.number().nullish(),
    deaths: z.number().nullish(),
    dragonKills: z.number().nullish(),
    gameLength: z.number().nullish(),
    goldEarned: z.number().nullish(),
    heraldKill: z.number().nullish(),
    inhibitorKills: z.number().nullish(),
    kills: z.number().nullish(),
    ratios: loLTeamRatiosRequest.nullish(),
    totalMinionsKilled: z.number().nullish(),
    towerKills: z.number().nullish(),
    voidgrubKills: z.number().nullish(),
    wardsPlaced: z.number().nullish(),
  })
  .transform((data) => ({
    assists: data['assists'],
    baron_kills: data['baronKills'],
    deaths: data['deaths'],
    dragon_kills: data['dragonKills'],
    game_length: data['gameLength'],
    gold_earned: data['goldEarned'],
    herald_kill: data['heraldKill'],
    inhibitor_kills: data['inhibitorKills'],
    kills: data['kills'],
    ratios: data['ratios'],
    total_minions_killed: data['totalMinionsKilled'],
    tower_kills: data['towerKills'],
    voidgrub_kills: data['voidgrubKills'],
    wards_placed: data['wardsPlaced'],
  }));
