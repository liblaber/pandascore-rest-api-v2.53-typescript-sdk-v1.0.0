import { z } from 'zod';
import { winner1_1, winner1_1Request, winner1_1Response } from './winner-1-1';
import { winner2_1, winner2_1Request, winner2_1Response } from './winner-2-1';

/**
 * The shape of the model inside the application code - what the users use
 */
export const matchWinner: any = z.lazy(() => {
  return z.union([winner1_1, winner2_1]);
});

/**
 *
 * @typedef  {MatchWinner} matchWinner
 * @property {Winner1_1}
 * @property {Winner2_1}
 */
export type MatchWinner = z.infer<typeof matchWinner>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const matchWinnerResponse: any = z.lazy(() => {
  return z.union([winner1_1Response, winner2_1Response]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const matchWinnerRequest: any = z.lazy(() => {
  return z.union([winner1_1Request, winner2_1Request]);
});
