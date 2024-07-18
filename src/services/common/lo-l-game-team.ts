import { z } from 'zod';
import { loLTeamColor } from './lo-l-team-color';
import { baseTeam, baseTeamRequest, baseTeamResponse } from './base-team';

/**
 * The shape of the model inside the application code - what the users use
 */
export const loLGameTeam: any = z.lazy(() => {
  return z.object({
    bans: z.array(z.number()),
    baronKills: z.number().gte(0).nullable(),
    chemtechDrakeKills: z.number().gte(0).nullable(),
    cloudDrakeKills: z.number().gte(0).nullable(),
    color: loLTeamColor,
    dragonKills: z.number().gte(0).nullable(),
    elderDrakeKills: z.number().gte(0).nullable(),
    firstBaron: z.boolean().nullable(),
    firstBlood: z.boolean().nullable(),
    firstDragon: z.boolean().nullable(),
    firstHerald: z.boolean().nullable(),
    firstInhibitor: z.boolean().nullable(),
    firstTower: z.boolean().nullable(),
    firstVoidgrub: z.boolean().nullable(),
    goldEarned: z.number().gte(0).nullable(),
    heraldKills: z.number().gte(0).nullable(),
    hextechDrakeKills: z.number().gte(0).nullable(),
    infernalDrakeKills: z.number().gte(0).nullable(),
    inhibitorKills: z.number().gte(0).nullable(),
    kills: z.number().gte(0).nullable(),
    mountainDrakeKills: z.number().gte(0).nullable(),
    oceanDrakeKills: z.number().gte(0).nullable(),
    playerIds: z.array(z.number()),
    team: baseTeam,
    towerKills: z.number().gte(0).nullable(),
    voidgrubKills: z.number().gte(0).lte(6).nullable(),
  });
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
export const loLGameTeamResponse: any = z.lazy(() => {
  return z
    .object({
      bans: z.array(z.number()),
      baron_kills: z.number().gte(0).nullable(),
      chemtech_drake_kills: z.number().gte(0).nullable(),
      cloud_drake_kills: z.number().gte(0).nullable(),
      color: loLTeamColor,
      dragon_kills: z.number().gte(0).nullable(),
      elder_drake_kills: z.number().gte(0).nullable(),
      first_baron: z.boolean().nullable(),
      first_blood: z.boolean().nullable(),
      first_dragon: z.boolean().nullable(),
      first_herald: z.boolean().nullable(),
      first_inhibitor: z.boolean().nullable(),
      first_tower: z.boolean().nullable(),
      first_voidgrub: z.boolean().nullable(),
      gold_earned: z.number().gte(0).nullable(),
      herald_kills: z.number().gte(0).nullable(),
      hextech_drake_kills: z.number().gte(0).nullable(),
      infernal_drake_kills: z.number().gte(0).nullable(),
      inhibitor_kills: z.number().gte(0).nullable(),
      kills: z.number().gte(0).nullable(),
      mountain_drake_kills: z.number().gte(0).nullable(),
      ocean_drake_kills: z.number().gte(0).nullable(),
      player_ids: z.array(z.number()),
      team: baseTeamResponse,
      tower_kills: z.number().gte(0).nullable(),
      voidgrub_kills: z.number().gte(0).lte(6).nullable(),
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
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const loLGameTeamRequest: any = z.lazy(() => {
  return z
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
});
