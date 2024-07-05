import { z } from 'zod';
import { winner1_3, winner1_3Request, winner1_3Response } from './winner-1-3';
import { winner2_3, winner2_3Request, winner2_3Response } from './winner-2-3';

/**
 * The shape of the model inside the application code - what the users use
 */
export const csgoMatchWinner = z.union([winner1_3, winner2_3]);

/**
 *
 * @typedef  {CsgoMatchWinner} csgoMatchWinner
 * @property {Winner1_3}
 * @property {Winner2_3}
 */
export type CsgoMatchWinner = z.infer<typeof csgoMatchWinner>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const csgoMatchWinnerResponse = z.union([winner1_3Response, winner2_3Response]);

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const csgoMatchWinnerRequest = z.union([winner1_3Request, winner2_3Request]);
