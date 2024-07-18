import { z } from 'zod';
import { loLTeamRatios, loLTeamRatiosRequest, loLTeamRatiosResponse } from './lo-l-team-ratios';

/**
 * The shape of the model inside the application code - what the users use
 */
export const loLTeamAverages: any = z.lazy(() => {
  return z.object({
    assists: z.number().gte(0).nullable(),
    baronKills: z.number().gte(0).nullable(),
    deaths: z.number().gte(0).nullable(),
    dragonKills: z.number().gte(0).nullable(),
    gameLength: z.number().gte(0).nullable(),
    goldEarned: z.number().gte(0).nullable(),
    heraldKill: z.number().gte(0).nullable(),
    inhibitorKills: z.number().gte(0).nullable(),
    kills: z.number().gte(0).nullable(),
    ratios: loLTeamRatios,
    totalMinionsKilled: z.number().gte(0).nullable(),
    towerKills: z.number().gte(0).nullable(),
    voidgrubKills: z.number().gte(0).lte(6).nullable(),
    wardsPlaced: z.number().gte(0).nullable(),
  });
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
export const loLTeamAveragesResponse: any = z.lazy(() => {
  return z
    .object({
      assists: z.number().gte(0).nullable(),
      baron_kills: z.number().gte(0).nullable(),
      deaths: z.number().gte(0).nullable(),
      dragon_kills: z.number().gte(0).nullable(),
      game_length: z.number().gte(0).nullable(),
      gold_earned: z.number().gte(0).nullable(),
      herald_kill: z.number().gte(0).nullable(),
      inhibitor_kills: z.number().gte(0).nullable(),
      kills: z.number().gte(0).nullable(),
      ratios: loLTeamRatiosResponse,
      total_minions_killed: z.number().gte(0).nullable(),
      tower_kills: z.number().gte(0).nullable(),
      voidgrub_kills: z.number().gte(0).lte(6).nullable(),
      wards_placed: z.number().gte(0).nullable(),
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
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const loLTeamAveragesRequest: any = z.lazy(() => {
  return z
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
});
