import { z } from 'zod';
import { dota2TeamRatios, dota2TeamRatiosRequest, dota2TeamRatiosResponse } from './dota2-team-ratios';

/**
 * The shape of the model inside the application code - what the users use
 */
export const dota2TeamAverages: any = z.lazy(() => {
  return z.object({
    assists: z.number().gte(0).nullable(),
    barracks: z.number().gte(0).nullable(),
    campsStacked: z.number().gte(0).nullable(),
    creepsStacked: z.number().gte(0).nullable(),
    damageTaken: z.number().gte(0).nullable(),
    deaths: z.number().gte(0).nullable(),
    denies: z.number().gte(0).nullable(),
    gameLength: z.number().gte(0).nullable(),
    goldPerMin: z.number().gte(0).nullable(),
    goldSpent: z.number().gte(0).nullable(),
    heal: z.number().gte(0).nullable(),
    heroDamage: z.number().gte(0).nullable(),
    kills: z.number().gte(0).nullable(),
    laneCreep: z.number().gte(0).nullable(),
    lastHits: z.number().gte(0).nullable(),
    netWorth: z.number().gte(0).nullable(),
    neutralCreep: z.number().gte(0).nullable(),
    observerUsed: z.number().gte(0).nullable(),
    observerWardsDestroyed: z.number().gte(0).nullable(),
    observerWardsPurchased: z.number().gte(0).nullable(),
    ratios: dota2TeamRatios,
    roshanKills: z.number().gte(0).nullable(),
    sentryUsed: z.number().gte(0).nullable(),
    sentryWardsDestroyed: z.number().gte(0).nullable(),
    sentryWardsPurchased: z.number().gte(0).nullable(),
    towerDamage: z.number().gte(0).nullable(),
    towerKills: z.number().gte(0).nullable(),
    xpPerMin: z.number().gte(0).nullable(),
  });
});

