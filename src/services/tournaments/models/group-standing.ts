import { z } from 'zod';
import { baseTeam, baseTeamRequest, baseTeamResponse } from '../../common/base-team';

/**
 * The shape of the model inside the application code - what the users use
 */
export const groupStanding = z.object({
  losses: z.number().gte(0),
  rank: z.number().gte(0),
  team: baseTeam,
  ties: z.number().gte(1).optional(),
  total: z.number().gte(0),
  wins: z.number().gte(0),
});

/**
 *
 * @typedef  {GroupStanding} groupStanding
 * @property {number}
 * @property {number}
 * @property {BaseTeam}
 * @property {number} - Only present if ties occured during the tournament
 * @property {number}
 * @property {number}
 */
export type GroupStanding = z.infer<typeof groupStanding>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const groupStandingResponse = z
  .object({
    losses: z.number().gte(0),
    rank: z.number().gte(0),
    team: baseTeamResponse,
    ties: z.number().gte(1).optional(),
    total: z.number().gte(0),
    wins: z.number().gte(0),
  })
  .transform((data) => ({
    losses: data['losses'],
    rank: data['rank'],
    team: data['team'],
    ties: data['ties'],
    total: data['total'],
    wins: data['wins'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const groupStandingRequest = z
  .object({
    losses: z.number().nullish(),
    rank: z.number().nullish(),
    team: baseTeamRequest.nullish(),
    ties: z.number().nullish(),
    total: z.number().nullish(),
    wins: z.number().nullish(),
  })
  .transform((data) => ({
    losses: data['losses'],
    rank: data['rank'],
    team: data['team'],
    ties: data['ties'],
    total: data['total'],
    wins: data['wins'],
  }));
