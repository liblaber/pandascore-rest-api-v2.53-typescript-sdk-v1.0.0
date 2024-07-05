import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const gamelessFullGameMatchWinnerId = z.union([z.number(), z.number()]);

/**
 *
 * @typedef  {GamelessFullGameMatchWinnerId} gamelessFullGameMatchWinnerId
 * @property {number}
 * @property {number}
 */
export type GamelessFullGameMatchWinnerId = z.infer<typeof gamelessFullGameMatchWinnerId>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const gamelessFullGameMatchWinnerIdResponse = z.union([z.number(), z.number()]);

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const gamelessFullGameMatchWinnerIdRequest = z.union([z.number(), z.number()]);
