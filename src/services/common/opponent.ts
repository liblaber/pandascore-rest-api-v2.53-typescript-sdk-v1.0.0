import { z } from 'zod';
import { baseOpponent, baseOpponentRequest, baseOpponentResponse } from './base-opponent';
import { opponentType } from './opponent-type';

/**
 * The shape of the model inside the application code - what the users use
 */
export const opponent = z.object({
  opponent1: baseOpponent,
  type_: opponentType,
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
export const opponentResponse = z
  .object({
    opponent: baseOpponentResponse,
    type: opponentType,
  })
  .transform((data) => ({
    opponent1: data['opponent'],
    type_: data['type'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const opponentRequest = z
  .object({ opponent1: baseOpponentRequest.nullish(), type_: opponentType.nullish() })
  .transform((data) => ({
    opponent: data['opponent1'],
    type: data['type_'],
  }));
