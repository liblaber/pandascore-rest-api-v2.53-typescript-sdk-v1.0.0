import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const baseSerieWinnerId = z.union([z.number(), z.number()]);

/**
 *
 * @typedef  {BaseSerieWinnerId} baseSerieWinnerId
 * @property {number}
 * @property {number}
 */
export type BaseSerieWinnerId = z.infer<typeof baseSerieWinnerId>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const baseSerieWinnerIdResponse = z.union([z.number(), z.number()]);

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const baseSerieWinnerIdRequest = z.union([z.number(), z.number()]);
