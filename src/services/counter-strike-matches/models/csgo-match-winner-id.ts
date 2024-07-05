import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const csgoMatchWinnerId = z.union([z.number(), z.number()]);

/**
 *
 * @typedef  {CsgoMatchWinnerId} csgoMatchWinnerId
 * @property {number}
 * @property {number}
 */
export type CsgoMatchWinnerId = z.infer<typeof csgoMatchWinnerId>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const csgoMatchWinnerIdResponse = z.union([z.number(), z.number()]);

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const csgoMatchWinnerIdRequest = z.union([z.number(), z.number()]);
