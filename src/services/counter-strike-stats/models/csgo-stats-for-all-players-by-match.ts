import { z } from 'zod';
import {
  csgoTeamForAllStatsPlayers,
  csgoTeamForAllStatsPlayersRequest,
  csgoTeamForAllStatsPlayersResponse,
} from './csgo-team-for-all-stats-players';

/**
 * The shape of the model inside the application code - what the users use
 */
export const csgoStatsForAllPlayersByMatch: any = z.lazy(() => {
  return z.object({
    teams: z.array(csgoTeamForAllStatsPlayers),
  });
});

/**
 *
 * @typedef  {CsgoStatsForAllPlayersByMatch} csgoStatsForAllPlayersByMatch
 * @property {CsgoTeamForAllStatsPlayers[]}
 */
export type CsgoStatsForAllPlayersByMatch = z.infer<typeof csgoStatsForAllPlayersByMatch>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const csgoStatsForAllPlayersByMatchResponse: any = z.lazy(() => {
  return z
    .object({
      teams: z.array(csgoTeamForAllStatsPlayersResponse),
    })
    .transform((data) => ({
      teams: data['teams'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const csgoStatsForAllPlayersByMatchRequest: any = z.lazy(() => {
  return z.object({ teams: z.array(csgoTeamForAllStatsPlayersRequest).nullish() }).transform((data) => ({
    teams: data['teams'],
  }));
});
