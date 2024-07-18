import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const matchPlayerResult: any = z.lazy(() => {
  return z.object({
    playerId: z.number().gte(1),
    score: z.number().gte(0),
  });
});

/**
 *
 * @typedef  {MatchPlayerResult} matchPlayerResult
 * @property {number} - ID of the player
 * @property {number}
 */
export type MatchPlayerResult = z.infer<typeof matchPlayerResult>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const matchPlayerResultResponse: any = z.lazy(() => {
  return z
    .object({
      player_id: z.number().gte(1),
      score: z.number().gte(0),
    })
    .transform((data) => ({
      playerId: data['player_id'],
      score: data['score'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const matchPlayerResultRequest: any = z.lazy(() => {
  return z.object({ playerId: z.number().nullish(), score: z.number().nullish() }).transform((data) => ({
    player_id: data['playerId'],
    score: data['score'],
  }));
});