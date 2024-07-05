import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const bracketWinnerId = z.union([z.number(), z.number()]);

/**
 *
 * @typedef  {BracketWinnerId} bracketWinnerId
 * @property {number}
 * @property {number}
 */
export type BracketWinnerId = z.infer<typeof bracketWinnerId>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const bracketWinnerIdResponse = z.union([z.number(), z.number()]);

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const bracketWinnerIdRequest = z.union([z.number(), z.number()]);
