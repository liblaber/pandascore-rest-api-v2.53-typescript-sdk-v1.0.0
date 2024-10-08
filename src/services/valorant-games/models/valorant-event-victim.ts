// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import { baseValorantAgent, baseValorantAgentRequest, baseValorantAgentResponse } from './base-valorant-agent';

/**
 * The shape of the model inside the application code - what the users use
 */
export const valorantEventVictim = z.lazy(() => {
  return z.object({
    agent: baseValorantAgent,
    id: z.number().gte(1),
    name: z.string(),
    teamSide: z.string(),
  });
});

/**
 *
 * @typedef  {ValorantEventVictim} valorantEventVictim
 * @property {BaseValorantAgent}
 * @property {number} - ID of the player
 * @property {string} - Professional name of the player
 * @property {ValorantTeamSide} - Team side in the round
 */
export type ValorantEventVictim = z.infer<typeof valorantEventVictim>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const valorantEventVictimResponse = z.lazy(() => {
  return z
    .object({
      agent: baseValorantAgentResponse,
      id: z.number().gte(1),
      name: z.string(),
      team_side: z.string(),
    })
    .transform((data) => ({
      agent: data['agent'],
      id: data['id'],
      name: data['name'],
      teamSide: data['team_side'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const valorantEventVictimRequest = z.lazy(() => {
  return z
    .object({
      agent: baseValorantAgentRequest.nullish(),
      id: z.number().nullish(),
      name: z.string().nullish(),
      teamSide: z.string().nullish(),
    })
    .transform((data) => ({
      agent: data['agent'],
      id: data['id'],
      name: data['name'],
      team_side: data['teamSide'],
    }));
});
