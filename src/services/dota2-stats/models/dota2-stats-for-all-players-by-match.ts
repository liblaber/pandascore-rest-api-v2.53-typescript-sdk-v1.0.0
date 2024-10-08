// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import {
  dota2TeamForAllStatsPlayers,
  dota2TeamForAllStatsPlayersRequest,
  dota2TeamForAllStatsPlayersResponse,
} from './dota2-team-for-all-stats-players';

/**
 * The shape of the model inside the application code - what the users use
 */
export const dota2StatsForAllPlayersByMatch = z.lazy(() => {
  return z.object({
    teams: z.array(dota2TeamForAllStatsPlayers),
  });
});

/**
 *
 * @typedef  {Dota2StatsForAllPlayersByMatch} dota2StatsForAllPlayersByMatch
 * @property {Dota2TeamForAllStatsPlayers[]}
 */
export type Dota2StatsForAllPlayersByMatch = z.infer<typeof dota2StatsForAllPlayersByMatch>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const dota2StatsForAllPlayersByMatchResponse = z.lazy(() => {
  return z
    .object({
      teams: z.array(dota2TeamForAllStatsPlayersResponse),
    })
    .transform((data) => ({
      teams: data['teams'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const dota2StatsForAllPlayersByMatchRequest = z.lazy(() => {
  return z.object({ teams: z.array(dota2TeamForAllStatsPlayersRequest).nullish() }).transform((data) => ({
    teams: data['teams'],
  }));
});
