import { z } from 'zod';
import {
  dota2PerHeroAbility,
  dota2PerHeroAbilityRequest,
  dota2PerHeroAbilityResponse,
} from '../../common/dota2-per-hero-ability';
import { dota2GamePlayerFaction } from './dota2-game-player-faction';
import { dota2GamePlayerHero, dota2GamePlayerHeroRequest, dota2GamePlayerHeroResponse } from './dota2-game-player-hero';
import { dota2Item, dota2ItemRequest, dota2ItemResponse } from '../../common/dota2-item';
import {
  dota2GamePlayerOpponent,
  dota2GamePlayerOpponentRequest,
  dota2GamePlayerOpponentResponse,
} from './dota2-game-player-opponent';
import { basePlayer, basePlayerRequest, basePlayerResponse } from '../../common/base-player';

/**
 * The shape of the model inside the application code - what the users use
 */
export const dota2GamePlayer: any = z.lazy(() => {
  return z.object({
    abilities: z.array(dota2PerHeroAbility),
    assists: z.number().gte(0).nullable(),
    campsStacked: z.number().gte(0).nullable(),
    creepsStacked: z.number().gte(0).nullable(),
    damageTaken: z.number().gte(0).nullable(),
    deaths: z.number().gte(0).nullable(),
    denies: z.number().gte(0).nullable(),
    faction: dota2GamePlayerFaction.nullable(),
    gameId: z.number().gte(1),
    goldPerMin: z.number().gte(0).nullable(),
    goldRemaining: z.number().gte(0).nullable(),
    goldSpent: z.number().gte(0).nullable(),
    heal: z.number().gte(0).nullable(),
    hero: dota2GamePlayerHero.nullable(),
    heroDamage: z.number().gte(0).nullable(),
    heroLevel: z.number().gte(1).nullable(),
    items: z.array(dota2Item),
    kills: z.number().gte(0).nullable(),
    laneCreep: z.number().gte(0).nullable(),
    lastHits: z.number().gte(0).nullable(),
    netWorth: z.number().gte(0).nullable(),
    neutralCreep: z.number().gte(0).nullable(),
    observerUsed: z.number().gte(0).nullable(),
    observerWardsDestroyed: z.number().gte(0).nullable(),
    observerWardsPurchased: z.number().gte(0).nullable(),
    opponent: dota2GamePlayerOpponent,
    player: basePlayer,
    role: z.number().gte(1).lte(5).nullable(),
    sentryUsed: z.number().gte(0).nullable(),
    sentryWardsDestroyed: z.number().gte(0).nullable(),
    sentryWardsPurchased: z.number().gte(0).nullable(),
    teamId: z.number().gte(1).nullable(),
    towerDamage: z.number().gte(0).nullable(),
    towerKills: z.number().gte(0).nullable(),
    xpPerMin: z.number().gte(0).nullable(),
  });
});

