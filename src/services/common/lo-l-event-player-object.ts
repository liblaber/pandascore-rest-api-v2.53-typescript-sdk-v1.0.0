import { z } from 'zod';
import {
  loLEventChampion,
  loLEventChampionRequest,
  loLEventChampionResponse,
} from './lo-l-event-champion';
import { loLTeamColor } from './lo-l-team-color';

/**
 * The shape of the model inside the application code - what the users use
 */
export const loLEventPlayerObject = z.object({
  champion: loLEventChampion,
  playerId: z.number().gte(1),
  playerName: z.string(),
  side: loLTeamColor,
});

/**
 *
 * @typedef  {LoLEventPlayerObject} loLEventPlayerObject
 * @property {LoLEventChampion}
 * @property {number} - ID of the player
 * @property {string} - Professional name of the player
 * @property {LoLTeamColor}
 */
export type LoLEventPlayerObject = z.infer<typeof loLEventPlayerObject>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const loLEventPlayerObjectResponse = z
  .object({
    champion: loLEventChampionResponse,
    player_id: z.number().gte(1),
    player_name: z.string(),
    side: loLTeamColor,
  })
  .transform((data) => ({
    champion: data['champion'],
    playerId: data['player_id'],
    playerName: data['player_name'],
    side: data['side'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const loLEventPlayerObjectRequest = z
  .object({
    champion: loLEventChampionRequest.nullish(),
    playerId: z.number().nullish(),
    playerName: z.string().nullish(),
    side: loLTeamColor.nullish(),
  })
  .transform((data) => ({
    champion: data['champion'],
    player_id: data['playerId'],
    player_name: data['playerName'],
    side: data['side'],
  }));
