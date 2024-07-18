import { z } from 'zod';
import { winner1_6, winner1_6Request, winner1_6Response } from './winner-1-6';
import { winner2_6, winner2_6Request, winner2_6Response } from './winner-2-6';

/**
 * The shape of the model inside the application code - what the users use
 */
export const gamelessFullGameMatchWinner: any = z.lazy(() => {
  return z.union([winner1_6, winner2_6]);
});

/**
 *
 * @typedef  {GamelessFullGameMatchWinner} gamelessFullGameMatchWinner
 * @property {Winner1_6}
 * @property {Winner2_6}
 */
export type GamelessFullGameMatchWinner = z.infer<typeof gamelessFullGameMatchWinner>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const gamelessFullGameMatchWinnerResponse: any = z.lazy(() => {
  return z.union([winner1_6Response, winner2_6Response]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const gamelessFullGameMatchWinnerRequest: any = z.lazy(() => {
  return z.union([winner1_6Request, winner2_6Request]);
});
