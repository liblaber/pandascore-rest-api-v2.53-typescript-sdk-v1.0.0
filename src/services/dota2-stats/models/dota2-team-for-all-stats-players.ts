import { z } from 'zod';
import {
  dota2PlayerForAllStatsPlayers,
  dota2PlayerForAllStatsPlayersRequest,
  dota2PlayerForAllStatsPlayersResponse,
} from './dota2-player-for-all-stats-players';

/**
 * The shape of the model inside the application code - what the users use
 */
export const dota2TeamForAllStatsPlayers: any = z.lazy(() => {
  return z.object({
    id: z.number().gte(1),
    name: z.string(),
    players: z.array(dota2PlayerForAllStatsPlayers),
    slug: z
      .string()
      .min(1)
      .regex(/^[a-z0-9_-]+$/),
  });
});

/**
 *
 * @typedef  {Dota2TeamForAllStatsPlayers} dota2TeamForAllStatsPlayers
 * @property {number}
 * @property {string} - The name of the team.
 * @property {Dota2PlayerForAllStatsPlayers[]}
 * @property {string}
 */
export type Dota2TeamForAllStatsPlayers = z.infer<typeof dota2TeamForAllStatsPlayers>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const dota2TeamForAllStatsPlayersResponse: any = z.lazy(() => {
  return z
    .object({
      id: z.number().gte(1),
      name: z.string(),
      players: z.array(dota2PlayerForAllStatsPlayersResponse),
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
export const dota2TeamForAllStatsPlayersRequest: any = z.lazy(() => {
  return z
    .object({
      id: z.number().nullish(),
      name: z.string().nullish(),
      players: z.array(dota2PlayerForAllStatsPlayersRequest).nullish(),
      slug: z.string().nullish(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      players: data['players'],
      slug: data['slug'],
    }));
});
