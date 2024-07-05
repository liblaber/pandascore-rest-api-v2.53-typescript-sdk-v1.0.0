import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const fullGameMatchWinnerId = z.union([z.number(), z.number()]);

/**
 *
 * @typedef  {FullGameMatchWinnerId} fullGameMatchWinnerId
 * @property {number}
 * @property {number}
 */
export type FullGameMatchWinnerId = z.infer<typeof fullGameMatchWinnerId>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const fullGameMatchWinnerIdResponse = z.union([z.number(), z.number()]);

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const fullGameMatchWinnerIdRequest = z.union([z.number(), z.number()]);
