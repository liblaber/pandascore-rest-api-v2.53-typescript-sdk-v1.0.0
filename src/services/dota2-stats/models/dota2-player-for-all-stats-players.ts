import { z } from 'zod';
import {
  dota2PlayerStatsForAllPlayersByMatch,
  dota2PlayerStatsForAllPlayersByMatchRequest,
  dota2PlayerStatsForAllPlayersByMatchResponse,
} from './dota2-player-stats-for-all-players-by-match';

/**
 * The shape of the model inside the application code - what the users use
 */
export const dota2PlayerForAllStatsPlayers = z.object({
  firstName: z.string(),
  id: z.number().gte(1),
  lastName: z.string(),
  name: z.string(),
  stats: dota2PlayerStatsForAllPlayersByMatch,
});

/**
 *
 * @typedef  {Dota2PlayerForAllStatsPlayers} dota2PlayerForAllStatsPlayers
 * @property {string} - First name of the player. `null` if unknown
 * @property {number} - ID of the player
 * @property {string} - Last name of the player. `null` if unknown
 * @property {string} - Professional name of the player
 * @property {Dota2PlayerStatsForAllPlayersByMatch} - Statistics for all players for a match
 */
export type Dota2PlayerForAllStatsPlayers = z.infer<typeof dota2PlayerForAllStatsPlayers>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const dota2PlayerForAllStatsPlayersResponse = z
  .object({
    first_name: z.string(),
    id: z.number().gte(1),
    last_name: z.string(),
    name: z.string(),
    stats: dota2PlayerStatsForAllPlayersByMatchResponse,
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
export const dota2PlayerForAllStatsPlayersRequest = z
  .object({
    firstName: z.string().nullish(),
    id: z.number().nullish(),
    lastName: z.string().nullish(),
    name: z.string().nullish(),
    stats: dota2PlayerStatsForAllPlayersByMatchRequest.nullish(),
  })
  .transform((data) => ({
    first_name: data['firstName'],
    id: data['id'],
    last_name: data['lastName'],
    name: data['name'],
    stats: data['stats'],
  }));
