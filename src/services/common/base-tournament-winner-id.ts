import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const baseTournamentWinnerId: any = z.lazy(() => {
  return z.union([z.number(), z.number()]);
});

/**
 *
 * @typedef  {BaseTournamentWinnerId} baseTournamentWinnerId
 * @property {number}
 * @property {number}
 */
export type BaseTournamentWinnerId = z.infer<typeof baseTournamentWinnerId>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const baseTournamentWinnerIdResponse: any = z.lazy(() => {
  return z.union([z.number(), z.number()]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const baseTournamentWinnerIdRequest: any = z.lazy(() => {
  return z.union([z.number(), z.number()]);
});