import { z } from 'zod';
import {
  loLPlayerForAllStatsPlayers,
  loLPlayerForAllStatsPlayersRequest,
  loLPlayerForAllStatsPlayersResponse,
} from './lo-l-player-for-all-stats-players';

/**
 * The shape of the model inside the application code - what the users use
 */
export const loLTeamForAllStatsPlayers: any = z.lazy(() => {
  return z.object({
    id: z.number().gte(1),
    name: z.string(),
    players: z.array(loLPlayerForAllStatsPlayers),
    slug: z
      .string()
      .min(1)
      .regex(/^[a-z0-9_-]+$/),
  });
});

/**
 *
 * @typedef  {LoLTeamForAllStatsPlayers} loLTeamForAllStatsPlayers
 * @property {number}
 * @property {string} - The name of the team.
 * @property {LoLPlayerForAllStatsPlayers[]}
 * @property {string}
 */
export type LoLTeamForAllStatsPlayers = z.infer<typeof loLTeamForAllStatsPlayers>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const loLTeamForAllStatsPlayersResponse: any = z.lazy(() => {
  return z
    .object({
      id: z.number().gte(1),
      name: z.string(),
      players: z.array(loLPlayerForAllStatsPlayersResponse),
      slug: z
        .string()
        .min(1)
        .regex(/^[a-z0-9_-]+$/),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      players: data['players'],
      slug: data['slug'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const loLTeamForAllStatsPlayersRequest: any = z.lazy(() => {
  return z
    .object({
      id: z.number().nullish(),
      name: z.string().nullish(),
      players: z.array(loLPlayerForAllStatsPlayersRequest).nullish(),
      slug: z.string().nullish(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      players: data['players'],
      slug: data['slug'],
    }));
});