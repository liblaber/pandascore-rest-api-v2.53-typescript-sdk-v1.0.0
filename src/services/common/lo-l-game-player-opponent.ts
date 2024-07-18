import { z } from 'zod';
import { opponent1_3, opponent1_3Request, opponent1_3Response } from './opponent-1-3';
import { opponent2_3, opponent2_3Request, opponent2_3Response } from './opponent-2-3';

/**
 * The shape of the model inside the application code - what the users use
 */
export const loLGamePlayerOpponent: any = z.lazy(() => {
  return z.union([opponent1_3, opponent2_3]);
});

/**
 *
 * @typedef  {LoLGamePlayerOpponent} loLGamePlayerOpponent
 * @property {Opponent1_3}
 * @property {Opponent2_3}
 */
export type LoLGamePlayerOpponent = z.infer<typeof loLGamePlayerOpponent>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const loLGamePlayerOpponentResponse: any = z.lazy(() => {
  return z.union([opponent1_3Response, opponent2_3Response]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const loLGamePlayerOpponentRequest: any = z.lazy(() => {
  return z.union([opponent1_3Request, opponent2_3Request]);
});