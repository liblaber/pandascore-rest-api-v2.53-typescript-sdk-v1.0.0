import { z } from 'zod';
import { opponent1_2, opponent1_2Request, opponent1_2Response } from './opponent-1-2';
import { opponent2_2, opponent2_2Request, opponent2_2Response } from './opponent-2-2';

/**
 * The shape of the model inside the application code - what the users use
 */
export const dota2GamePlayerOpponent: any = z.lazy(() => {
  return z.union([opponent1_2, opponent2_2]);
});

/**
 *
 * @typedef  {Dota2GamePlayerOpponent} dota2GamePlayerOpponent
 * @property {Opponent1_2}
 * @property {Opponent2_2}
 */
export type Dota2GamePlayerOpponent = z.infer<typeof dota2GamePlayerOpponent>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const dota2GamePlayerOpponentResponse: any = z.lazy(() => {
  return z.union([opponent1_2Response, opponent2_2Response]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const dota2GamePlayerOpponentRequest: any = z.lazy(() => {
  return z.union([opponent1_2Request, opponent2_2Request]);
});