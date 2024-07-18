import { z } from 'zod';
import { teamRosters, teamRostersRequest, teamRostersResponse } from './team-rosters';
import { playerRosters, playerRostersRequest, playerRostersResponse } from './player-rosters';

/**
 * The shape of the model inside the application code - what the users use
 */
export const tournamentRosters: any = z.lazy(() => {
  return z.union([teamRosters, playerRosters]);
});

/**
 *
 * @typedef  {TournamentRosters} tournamentRosters
 * @property {TeamRosters} - Rosters for a a series or a tournament with team participants
 * @property {PlayerRosters} - Rosters for a series or a tournament with player participants
 */
export type TournamentRosters = z.infer<typeof tournamentRosters>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const tournamentRostersResponse: any = z.lazy(() => {
  return z.union([teamRostersResponse, playerRostersResponse]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const tournamentRostersRequest: any = z.lazy(() => {
  return z.union([teamRostersRequest, playerRostersRequest]);
});
