import { z } from 'zod';
import { baseMatch, baseMatchRequest, baseMatchResponse } from '../../common/base-match';
import { baseTeam, baseTeamRequest, baseTeamResponse } from '../../common/base-team';

/**
 * The shape of the model inside the application code - what the users use
 */
export const bracketStanding: any = z.lazy(() => {
  return z.object({
    lastMatch: baseMatch,
    rank: z.number().gte(0),
    team: baseTeam,
  });
});

/**
 *
 * @typedef  {BracketStanding} bracketStanding
 * @property {BaseMatch}
 * @property {number}
 * @property {BaseTeam}
 */
export type BracketStanding = z.infer<typeof bracketStanding>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const bracketStandingResponse: any = z.lazy(() => {
  return z
    .object({
      last_match: baseMatchResponse,
      rank: z.number().gte(0),
      team: baseTeamResponse,
    })
    .transform((data) => ({
      lastMatch: data['last_match'],
      rank: data['rank'],
      team: data['team'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const bracketStandingRequest: any = z.lazy(() => {
  return z
    .object({ lastMatch: baseMatchRequest.nullish(), rank: z.number().nullish(), team: baseTeamRequest.nullish() })
    .transform((data) => ({
      last_match: data['lastMatch'],
      rank: data['rank'],
      team: data['team'],
    }));
});