/**
 * Player's data for a game
 * @typedef  {Dota2GamePlayer} dota2GamePlayer - Player's data for a game - Player's data for a game
 * @property {Dota2PerHeroAbility[]}
 * @property {number} - Player's number of assists for a game
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number} - Number of denies performed by a player
 * @property {Dota2GamePlayerFaction}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number} - Healing (in HP) performed by the player
 * @property {Dota2GamePlayerHero}
 * @property {number}
 * @property {number}
 * @property {Dota2Item[]}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number} - Net worth of the player
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {Dota2GamePlayerOpponent}
 * @property {BasePlayer}
 * @property {number} - Position of the player (1, 2, 3, 4, 5)
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 */
export type Dota2GamePlayer = z.infer<typeof dota2GamePlayer>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const dota2GamePlayerResponse: any = z.lazy(() => {
  return z
    .object({
      abilities: z.array(dota2PerHeroAbilityResponse),
      assists: z.number().gte(0).nullable(),
      camps_stacked: z.number().gte(0).nullable(),
      creeps_stacked: z.number().gte(0).nullable(),
      damage_taken: z.number().gte(0).nullable(),
      deaths: z.number().gte(0).nullable(),
      denies: z.number().gte(0).nullable(),
      faction: dota2GamePlayerFaction.nullable(),
      game_id: z.number().gte(1),
      gold_per_min: z.number().gte(0).nullable(),
      gold_remaining: z.number().gte(0).nullable(),
      gold_spent: z.number().gte(0).nullable(),
      heal: z.number().gte(0).nullable(),
      hero: dota2GamePlayerHeroResponse.nullable(),
      hero_damage: z.number().gte(0).nullable(),
      hero_level: z.number().gte(1).nullable(),
      items: z.array(dota2ItemResponse),
      kills: z.number().gte(0).nullable(),
      lane_creep: z.number().gte(0).nullable(),
      last_hits: z.number().gte(0).nullable(),
      net_worth: z.number().gte(0).nullable(),
      neutral_creep: z.number().gte(0).nullable(),
      observer_used: z.number().gte(0).nullable(),
      observer_wards_destroyed: z.number().gte(0).nullable(),
      observer_wards_purchased: z.number().gte(0).nullable(),
      opponent: dota2GamePlayerOpponentResponse,
      player: basePlayerResponse,
      role: z.number().gte(1).lte(5).nullable(),
      sentry_used: z.number().gte(0).nullable(),
      sentry_wards_destroyed: z.number().gte(0).nullable(),
      sentry_wards_purchased: z.number().gte(0).nullable(),
      team_id: z.number().gte(1).nullable(),
      tower_damage: z.number().gte(0).nullable(),
      tower_kills: z.number().gte(0).nullable(),
      xp_per_min: z.number().gte(0).nullable(),
    })
    .transform((data) => ({
      abilities: data['abilities'],
      assists: data['assists'],
      campsStacked: data['camps_stacked'],
      creepsStacked: data['creeps_stacked'],
      damageTaken: data['damage_taken'],
      deaths: data['deaths'],
      denies: data['denies'],
      faction: data['faction'],
      gameId: data['game_id'],
      goldPerMin: data['gold_per_min'],
      goldRemaining: data['gold_remaining'],
      goldSpent: data['gold_spent'],
      heal: data['heal'],
      hero: data['hero'],
      heroDamage: data['hero_damage'],
      heroLevel: data['hero_level'],
      items: data['items'],
      kills: data['kills'],
      laneCreep: data['lane_creep'],
      lastHits: data['last_hits'],
      netWorth: data['net_worth'],
      neutralCreep: data['neutral_creep'],
      observerUsed: data['observer_used'],
      observerWardsDestroyed: data['observer_wards_destroyed'],
      observerWardsPurchased: data['observer_wards_purchased'],
      opponent: data['opponent'],
      player: data['player'],
      role: data['role'],
      sentryUsed: data['sentry_used'],
      sentryWardsDestroyed: data['sentry_wards_destroyed'],
      sentryWardsPurchased: data['sentry_wards_purchased'],
      teamId: data['team_id'],
      towerDamage: data['tower_damage'],
      towerKills: data['tower_kills'],
      xpPerMin: data['xp_per_min'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const dota2GamePlayerRequest: any = z.lazy(() => {
  return z
    .object({
      abilities: z.array(dota2PerHeroAbilityRequest).nullish(),
      assists: z.number().nullish(),
      campsStacked: z.number().nullish(),
      creepsStacked: z.number().nullish(),
      damageTaken: z.number().nullish(),
      deaths: z.number().nullish(),
      denies: z.number().nullish(),
      faction: dota2GamePlayerFaction.nullish(),
      gameId: z.number().nullish(),
      goldPerMin: z.number().nullish(),
      goldRemaining: z.number().nullish(),
      goldSpent: z.number().nullish(),
      heal: z.number().nullish(),
      hero: dota2GamePlayerHeroRequest.nullish(),
      heroDamage: z.number().nullish(),
      heroLevel: z.number().nullish(),
      items: z.array(dota2ItemRequest).nullish(),
      kills: z.number().nullish(),
      laneCreep: z.number().nullish(),
      lastHits: z.number().nullish(),
      netWorth: z.number().nullish(),
      neutralCreep: z.number().nullish(),
      observerUsed: z.number().nullish(),
      observerWardsDestroyed: z.number().nullish(),
      observerWardsPurchased: z.number().nullish(),
      opponent: dota2GamePlayerOpponentRequest.nullish(),
      player: basePlayerRequest.nullish(),
      role: z.number().nullish(),
      sentryUsed: z.number().nullish(),
      sentryWardsDestroyed: z.number().nullish(),
      sentryWardsPurchased: z.number().nullish(),
      teamId: z.number().nullish(),
      towerDamage: z.number().nullish(),
      towerKills: z.number().nullish(),
      xpPerMin: z.number().nullish(),
    })
    .transform((data) => ({
      abilities: data['abilities'],
      assists: data['assists'],
      camps_stacked: data['campsStacked'],
      creeps_stacked: data['creepsStacked'],
      damage_taken: data['damageTaken'],
      deaths: data['deaths'],
      denies: data['denies'],
      faction: data['faction'],
      game_id: data['gameId'],
      gold_per_min: data['goldPerMin'],
      gold_remaining: data['goldRemaining'],
      gold_spent: data['goldSpent'],
      heal: data['heal'],
      hero: data['hero'],
      hero_damage: data['heroDamage'],
      hero_level: data['heroLevel'],
      items: data['items'],
      kills: data['kills'],
      lane_creep: data['laneCreep'],
      last_hits: data['lastHits'],
      net_worth: data['netWorth'],
      neutral_creep: data['neutralCreep'],
      observer_used: data['observerUsed'],
      observer_wards_destroyed: data['observerWardsDestroyed'],
      observer_wards_purchased: data['observerWardsPurchased'],
      opponent: data['opponent'],
      player: data['player'],
      role: data['role'],
      sentry_used: data['sentryUsed'],
      sentry_wards_destroyed: data['sentryWardsDestroyed'],
      sentry_wards_purchased: data['sentryWardsPurchased'],
      team_id: data['teamId'],
      tower_damage: data['towerDamage'],
      tower_kills: data['towerKills'],
      xp_per_min: data['xpPerMin'],
    }));
});