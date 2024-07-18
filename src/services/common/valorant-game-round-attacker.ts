import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const valorantGameRoundAttacker: any = z.lazy(() => {
  return z.object({
    score: z.number().gte(0),
    teamId: z.number().gte(1),
  });
});

/**
 *
 * @typedef  {ValorantGameRoundAttacker} valorantGameRoundAttacker
 * @property {number} - Attackers score at the beginning of the round
 * @property {number} - ID of the attackers team
 */
export type ValorantGameRoundAttacker = z.infer<typeof valorantGameRoundAttacker>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const valorantGameRoundAttackerResponse: any = z.lazy(() => {
  return z
    .object({
      score: z.number().gte(0),
      team_id: z.number().gte(1),
    })
    .transform((data) => ({
      score: data['score'],
      teamId: data['team_id'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const valorantGameRoundAttackerRequest: any = z.lazy(() => {
  return z.object({ score: z.number().nullish(), teamId: z.number().nullish() }).transform((data) => ({
    score: data['score'],
    team_id: data['teamId'],
  }));
});
