// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const csgoFullRoundWinner = z.lazy(() => {
  return z.object({
    side: z.string(),
    teamId: z.number().gte(1),
    teamName: z.string(),
  });
});

/**
 *
 * @typedef  {CsgoFullRoundWinner} csgoFullRoundWinner
 * @property {CsgoRoundSide}
 * @property {number}
 * @property {string} - The name of the team.
 */
export type CsgoFullRoundWinner = z.infer<typeof csgoFullRoundWinner>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const csgoFullRoundWinnerResponse = z.lazy(() => {
  return z
    .object({
      side: z.string(),
      team_id: z.number().gte(1),
      team_name: z.string(),
    })
    .transform((data) => ({
      side: data['side'],
      teamId: data['team_id'],
      teamName: data['team_name'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const csgoFullRoundWinnerRequest = z.lazy(() => {
  return z
    .object({ side: z.string().nullish(), teamId: z.number().nullish(), teamName: z.string().nullish() })
    .transform((data) => ({
      side: data['side'],
      team_id: data['teamId'],
      team_name: data['teamName'],
    }));
});
