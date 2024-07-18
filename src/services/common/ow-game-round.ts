import { z } from 'zod';
import { owGameRoundTeam, owGameRoundTeamRequest, owGameRoundTeamResponse } from './ow-game-round-team';

/**
 * The shape of the model inside the application code - what the users use
 */
export const owGameRound: any = z.lazy(() => {
  return z.object({
    round: z.number().gte(1),
    teams: z.array(owGameRoundTeam),
  });
});

/**
 *
 * @typedef  {OwGameRound} owGameRound
 * @property {number}
 * @property {OwGameRoundTeam[]}
 */
export type OwGameRound = z.infer<typeof owGameRound>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const owGameRoundResponse: any = z.lazy(() => {
  return z
    .object({
      round: z.number().gte(1),
      teams: z.array(owGameRoundTeamResponse),
    })
    .transform((data) => ({
      round: data['round'],
      teams: data['teams'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const owGameRoundRequest: any = z.lazy(() => {
  return z
    .object({ round: z.number().nullish(), teams: z.array(owGameRoundTeamRequest).nullish() })
    .transform((data) => ({
      round: data['round'],
      teams: data['teams'],
    }));
});
