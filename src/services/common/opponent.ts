import { z } from 'zod';
import { baseOpponent, baseOpponentRequest, baseOpponentResponse } from './base-opponent';
import { opponentType } from './opponent-type';

/**
 * The shape of the model inside the application code - what the users use
 */
export const opponent: any = z.lazy(() => {
  return z.object({
    opponent: baseOpponent,
    type: opponentType,
  });
});

/**
 *
 * @typedef  {Opponent} opponent
 * @property {BaseOpponent}
 * @property {OpponentType}
 */
export type Opponent = z.infer<typeof opponent>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const opponentResponse: any = z.lazy(() => {
  return z
    .object({
      opponent: baseOpponentResponse,
      type: opponentType,
    })
    .transform((data) => ({
      opponent: data['opponent'],
      type: data['type'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const opponentRequest: any = z.lazy(() => {
  return z.object({ opponent: baseOpponentRequest.nullish(), type: opponentType.nullish() }).transform((data) => ({
    opponent: data['opponent'],
    type: data['type'],
  }));
});
