import { z } from 'zod';
import { winner1_2, winner1_2Request, winner1_2Response } from './winner-1-2';
import { winner2_2, winner2_2Request, winner2_2Response } from './winner-2-2';

/**
 * The shape of the model inside the application code - what the users use
 */
export const fullGameMatchWinner = z.union([winner1_2, winner2_2]);

/**
 *
 * @typedef  {FullGameMatchWinner} fullGameMatchWinner
 * @property {Winner1_2}
 * @property {Winner2_2}
 */
export type FullGameMatchWinner = z.infer<typeof fullGameMatchWinner>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const fullGameMatchWinnerResponse = z.union([winner1_2Response, winner2_2Response]);

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const fullGameMatchWinnerRequest = z.union([winner1_2Request, winner2_2Request]);
