import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const serieWinnerId: any = z.lazy(() => {
  return z.union([z.number(), z.number()]);
});

/**
 *
 * @typedef  {SerieWinnerId} serieWinnerId
 * @property {number}
 * @property {number}
 */
export type SerieWinnerId = z.infer<typeof serieWinnerId>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const serieWinnerIdResponse: any = z.lazy(() => {
  return z.union([z.number(), z.number()]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const serieWinnerIdRequest: any = z.lazy(() => {
  return z.union([z.number(), z.number()]);
});
