import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const dota2GameMatchWinnerId: any = z.lazy(() => {
  return z.union([z.number(), z.number()]);
});

/**
 *
 * @typedef  {Dota2GameMatchWinnerId} dota2GameMatchWinnerId
 * @property {number}
 * @property {number}
 */
export type Dota2GameMatchWinnerId = z.infer<typeof dota2GameMatchWinnerId>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const dota2GameMatchWinnerIdResponse: any = z.lazy(() => {
  return z.union([z.number(), z.number()]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const dota2GameMatchWinnerIdRequest: any = z.lazy(() => {
  return z.union([z.number(), z.number()]);
});
