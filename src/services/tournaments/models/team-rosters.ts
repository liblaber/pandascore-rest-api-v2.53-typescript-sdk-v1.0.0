import { z } from 'zod';
import { team, teamRequest, teamResponse } from '../../common/team';
import { opponentTypeTeam } from '../../common/opponent-type-team';

/**
 * The shape of the model inside the application code - what the users use
 */
export const teamRosters: any = z.lazy(() => {
  return z.object({
    rosters: z.array(team),
    type: opponentTypeTeam,
  });
});

/**
 * Rosters for a a series or a tournament with team participants
 * @typedef  {TeamRosters} teamRosters - Rosters for a a series or a tournament with team participants - Rosters for a a series or a tournament with team participants
 * @property {Team[]} - A list of teams
 * @property {OpponentTypeTeam}
 */
export type TeamRosters = z.infer<typeof teamRosters>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const teamRostersResponse: any = z.lazy(() => {
  return z
    .object({
      rosters: z.array(teamResponse),
      type: opponentTypeTeam,
    })
    .transform((data) => ({
      rosters: data['rosters'],
      type: data['type'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const teamRostersRequest: any = z.lazy(() => {
  return z.object({ rosters: z.array(teamRequest).nullish(), type: opponentTypeTeam.nullish() }).transform((data) => ({
    rosters: data['rosters'],
    type: data['type'],
  }));
});
