// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const serieWinnerId = z.lazy(() => {
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
export const serieWinnerIdResponse = z.lazy(() => {
  return z.union([z.number(), z.number()]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const serieWinnerIdRequest = z.lazy(() => {
  return z.union([z.number(), z.number()]);
});
