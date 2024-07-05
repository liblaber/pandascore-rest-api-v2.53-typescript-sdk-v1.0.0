import { z } from 'zod';
import {
  owPlayerForAllStatsPlayers,
  owPlayerForAllStatsPlayersRequest,
  owPlayerForAllStatsPlayersResponse,
} from './ow-player-for-all-stats-players';

/**
 * The shape of the model inside the application code - what the users use
 */
export const owTeamForAllStatsPlayers = z.object({
  id: z.number().gte(1),
  name: z.string(),
  players: z.array(owPlayerForAllStatsPlayers),
  slug: z
    .string()
    .min(1)
    .regex(/^[a-z0-9_-]+$/),
});

/**
 *
 * @typedef  {OwTeamForAllStatsPlayers} owTeamForAllStatsPlayers
 * @property {number}
 * @property {string} - The name of the team.
 * @property {OwPlayerForAllStatsPlayers[]}
 * @property {string}
 */
export type OwTeamForAllStatsPlayers = z.infer<typeof owTeamForAllStatsPlayers>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const owTeamForAllStatsPlayersResponse = z
  .object({
    id: z.number().gte(1),
    name: z.string(),
    players: z.array(owPlayerForAllStatsPlayersResponse),
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

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const owTeamForAllStatsPlayersRequest = z
  .object({
    id: z.number().nullish(),
    name: z.string().nullish(),
    players: z.array(owPlayerForAllStatsPlayersRequest).nullish(),
    slug: z.string().nullish(),
  })
  .transform((data) => ({
    id: data['id'],
    name: data['name'],
    players: data['players'],
    slug: data['slug'],
  }));