/**
 *
 * @typedef  {Dota2TeamAverages} dota2TeamAverages
 * @property {number}
 * @property {number}
 * @property {number} - The average number of camps stacked by the team
 * @property {number}
 * @property {number} - The average damage taken by the team
 * @property {number}
 * @property {number} - Average number of denies per game
 * @property {number} - Duration of the game in seconds. <br/>`null` when the game status is not `finished`
 * @property {number}
 * @property {number} - The average of the team's gold spent
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {Dota2TeamRatios}
 * @property {number} - The average number of Roshans killed by the team
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 */
export type Dota2TeamAverages = z.infer<typeof dota2TeamAverages>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const dota2TeamAveragesResponse: any = z.lazy(() => {
  return z
    .object({
      assists: z.number().gte(0).nullable(),
      barracks: z.number().gte(0).nullable(),
      camps_stacked: z.number().gte(0).nullable(),
      creeps_stacked: z.number().gte(0).nullable(),
      damage_taken: z.number().gte(0).nullable(),
      deaths: z.number().gte(0).nullable(),
      denies: z.number().gte(0).nullable(),
      game_length: z.number().gte(0).nullable(),
      gold_per_min: z.number().gte(0).nullable(),
      gold_spent: z.number().gte(0).nullable(),
      heal: z.number().gte(0).nullable(),
      hero_damage: z.number().gte(0).nullable(),
      kills: z.number().gte(0).nullable(),
      lane_creep: z.number().gte(0).nullable(),
      last_hits: z.number().gte(0).nullable(),
      net_worth: z.number().gte(0).nullable(),
      neutral_creep: z.number().gte(0).nullable(),
      observer_used: z.number().gte(0).nullable(),
      observer_wards_destroyed: z.number().gte(0).nullable(),
      observer_wards_purchased: z.number().gte(0).nullable(),
      ratios: dota2TeamRatiosResponse,
      roshan_kills: z.number().gte(0).nullable(),
      sentry_used: z.number().gte(0).nullable(),
      sentry_wards_destroyed: z.number().gte(0).nullable(),
      sentry_wards_purchased: z.number().gte(0).nullable(),
      tower_damage: z.number().gte(0).nullable(),
      tower_kills: z.number().gte(0).nullable(),
      xp_per_min: z.number().gte(0).nullable(),
    })
    .transform((data) => ({
      assists: data['assists'],
      barracks: data['barracks'],
      campsStacked: data['camps_stacked'],
      creepsStacked: data['creeps_stacked'],
      damageTaken: data['damage_taken'],
      deaths: data['deaths'],
      denies: data['denies'],
      gameLength: data['game_length'],
      goldPerMin: data['gold_per_min'],
      goldSpent: data['gold_spent'],
      heal: data['heal'],
      heroDamage: data['hero_damage'],
      kills: data['kills'],
      laneCreep: data['lane_creep'],
      lastHits: data['last_hits'],
      netWorth: data['net_worth'],
      neutralCreep: data['neutral_creep'],
      observerUsed: data['observer_used'],
      observerWardsDestroyed: data['observer_wards_destroyed'],
      observerWardsPurchased: data['observer_wards_purchased'],
      ratios: data['ratios'],
      roshanKills: data['roshan_kills'],
      sentryUsed: data['sentry_used'],
      sentryWardsDestroyed: data['sentry_wards_destroyed'],
      sentryWardsPurchased: data['sentry_wards_purchased'],
      towerDamage: data['tower_damage'],
      towerKills: data['tower_kills'],
      xpPerMin: data['xp_per_min'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const dota2TeamAveragesRequest: any = z.lazy(() => {
  return z
    .object({
      assists: z.number().nullish(),
      barracks: z.number().nullish(),
      campsStacked: z.number().nullish(),
      creepsStacked: z.number().nullish(),
      damageTaken: z.number().nullish(),
      deaths: z.number().nullish(),
      denies: z.number().nullish(),
      gameLength: z.number().nullish(),
      goldPerMin: z.number().nullish(),
      goldSpent: z.number().nullish(),
      heal: z.number().nullish(),
      heroDamage: z.number().nullish(),
      kills: z.number().nullish(),
      laneCreep: z.number().nullish(),
      lastHits: z.number().nullish(),
      netWorth: z.number().nullish(),
      neutralCreep: z.number().nullish(),
      observerUsed: z.number().nullish(),
      observerWardsDestroyed: z.number().nullish(),
      observerWardsPurchased: z.number().nullish(),
      ratios: dota2TeamRatiosRequest.nullish(),
      roshanKills: z.number().nullish(),
      sentryUsed: z.number().nullish(),
      sentryWardsDestroyed: z.number().nullish(),
      sentryWardsPurchased: z.number().nullish(),
      towerDamage: z.number().nullish(),
      towerKills: z.number().nullish(),
      xpPerMin: z.number().nullish(),
    })
    .transform((data) => ({
      assists: data['assists'],
      barracks: data['barracks'],
      camps_stacked: data['campsStacked'],
      creeps_stacked: data['creepsStacked'],
      damage_taken: data['damageTaken'],
      deaths: data['deaths'],
      denies: data['denies'],
      game_length: data['gameLength'],
      gold_per_min: data['goldPerMin'],
      gold_spent: data['goldSpent'],
      heal: data['heal'],
      hero_damage: data['heroDamage'],
      kills: data['kills'],
      lane_creep: data['laneCreep'],
      last_hits: data['lastHits'],
      net_worth: data['netWorth'],
      neutral_creep: data['neutralCreep'],
      observer_used: data['observerUsed'],
      observer_wards_destroyed: data['observerWardsDestroyed'],
      observer_wards_purchased: data['observerWardsPurchased'],
      ratios: data['ratios'],
      roshan_kills: data['roshanKills'],
      sentry_used: data['sentryUsed'],
      sentry_wards_destroyed: data['sentryWardsDestroyed'],
      sentry_wards_purchased: data['sentryWardsPurchased'],
      tower_damage: data['towerDamage'],
      tower_kills: data['towerKills'],
      xp_per_min: data['xpPerMin'],
    }));
});
