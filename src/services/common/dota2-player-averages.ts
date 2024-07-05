import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const dota2PlayerAverages = z.object({
  assists: z.number().gte(0),
  campsStacked: z.number().gte(0),
  creepsStacked: z.number().gte(0),
  damageTaken: z.number().gte(0),
  deaths: z.number().gte(0),
  denies: z.number().gte(0),
  goldPerMinute: z.number().gte(0),
  goldPercentage: z.number().gte(0).lte(100),
  heal: z.number().gte(0),
  heroDamage: z.number().gte(0),
  heroDamagePercentage: z.number().gte(0).lte(100),
  kills: z.number().gte(0),
  laneCreep: z.number().gte(0),
  lastHits: z.number().gte(0),
  netWorth: z.number().gte(0),
  neutralCreep: z.number().gte(0),
  observerWardsDestroyed: z.number().gte(0),
  observerWardsPlaced: z.number().gte(0),
  observerWardsPurchased: z.number().gte(0),
  sentryWardsDestroyed: z.number().gte(0),
  sentryWardsPlaced: z.number().gte(0),
  sentryWardsPurchased: z.number().gte(0),
  towerDamage: z.number().gte(0),
  towerKills: z.number().gte(0),
  wardsPlaced: z.number().gte(0),
  xpPerMinute: z.number().gte(0),
});

/**
 *
 * @typedef  {Dota2PlayerAverages} dota2PlayerAverages
 * @property {number}
 * @property {number} - The average number of camps stacked by the team
 * @property {number}
 * @property {number} - The average damage taken by the team
 * @property {number}
 * @property {number} - Average number of denies per game
 * @property {number}
 * @property {number} - Percentage of gold (per min) the player had compared to the total gold of the team
 * @property {number}
 * @property {number}
 * @property {number} - Percentage of damage to heroes the player had compared to the total damage of the team
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
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 */
export type Dota2PlayerAverages = z.infer<typeof dota2PlayerAverages>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const dota2PlayerAveragesResponse = z
  .object({
    assists: z.number().gte(0),
    camps_stacked: z.number().gte(0),
    creeps_stacked: z.number().gte(0),
    damage_taken: z.number().gte(0),
    deaths: z.number().gte(0),
    denies: z.number().gte(0),
    gold_per_minute: z.number().gte(0),
    gold_percentage: z.number().gte(0).lte(100),
    heal: z.number().gte(0),
    hero_damage: z.number().gte(0),
    hero_damage_percentage: z.number().gte(0).lte(100),
    kills: z.number().gte(0),
    lane_creep: z.number().gte(0),
    last_hits: z.number().gte(0),
    net_worth: z.number().gte(0),
    neutral_creep: z.number().gte(0),
    observer_wards_destroyed: z.number().gte(0),
    observer_wards_placed: z.number().gte(0),
    observer_wards_purchased: z.number().gte(0),
    sentry_wards_destroyed: z.number().gte(0),
    sentry_wards_placed: z.number().gte(0),
    sentry_wards_purchased: z.number().gte(0),
    tower_damage: z.number().gte(0),
    tower_kills: z.number().gte(0),
    wards_placed: z.number().gte(0),
    xp_per_minute: z.number().gte(0),
  })
  .transform((data) => ({
    assists: data['assists'],
    campsStacked: data['camps_stacked'],
    creepsStacked: data['creeps_stacked'],
    damageTaken: data['damage_taken'],
    deaths: data['deaths'],
    denies: data['denies'],
    goldPerMinute: data['gold_per_minute'],
    goldPercentage: data['gold_percentage'],
    heal: data['heal'],
    heroDamage: data['hero_damage'],
    heroDamagePercentage: data['hero_damage_percentage'],
    kills: data['kills'],
    laneCreep: data['lane_creep'],
    lastHits: data['last_hits'],
    netWorth: data['net_worth'],
    neutralCreep: data['neutral_creep'],
    observerWardsDestroyed: data['observer_wards_destroyed'],
    observerWardsPlaced: data['observer_wards_placed'],
    observerWardsPurchased: data['observer_wards_purchased'],
    sentryWardsDestroyed: data['sentry_wards_destroyed'],
    sentryWardsPlaced: data['sentry_wards_placed'],
    sentryWardsPurchased: data['sentry_wards_purchased'],
    towerDamage: data['tower_damage'],
    towerKills: data['tower_kills'],
    wardsPlaced: data['wards_placed'],
    xpPerMinute: data['xp_per_minute'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const dota2PlayerAveragesRequest = z
  .object({
    assists: z.number().nullish(),
    campsStacked: z.number().nullish(),
    creepsStacked: z.number().nullish(),
    damageTaken: z.number().nullish(),
    deaths: z.number().nullish(),
    denies: z.number().nullish(),
    goldPerMinute: z.number().nullish(),
    goldPercentage: z.number().nullish(),
    heal: z.number().nullish(),
    heroDamage: z.number().nullish(),
    heroDamagePercentage: z.number().nullish(),
    kills: z.number().nullish(),
    laneCreep: z.number().nullish(),
    lastHits: z.number().nullish(),
    netWorth: z.number().nullish(),
    neutralCreep: z.number().nullish(),
    observerWardsDestroyed: z.number().nullish(),
    observerWardsPlaced: z.number().nullish(),
    observerWardsPurchased: z.number().nullish(),
    sentryWardsDestroyed: z.number().nullish(),
    sentryWardsPlaced: z.number().nullish(),
    sentryWardsPurchased: z.number().nullish(),
    towerDamage: z.number().nullish(),
    towerKills: z.number().nullish(),
    wardsPlaced: z.number().nullish(),
    xpPerMinute: z.number().nullish(),
  })
  .transform((data) => ({
    assists: data['assists'],
    camps_stacked: data['campsStacked'],
    creeps_stacked: data['creepsStacked'],
    damage_taken: data['damageTaken'],
    deaths: data['deaths'],
    denies: data['denies'],
    gold_per_minute: data['goldPerMinute'],
    gold_percentage: data['goldPercentage'],
    heal: data['heal'],
    hero_damage: data['heroDamage'],
    hero_damage_percentage: data['heroDamagePercentage'],
    kills: data['kills'],
    lane_creep: data['laneCreep'],
    last_hits: data['lastHits'],
    net_worth: data['netWorth'],
    neutral_creep: data['neutralCreep'],
    observer_wards_destroyed: data['observerWardsDestroyed'],
    observer_wards_placed: data['observerWardsPlaced'],
    observer_wards_purchased: data['observerWardsPurchased'],
    sentry_wards_destroyed: data['sentryWardsDestroyed'],
    sentry_wards_placed: data['sentryWardsPlaced'],
    sentry_wards_purchased: data['sentryWardsPurchased'],
    tower_damage: data['towerDamage'],
    tower_kills: data['towerKills'],
    wards_placed: data['wardsPlaced'],
    xp_per_minute: data['xpPerMinute'],
  }));
