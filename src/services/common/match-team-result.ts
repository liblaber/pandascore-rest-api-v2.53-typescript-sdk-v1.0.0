import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const matchTeamResult = z.object({
  score: z.number().gte(0),
  teamId: z.number().gte(1),
});

/**
 *
 * @typedef  {MatchTeamResult} matchTeamResult
 * @property {number}
 * @property {number}
 */
export type MatchTeamResult = z.infer<typeof matchTeamResult>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const matchTeamResultResponse = z
  .object({
    score: z.number().gte(0),
    team_id: z.number().gte(1),
  })
  .transform((data) => ({
    score: data['score'],
    teamId: data['team_id'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const matchTeamResultRequest = z
  .object({ score: z.number().nullish(), teamId: z.number().nullish() })
  .transform((data) => ({
    score: data['score'],
    team_id: data['teamId'],
  }));
