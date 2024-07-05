import { z } from 'zod';
import {
  csgoPlayerForAllStatsPlayers,
  csgoPlayerForAllStatsPlayersRequest,
  csgoPlayerForAllStatsPlayersResponse,
} from './csgo-player-for-all-stats-players';

/**
 * The shape of the model inside the application code - what the users use
 */
export const csgoTeamForAllStatsPlayers = z.object({
  id: z.number().gte(1),
  name: z.string(),
  players: z.array(csgoPlayerForAllStatsPlayers),
  slug: z
    .string()
    .min(1)
    .regex(/^[a-z0-9_-]+$/),
});

/**
 *
 * @typedef  {CsgoTeamForAllStatsPlayers} csgoTeamForAllStatsPlayers
 * @property {number}
 * @property {string} - The name of the team.
 * @property {CsgoPlayerForAllStatsPlayers[]}
 * @property {string}
 */
export type CsgoTeamForAllStatsPlayers = z.infer<typeof csgoTeamForAllStatsPlayers>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const csgoTeamForAllStatsPlayersResponse = z
  .object({
    id: z.number().gte(1),
    name: z.string(),
    players: z.array(csgoPlayerForAllStatsPlayersResponse),
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
export const csgoTeamForAllStatsPlayersRequest = z
  .object({
    id: z.number().nullish(),
    name: z.string().nullish(),
    players: z.array(csgoPlayerForAllStatsPlayersRequest).nullish(),
    slug: z.string().nullish(),
  })
  .transform((data) => ({
    id: data['id'],
    name: data['name'],
    players: data['players'],
    slug: data['slug'],
  }));
