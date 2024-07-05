import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const baseMatchWinnerId = z.union([z.number(), z.number()]);

/**
 *
 * @typedef  {BaseMatchWinnerId} baseMatchWinnerId
 * @property {number}
 * @property {number}
 */
export type BaseMatchWinnerId = z.infer<typeof baseMatchWinnerId>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const baseMatchWinnerIdResponse = z.union([z.number(), z.number()]);

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const baseMatchWinnerIdRequest = z.union([z.number(), z.number()]);
