// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const shortTournamentWinnerId = z.lazy(() => {
  return z.union([z.number(), z.number()]);
});

/**
 *
 * @typedef  {ShortTournamentWinnerId} shortTournamentWinnerId
 * @property {number}
 * @property {number}
 */
export type ShortTournamentWinnerId = z.infer<typeof shortTournamentWinnerId>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const shortTournamentWinnerIdResponse = z.lazy(() => {
  return z.union([z.number(), z.number()]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const shortTournamentWinnerIdRequest = z.lazy(() => {
  return z.union([z.number(), z.number()]);
});
