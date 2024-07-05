import { z } from 'zod';
import {
  loLPlayerStatsForAllPlayersByMatch,
  loLPlayerStatsForAllPlayersByMatchRequest,
  loLPlayerStatsForAllPlayersByMatchResponse,
} from './lo-l-player-stats-for-all-players-by-match';

/**
 * The shape of the model inside the application code - what the users use
 */
export const loLPlayerForAllStatsPlayers = z.object({
  firstName: z.string(),
  id: z.number().gte(1),
  lastName: z.string(),
  name: z.string(),
  stats: loLPlayerStatsForAllPlayersByMatch,
});

/**
 *
 * @typedef  {LoLPlayerForAllStatsPlayers} loLPlayerForAllStatsPlayers
 * @property {string} - First name of the player. `null` if unknown
 * @property {number} - ID of the player
 * @property {string} - Last name of the player. `null` if unknown
 * @property {string} - Professional name of the player
 * @property {LoLPlayerStatsForAllPlayersByMatch} - Statistics for all players for a match
 */
export type LoLPlayerForAllStatsPlayers = z.infer<typeof loLPlayerForAllStatsPlayers>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const loLPlayerForAllStatsPlayersResponse = z
  .object({
    first_name: z.string(),
    id: z.number().gte(1),
    last_name: z.string(),
    name: z.string(),
    stats: loLPlayerStatsForAllPlayersByMatchResponse,
  })
  .transform((data) => ({
    firstName: data['first_name'],
    id: data['id'],
    lastName: data['last_name'],
    name: data['name'],
    stats: data['stats'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const loLPlayerForAllStatsPlayersRequest = z
  .object({
    firstName: z.string().nullish(),
    id: z.number().nullish(),
    lastName: z.string().nullish(),
    name: z.string().nullish(),
    stats: loLPlayerStatsForAllPlayersByMatchRequest.nullish(),
  })
  .transform((data) => ({
    first_name: data['firstName'],
    id: data['id'],
    last_name: data['lastName'],
    name: data['name'],
    stats: data['stats'],
  }));
