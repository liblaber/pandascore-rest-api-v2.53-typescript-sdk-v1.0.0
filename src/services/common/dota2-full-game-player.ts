import { z } from 'zod';
import {
  dota2PerHeroAbility,
  dota2PerHeroAbilityRequest,
  dota2PerHeroAbilityResponse,
} from './dota2-per-hero-ability';
import { dota2FullGamePlayerFaction } from './dota2-full-game-player-faction';
import {
  dota2FullGamePlayerHero,
  dota2FullGamePlayerHeroRequest,
  dota2FullGamePlayerHeroResponse,
} from './dota2-full-game-player-hero';
import { dota2Item, dota2ItemRequest, dota2ItemResponse } from './dota2-item';
import {
  dota2FullGamePlayerOpponent,
  dota2FullGamePlayerOpponentRequest,
  dota2FullGamePlayerOpponentResponse,
} from './dota2-full-game-player-opponent';
import { basePlayer, basePlayerRequest, basePlayerResponse } from './base-player';
import {
  dota2FullGamePlayerTeam,
  dota2FullGamePlayerTeamRequest,
  dota2FullGamePlayerTeamResponse,
} from './dota2-full-game-player-team';

/**
 * The shape of the model inside the application code - what the users use
 */
export const dota2FullGamePlayer = z.object({
  abilities: z.array(dota2PerHeroAbility),
  assists: z.number().gte(0),
  campsStacked: z.number().gte(0),
  creepsStacked: z.number().gte(0),
  damageTaken: z.number().gte(0),
  deaths: z.number().gte(0),
  denies: z.number().gte(0),
  faction: dota2FullGamePlayerFaction,
  gameId: z.number().gte(1),
  goldPerMin: z.number().gte(0),
  goldPercentage: z.number().gte(0).lte(100),
  goldRemaining: z.number().gte(0),
  goldSpent: z.number().gte(0),
  heal: z.number().gte(0),
  hero: dota2FullGamePlayerHero,
  heroDamage: z.number().gte(0),
  heroDamagePercentage: z.number().gte(0),
  heroLevel: z.number().gte(1),
  items: z.array(dota2Item),
  kills: z.number().gte(0),
  laneCreep: z.number().gte(0),
  lastHits: z.number().gte(0),
  netWorth: z.number().gte(0),
  neutralCreep: z.number().gte(0),
  observerUsed: z.number().gte(0),
  observerWardsDestroyed: z.number().gte(0),
  observerWardsPurchased: z.number().gte(0),
  opponent: dota2FullGamePlayerOpponent,
  player: basePlayer,
  role: z.number().gte(1).lte(5),
  sentryUsed: z.number().gte(0),
  sentryWardsDestroyed: z.number().gte(0),
  sentryWardsPurchased: z.number().gte(0),
  team: dota2FullGamePlayerTeam,
  teamId: z.number().gte(1),
  towerDamage: z.number().gte(0),
  towerKills: z.number().gte(0),
  xpPerMin: z.number().gte(0),
});

