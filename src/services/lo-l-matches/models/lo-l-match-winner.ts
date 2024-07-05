import { z } from 'zod';
import { winner1_5, winner1_5Request, winner1_5Response } from './winner-1-5';
import { winner2_5, winner2_5Request, winner2_5Response } from './winner-2-5';

/**
 * The shape of the model inside the application code - what the users use
 */
export const loLMatchWinner = z.union([winner1_5, winner2_5]);

/**
 *
 * @typedef  {LoLMatchWinner} loLMatchWinner
 * @property {Winner1_5}
 * @property {Winner2_5}
 */
export type LoLMatchWinner = z.infer<typeof loLMatchWinner>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const loLMatchWinnerResponse = z.union([winner1_5Response, winner2_5Response]);

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const loLMatchWinnerRequest = z.union([winner1_5Request, winner2_5Request]);
