import { z } from 'zod';
import { loLPlayersRole, loLPlayersRoleRequest, loLPlayersRoleResponse } from './lo-l-players-role';

/**
 * The shape of the model inside the application code - what the users use
 */
export const loLFrameTeam = z.object({
  acronym: z.string(),
  drakes: z.number().gte(0),
  gold: z.number().gte(0),
  id: z.number().gte(1),
  inhibitors: z.number().gte(0),
  kills: z.number().gte(0),
  name: z.string(),
  nashors: z.number().gte(0),
  players: loLPlayersRole,
  score: z.number().gte(0),
  towers: z.number().gte(0),
  voidgrubs: z.number().gte(0).lte(6),
});

/**
 *
 * @typedef  {LoLFrameTeam} loLFrameTeam
 * @property {string}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number} - Number of inhibitors killed by the player
 * @property {number}
 * @property {string} - The name of the team.
 * @property {number}
 * @property {LoLPlayersRole}
 * @property {number}
 * @property {number}
 * @property {number} - The number of voidgrubs killed by a team.
 */
export type LoLFrameTeam = z.infer<typeof loLFrameTeam>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const loLFrameTeamResponse = z
  .object({
    acronym: z.string(),
    drakes: z.number().gte(0),
    gold: z.number().gte(0),
    id: z.number().gte(1),
    inhibitors: z.number().gte(0),
    kills: z.number().gte(0),
    name: z.string(),
    nashors: z.number().gte(0),
    players: loLPlayersRoleResponse,
    score: z.number().gte(0),
    towers: z.number().gte(0),
    voidgrubs: z.number().gte(0).lte(6),
  })
  .transform((data) => ({
    acronym: data['acronym'],
    drakes: data['drakes'],
    gold: data['gold'],
    id: data['id'],
    inhibitors: data['inhibitors'],
    kills: data['kills'],
    name: data['name'],
    nashors: data['nashors'],
    players: data['players'],
    score: data['score'],
    towers: data['towers'],
    voidgrubs: data['voidgrubs'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const loLFrameTeamRequest = z
  .object({
    acronym: z.string().nullish(),
    drakes: z.number().nullish(),
    gold: z.number().nullish(),
    id: z.number().nullish(),
    inhibitors: z.number().nullish(),
    kills: z.number().nullish(),
    name: z.string().nullish(),
    nashors: z.number().nullish(),
    players: loLPlayersRoleRequest.nullish(),
    score: z.number().nullish(),
    towers: z.number().nullish(),
    voidgrubs: z.number().nullish(),
  })
  .transform((data) => ({
    acronym: data['acronym'],
    drakes: data['drakes'],
    gold: data['gold'],
    id: data['id'],
    inhibitors: data['inhibitors'],
    kills: data['kills'],
    name: data['name'],
    nashors: data['nashors'],
    players: data['players'],
    score: data['score'],
    towers: data['towers'],
    voidgrubs: data['voidgrubs'],
  }));
