import { z } from 'zod';
import {
  loLTeamForAllStatsPlayers,
  loLTeamForAllStatsPlayersRequest,
  loLTeamForAllStatsPlayersResponse,
} from './lo-l-team-for-all-stats-players';

/**
 * The shape of the model inside the application code - what the users use
 */
export const loLStatsForAllPlayersByMatch: any = z.lazy(() => {
  return z.object({
    teams: z.array(loLTeamForAllStatsPlayers),
  });
});

/**
 *
 * @typedef  {LoLStatsForAllPlayersByMatch} loLStatsForAllPlayersByMatch
 * @property {LoLTeamForAllStatsPlayers[]}
 */
export type LoLStatsForAllPlayersByMatch = z.infer<typeof loLStatsForAllPlayersByMatch>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const loLStatsForAllPlayersByMatchResponse: any = z.lazy(() => {
  return z
    .object({
      teams: z.array(loLTeamForAllStatsPlayersResponse),
    })
    .transform((data) => ({
      teams: data['teams'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const loLStatsForAllPlayersByMatchRequest: any = z.lazy(() => {
  return z.object({ teams: z.array(loLTeamForAllStatsPlayersRequest).nullish() }).transform((data) => ({
    teams: data['teams'],
  }));
});
