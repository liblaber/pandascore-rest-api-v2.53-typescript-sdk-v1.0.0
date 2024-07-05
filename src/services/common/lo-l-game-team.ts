import { z } from 'zod';
import { loLTeamColor } from './lo-l-team-color';
import { baseTeam, baseTeamRequest, baseTeamResponse } from './base-team';

/**
 * The shape of the model inside the application code - what the users use
 */
export const loLGameTeam = z.object({
  bans: z.array(z.number()),
  baronKills: z.number().gte(0),
  chemtechDrakeKills: z.number().gte(0),
  cloudDrakeKills: z.number().gte(0),
  color: loLTeamColor,
  dragonKills: z.number().gte(0),
  elderDrakeKills: z.number().gte(0),
  firstBaron: z.boolean(),
  firstBlood: z.boolean(),
  firstDragon: z.boolean(),
  firstHerald: z.boolean(),
  firstInhibitor: z.boolean(),
  firstTower: z.boolean(),
  firstVoidgrub: z.boolean(),
  goldEarned: z.number().gte(0),
  heraldKills: z.number().gte(0),
  hextechDrakeKills: z.number().gte(0),
  infernalDrakeKills: z.number().gte(0),
  inhibitorKills: z.number().gte(0),
  kills: z.number().gte(0),
  mountainDrakeKills: z.number().gte(0),
  oceanDrakeKills: z.number().gte(0),
  playerIds: z.array(z.number()),
  team: baseTeam,
  towerKills: z.number().gte(0),
  voidgrubKills: z.number().gte(0).lte(6),
});

/**
 * Team's data for a Game
 * @typedef  {LoLGameTeam} loLGameTeam - Team's data for a Game - Team's data for a Game
 * @property {number[]}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {LoLTeamColor}
 * @property {number}
 * @property {number}
 * @property {boolean} - Whether team got first baron Nashor
 * @property {boolean} - Whether team got first blood
 * @property {boolean} - Whether team got first dragon
 * @property {boolean} - Whether team got first herald
 * @property {boolean} - Whether team got first inhibitor
 * @property {boolean} - Whether team got first tower
 * @property {boolean} - Whether team killed the first voidgrub
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number[]}
 * @property {BaseTeam}
 * @property {number}
 * @property {number} - The number of voidgrubs killed by a team.
 */
export type LoLGameTeam = z.infer<typeof loLGameTeam>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const loLGameTeamResponse = z
  .object({
    bans: z.array(z.number()),
    baron_kills: z.number().gte(0),
    chemtech_drake_kills: z.number().gte(0),
    cloud_drake_kills: z.number().gte(0),
    color: loLTeamColor,
    dragon_kills: z.number().gte(0),
    elder_drake_kills: z.number().gte(0),
    first_baron: z.boolean(),
    first_blood: z.boolean(),
    first_dragon: z.boolean(),
    first_herald: z.boolean(),
    first_inhibitor: z.boolean(),
    first_tower: z.boolean(),
    first_voidgrub: z.boolean(),
    gold_earned: z.number().gte(0),
    herald_kills: z.number().gte(0),
    hextech_drake_kills: z.number().gte(0),
    infernal_drake_kills: z.number().gte(0),
    inhibitor_kills: z.number().gte(0),
    kills: z.number().gte(0),
    mountain_drake_kills: z.number().gte(0),
    ocean_drake_kills: z.number().gte(0),
    player_ids: z.array(z.number()),
    team: baseTeamResponse,
    tower_kills: z.number().gte(0),
    voidgrub_kills: z.number().gte(0).lte(6),
  })
  .transform((data) => ({
    bans: data['bans'],
    baronKills: data['baron_kills'],
    chemtechDrakeKills: data['chemtech_drake_kills'],
    cloudDrakeKills: data['cloud_drake_kills'],
    color: data['color'],
    dragonKills: data['dragon_kills'],
    elderDrakeKills: data['elder_drake_kills'],
    firstBaron: data['first_baron'],
    firstBlood: data['first_blood'],
    firstDragon: data['first_dragon'],
    firstHerald: data['first_herald'],
    firstInhibitor: data['first_inhibitor'],
    firstTower: data['first_tower'],
    firstVoidgrub: data['first_voidgrub'],
    goldEarned: data['gold_earned'],
    heraldKills: data['herald_kills'],
    hextechDrakeKills: data['hextech_drake_kills'],
    infernalDrakeKills: data['infernal_drake_kills'],
    inhibitorKills: data['inhibitor_kills'],
    kills: data['kills'],
    mountainDrakeKills: data['mountain_drake_kills'],
    oceanDrakeKills: data['ocean_drake_kills'],
    playerIds: data['player_ids'],
    team: data['team'],
    towerKills: data['tower_kills'],
    voidgrubKills: data['voidgrub_kills'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const loLGameTeamRequest = z
  .object({
    bans: z.array(z.number()).nullish(),
    baronKills: z.number().nullish(),
    chemtechDrakeKills: z.number().nullish(),
    cloudDrakeKills: z.number().nullish(),
    color: loLTeamColor.nullish(),
    dragonKills: z.number().nullish(),
    elderDrakeKills: z.number().nullish(),
    firstBaron: z.boolean().nullish(),
    firstBlood: z.boolean().nullish(),
    firstDragon: z.boolean().nullish(),
    firstHerald: z.boolean().nullish(),
    firstInhibitor: z.boolean().nullish(),
    firstTower: z.boolean().nullish(),
    firstVoidgrub: z.boolean().nullish(),
    goldEarned: z.number().nullish(),
    heraldKills: z.number().nullish(),
    hextechDrakeKills: z.number().nullish(),
    infernalDrakeKills: z.number().nullish(),
    inhibitorKills: z.number().nullish(),
    kills: z.number().nullish(),
    mountainDrakeKills: z.number().nullish(),
    oceanDrakeKills: z.number().nullish(),
    playerIds: z.array(z.number()).nullish(),
    team: baseTeamRequest.nullish(),
    towerKills: z.number().nullish(),
    voidgrubKills: z.number().nullish(),
  })
  .transform((data) => ({
    bans: data['bans'],
    baron_kills: data['baronKills'],
    chemtech_drake_kills: data['chemtechDrakeKills'],
    cloud_drake_kills: data['cloudDrakeKills'],
    color: data['color'],
    dragon_kills: data['dragonKills'],
    elder_drake_kills: data['elderDrakeKills'],
    first_baron: data['firstBaron'],
    first_blood: data['firstBlood'],
    first_dragon: data['firstDragon'],
    first_herald: data['firstHerald'],
    first_inhibitor: data['firstInhibitor'],
    first_tower: data['firstTower'],
    first_voidgrub: data['firstVoidgrub'],
    gold_earned: data['goldEarned'],
    herald_kills: data['heraldKills'],
    hextech_drake_kills: data['hextechDrakeKills'],
    infernal_drake_kills: data['infernalDrakeKills'],
    inhibitor_kills: data['inhibitorKills'],
    kills: data['kills'],
    mountain_drake_kills: data['mountainDrakeKills'],
    ocean_drake_kills: data['oceanDrakeKills'],
    player_ids: data['playerIds'],
    team: data['team'],
    tower_kills: data['towerKills'],
    voidgrub_kills: data['voidgrubKills'],
  }));
