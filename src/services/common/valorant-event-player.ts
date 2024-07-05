import { z } from 'zod';
import {
  baseValorantAgent,
  baseValorantAgentRequest,
  baseValorantAgentResponse,
} from './base-valorant-agent';

/**
 * The shape of the model inside the application code - what the users use
 */
export const valorantEventPlayer = z.object({
  agent: baseValorantAgent,
  id: z.number().gte(1),
  name: z.string(),
});

/**
 *
 * @typedef  {ValorantEventPlayer} valorantEventPlayer
 * @property {BaseValorantAgent}
 * @property {number} - ID of the player
 * @property {string} - Professional name of the player
 */
export type ValorantEventPlayer = z.infer<typeof valorantEventPlayer>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const valorantEventPlayerResponse = z
  .object({
    agent: baseValorantAgentResponse,
    id: z.number().gte(1),
    name: z.string(),
  })
  .transform((data) => ({
    agent: data['agent'],
    id: data['id'],
    name: data['name'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const valorantEventPlayerRequest = z
  .object({
    agent: baseValorantAgentRequest.nullish(),
    id: z.number().nullish(),
    name: z.string().nullish(),
  })
  .transform((data) => ({
    agent: data['agent'],
    id: data['id'],
    name: data['name'],
  }));
