import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const filterOverSeriesVideogameTitle: any = z.lazy(() => {
  return z.union([z.number(), z.string()]);
});

/**
 *
 * @typedef  {FilterOverSeriesVideogameTitle} filterOverSeriesVideogameTitle
 * @property {number}
 * @property {string}
 */
export type FilterOverSeriesVideogameTitle = z.infer<typeof filterOverSeriesVideogameTitle>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverSeriesVideogameTitleResponse: any = z.lazy(() => {
  return z.union([z.number(), z.string()]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverSeriesVideogameTitleRequest: any = z.lazy(() => {
  return z.union([z.number(), z.string()]);
});