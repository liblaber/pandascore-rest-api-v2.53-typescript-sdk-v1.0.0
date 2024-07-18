import { z } from 'zod';
import {
  owPlayerStatsForAllPlayersByMatch,
  owPlayerStatsForAllPlayersByMatchRequest,
  owPlayerStatsForAllPlayersByMatchResponse,
} from './ow-player-stats-for-all-players-by-match';

/**
 * The shape of the model inside the application code - what the users use
 */
export const owPlayerForAllStatsPlayers: any = z.lazy(() => {
  return z.object({
    firstName: z.string().nullable(),
    id: z.number().gte(1),
    lastName: z.string().nullable(),
    name: z.string(),
    stats: owPlayerStatsForAllPlayersByMatch,
  });
});

/**
 *
 * @typedef  {OwPlayerForAllStatsPlayers} owPlayerForAllStatsPlayers
 * @property {string} - First name of the player. `null` if unknown
 * @property {number} - ID of the player
 * @property {string} - Last name of the player. `null` if unknown
 * @property {string} - Professional name of the player
 * @property {OwPlayerStatsForAllPlayersByMatch} - Statistics for all players for a match
 */
export type OwPlayerForAllStatsPlayers = z.infer<typeof owPlayerForAllStatsPlayers>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const owPlayerForAllStatsPlayersResponse: any = z.lazy(() => {
  return z
    .object({
      first_name: z.string().nullable(),
      id: z.number().gte(1),
      last_name: z.string().nullable(),
      name: z.string(),
      stats: owPlayerStatsForAllPlayersByMatchResponse,
    })
    .transform((data) => ({
      firstName: data['first_name'],
      id: data['id'],
      lastName: data['last_name'],
      name: data['name'],
      stats: data['stats'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const owPlayerForAllStatsPlayersRequest: any = z.lazy(() => {
  return z
    .object({
      firstName: z.string().nullish(),
      id: z.number().nullish(),
      lastName: z.string().nullish(),
      name: z.string().nullish(),
      stats: owPlayerStatsForAllPlayersByMatchRequest.nullish(),
    })
    .transform((data) => ({
      first_name: data['firstName'],
      id: data['id'],
      last_name: data['lastName'],
      name: data['name'],
      stats: data['stats'],
    }));
});
