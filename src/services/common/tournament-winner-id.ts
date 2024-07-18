import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const tournamentWinnerId: any = z.lazy(() => {
  return z.union([z.number(), z.number()]);
});

/**
 *
 * @typedef  {TournamentWinnerId} tournamentWinnerId
 * @property {number}
 * @property {number}
 */
export type TournamentWinnerId = z.infer<typeof tournamentWinnerId>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const tournamentWinnerIdResponse: any = z.lazy(() => {
  return z.union([z.number(), z.number()]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const tournamentWinnerIdRequest: any = z.lazy(() => {
  return z.union([z.number(), z.number()]);
});