/**
 * Player's data for a game
 * @typedef  {Dota2FullGamePlayer} dota2FullGamePlayer - Player's data for a game - Player's data for a game
 * @property {Dota2PerHeroAbility[]}
 * @property {number} - Player's number of assists for a game
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number} - Number of denies performed by a player
 * @property {Dota2FullGamePlayerFaction}
 * @property {number}
 * @property {number}
 * @property {number} - Percentage of gold (per min) the player had compared to the total gold of the team
 * @property {number}
 * @property {number}
 * @property {number} - Healing (in HP) performed by the player
 * @property {Dota2FullGamePlayerHero}
 * @property {number}
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
 * @property {Dota2FullGamePlayerOpponent}
 * @property {BasePlayer}
 * @property {number} - Position of the player (1, 2, 3, 4, 5)
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {Dota2FullGamePlayerTeam}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 */
export type Dota2FullGamePlayer = z.infer<typeof dota2FullGamePlayer>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const dota2FullGamePlayerResponse = z
  .object({
    abilities: z.array(dota2PerHeroAbilityResponse),
    assists: z.number().gte(0),
    camps_stacked: z.number().gte(0),
    creeps_stacked: z.number().gte(0),
    damage_taken: z.number().gte(0),
    deaths: z.number().gte(0),
    denies: z.number().gte(0),
    faction: dota2FullGamePlayerFaction,
    game_id: z.number().gte(1),
    gold_per_min: z.number().gte(0),
    gold_percentage: z.number().gte(0).lte(100),
    gold_remaining: z.number().gte(0),
    gold_spent: z.number().gte(0),
    heal: z.number().gte(0),
    hero: dota2FullGamePlayerHeroResponse,
    hero_damage: z.number().gte(0),
    hero_damage_percentage: z.number().gte(0),
    hero_level: z.number().gte(1),
    items: z.array(dota2ItemResponse),
    kills: z.number().gte(0),
    lane_creep: z.number().gte(0),
    last_hits: z.number().gte(0),
    net_worth: z.number().gte(0),
    neutral_creep: z.number().gte(0),
    observer_used: z.number().gte(0),
    observer_wards_destroyed: z.number().gte(0),
    observer_wards_purchased: z.number().gte(0),
    opponent: dota2FullGamePlayerOpponentResponse,
    player: basePlayerResponse,
    role: z.number().gte(1).lte(5),
    sentry_used: z.number().gte(0),
    sentry_wards_destroyed: z.number().gte(0),
    sentry_wards_purchased: z.number().gte(0),
    team: dota2FullGamePlayerTeamResponse,
    team_id: z.number().gte(1),
    tower_damage: z.number().gte(0),
    tower_kills: z.number().gte(0),
    xp_per_min: z.number().gte(0),
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
    goldPercentage: data['gold_percentage'],
    goldRemaining: data['gold_remaining'],
    goldSpent: data['gold_spent'],
    heal: data['heal'],
    hero: data['hero'],
    heroDamage: data['hero_damage'],
    heroDamagePercentage: data['hero_damage_percentage'],
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
    team: data['team'],
    teamId: data['team_id'],
    towerDamage: data['tower_damage'],
    towerKills: data['tower_kills'],
    xpPerMin: data['xp_per_min'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const dota2FullGamePlayerRequest = z
  .object({
    abilities: z.array(dota2PerHeroAbilityRequest).nullish(),
    assists: z.number().nullish(),
    campsStacked: z.number().nullish(),
    creepsStacked: z.number().nullish(),
    damageTaken: z.number().nullish(),
    deaths: z.number().nullish(),
    denies: z.number().nullish(),
    faction: dota2FullGamePlayerFaction.nullish(),
    gameId: z.number().nullish(),
    goldPerMin: z.number().nullish(),
    goldPercentage: z.number().nullish(),
    goldRemaining: z.number().nullish(),
    goldSpent: z.number().nullish(),
    heal: z.number().nullish(),
    hero: dota2FullGamePlayerHeroRequest.nullish(),
    heroDamage: z.number().nullish(),
    heroDamagePercentage: z.number().nullish(),
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
    opponent: dota2FullGamePlayerOpponentRequest.nullish(),
    player: basePlayerRequest.nullish(),
    role: z.number().nullish(),
    sentryUsed: z.number().nullish(),
    sentryWardsDestroyed: z.number().nullish(),
    sentryWardsPurchased: z.number().nullish(),
    team: dota2FullGamePlayerTeamRequest.nullish(),
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
    gold_percentage: data['goldPercentage'],
    gold_remaining: data['goldRemaining'],
    gold_spent: data['goldSpent'],
    heal: data['heal'],
    hero: data['hero'],
    hero_damage: data['heroDamage'],
    hero_damage_percentage: data['heroDamagePercentage'],
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
    team: data['team'],
    team_id: data['teamId'],
    tower_damage: data['towerDamage'],
    tower_kills: data['towerKills'],
    xp_per_min: data['xpPerMin'],
  }));
