import { z } from 'zod';
import { opponent1_1, opponent1_1Request, opponent1_1Response } from './opponent-1-1';
import { opponent2_1, opponent2_1Request, opponent2_1Response } from './opponent-2-1';

/**
 * The shape of the model inside the application code - what the users use
 */
export const dota2FullGamePlayerOpponent: any = z.lazy(() => {
  return z.union([opponent1_1, opponent2_1]);
});

/**
 *
 * @typedef  {Dota2FullGamePlayerOpponent} dota2FullGamePlayerOpponent
 * @property {Opponent1_1}
 * @property {Opponent2_1}
 */
export type Dota2FullGamePlayerOpponent = z.infer<typeof dota2FullGamePlayerOpponent>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const dota2FullGamePlayerOpponentResponse: any = z.lazy(() => {
  return z.union([opponent1_1Response, opponent2_1Response]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const dota2FullGamePlayerOpponentRequest: any = z.lazy(() => {
  return z.union([opponent1_1Request, opponent2_1Request]);
});
