// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import { winner1_4, winner1_4Request, winner1_4Response } from './winner-1-4';
import { winner2_4, winner2_4Request, winner2_4Response } from './winner-2-4';

/**
 * The shape of the model inside the application code - what the users use
 */
export const dota2GameMatchWinner: any = z.lazy(() => {
  return z.union([winner1_4, winner2_4]);
});

/**
 *
 * @typedef  {Dota2GameMatchWinner} dota2GameMatchWinner
 * @property {Winner1_4}
 * @property {Winner2_4}
 */
export type Dota2GameMatchWinner = z.infer<typeof dota2GameMatchWinner>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const dota2GameMatchWinnerResponse: any = z.lazy(() => {
  return z.union([winner1_4Response, winner2_4Response]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const dota2GameMatchWinnerRequest: any = z.lazy(() => {
  return z.union([winner1_4Request, winner2_4Request]);
});
