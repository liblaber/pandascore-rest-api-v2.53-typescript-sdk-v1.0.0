import { z } from 'zod';
import { opponentTypeTeam } from '../../common/opponent-type-team';
import { team, teamRequest, teamResponse } from '../../common/team';

/**
 * The shape of the model inside the application code - what the users use
 */
export const matchTeamOpponentsObject: any = z.lazy(() => {
  return z.object({
    opponentType: opponentTypeTeam,
    opponents: z.array(team),
  });
});

/**
 *
 * @typedef  {MatchTeamOpponentsObject} matchTeamOpponentsObject
 * @property {OpponentTypeTeam}
 * @property {Team[]} - A list of teams
 */
export type MatchTeamOpponentsObject = z.infer<typeof matchTeamOpponentsObject>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const matchTeamOpponentsObjectResponse: any = z.lazy(() => {
  return z
    .object({
      opponent_type: opponentTypeTeam,
      opponents: z.array(teamResponse),
    })
    .transform((data) => ({
      opponentType: data['opponent_type'],
      opponents: data['opponents'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const matchTeamOpponentsObjectRequest: any = z.lazy(() => {
  return z
    .object({ opponentType: opponentTypeTeam.nullish(), opponents: z.array(teamRequest).nullish() })
    .transform((data) => ({
      opponent_type: data['opponentType'],
      opponents: data['opponents'],
    }));
});
