// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import { barracksStatus, barracksStatusRequest, barracksStatusResponse } from './barracks-status';
import { baseTeam, baseTeamRequest, baseTeamResponse } from './base-team';
import { towerStatus, towerStatusRequest, towerStatusResponse } from './tower-status';

/**
 * The shape of the model inside the application code - what the users use
 */
export const dota2GameTeam = z.lazy(() => {
  return z.object({
    bans: z.array(z.number()),
    barracksStatus: barracksStatus.nullable(),
    faction: z.string(),
    firstBlood: z.boolean(),
    firstRoshan: z.boolean(),
    firstTower: z.boolean(),
    picks: z.array(z.number()),
    playerIds: z.array(z.number()),
    roshanKills: z.number().gte(0).nullable(),
    score: z.number().gte(0).nullable(),
    team: baseTeam,
    towerStatus: towerStatus.nullable(),
  });
});

/**
 * Team's data for a game
 * @typedef  {Dota2GameTeam} dota2GameTeam - Team's data for a game - Team's data for a game
 * @property {number[]}
 * @property {BarracksStatus}
 * @property {Dota2Faction}
 * @property {boolean} - Whether team got first blood
 * @property {boolean} - Whether team got first Roshan
 * @property {boolean} - Whether team got first tower
 * @property {number[]}
 * @property {number[]}
 * @property {number} - The total number of Roshans killed by the team in the game
 * @property {number}
 * @property {BaseTeam}
 * @property {TowerStatus}
 */
export type Dota2GameTeam = z.infer<typeof dota2GameTeam>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const dota2GameTeamResponse = z.lazy(() => {
  return z
    .object({
      bans: z.array(z.number()),
      barracks_status: barracksStatusResponse.nullable(),
      faction: z.string(),
      first_blood: z.boolean(),
      first_roshan: z.boolean(),
      first_tower: z.boolean(),
      picks: z.array(z.number()),
      player_ids: z.array(z.number()),
      roshan_kills: z.number().gte(0).nullable(),
      score: z.number().gte(0).nullable(),
      team: baseTeamResponse,
      tower_status: towerStatusResponse.nullable(),
    })
    .transform((data) => ({
      bans: data['bans'],
      barracksStatus: data['barracks_status'],
      faction: data['faction'],
      firstBlood: data['first_blood'],
      firstRoshan: data['first_roshan'],
      firstTower: data['first_tower'],
      picks: data['picks'],
      playerIds: data['player_ids'],
      roshanKills: data['roshan_kills'],
      score: data['score'],
      team: data['team'],
      towerStatus: data['tower_status'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const dota2GameTeamRequest = z.lazy(() => {
  return z
    .object({
      bans: z.array(z.number()).nullish(),
      barracksStatus: barracksStatusRequest.nullish(),
      faction: z.string().nullish(),
      firstBlood: z.boolean().nullish(),
      firstRoshan: z.boolean().nullish(),
      firstTower: z.boolean().nullish(),
      picks: z.array(z.number()).nullish(),
      playerIds: z.array(z.number()).nullish(),
      roshanKills: z.number().nullish(),
      score: z.number().nullish(),
      team: baseTeamRequest.nullish(),
      towerStatus: towerStatusRequest.nullish(),
    })
    .transform((data) => ({
      bans: data['bans'],
      barracks_status: data['barracksStatus'],
      faction: data['faction'],
      first_blood: data['firstBlood'],
      first_roshan: data['firstRoshan'],
      first_tower: data['firstTower'],
      picks: data['picks'],
      player_ids: data['playerIds'],
      roshan_kills: data['roshanKills'],
      score: data['score'],
      team: data['team'],
      tower_status: data['towerStatus'],
    }));
});
