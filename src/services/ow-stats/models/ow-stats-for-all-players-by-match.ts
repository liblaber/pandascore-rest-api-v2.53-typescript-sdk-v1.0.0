import { z } from 'zod';
import {
  owTeamForAllStatsPlayers,
  owTeamForAllStatsPlayersRequest,
  owTeamForAllStatsPlayersResponse,
} from './ow-team-for-all-stats-players';

/**
 * The shape of the model inside the application code - what the users use
 */
export const owStatsForAllPlayersByMatch: any = z.lazy(() => {
  return z.object({
    teams: z.array(owTeamForAllStatsPlayers),
  });
});

/**
 *
 * @typedef  {OwStatsForAllPlayersByMatch} owStatsForAllPlayersByMatch
 * @property {OwTeamForAllStatsPlayers[]}
 */
export type OwStatsForAllPlayersByMatch = z.infer<typeof owStatsForAllPlayersByMatch>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const owStatsForAllPlayersByMatchResponse: any = z.lazy(() => {
  return z
    .object({
      teams: z.array(owTeamForAllStatsPlayersResponse),
    })
    .transform((data) => ({
      teams: data['teams'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const owStatsForAllPlayersByMatchRequest: any = z.lazy(() => {
  return z.object({ teams: z.array(owTeamForAllStatsPlayersRequest).nullish() }).transform((data) => ({
    teams: data['teams'],
  }));
});