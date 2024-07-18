import { z } from 'zod';
import { previousMatchType } from './previous-match-type';

/**
 * The shape of the model inside the application code - what the users use
 */
export const previousMatch: any = z.lazy(() => {
  return z.object({
    matchId: z.number().gte(1),
    type: previousMatchType,
  });
});

/**
 *
 * @typedef  {PreviousMatch} previousMatch
 * @property {number}
 * @property {PreviousMatchType}
 */
export type PreviousMatch = z.infer<typeof previousMatch>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const previousMatchResponse: any = z.lazy(() => {
  return z
    .object({
      match_id: z.number().gte(1),
      type: previousMatchType,
    })
    .transform((data) => ({
      matchId: data['match_id'],
      type: data['type'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const previousMatchRequest: any = z.lazy(() => {
  return z.object({ matchId: z.number().nullish(), type: previousMatchType.nullish() }).transform((data) => ({
    match_id: data['matchId'],
    type: data['type'],
  }));
});
