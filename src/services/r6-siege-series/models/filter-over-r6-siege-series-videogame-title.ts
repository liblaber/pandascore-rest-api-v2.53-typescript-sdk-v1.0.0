import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const filterOverR6SiegeSeriesVideogameTitle: any = z.lazy(() => {
  return z.union([z.number(), z.string()]);
});

/**
 *
 * @typedef  {FilterOverR6SiegeSeriesVideogameTitle} filterOverR6SiegeSeriesVideogameTitle
 * @property {number}
 * @property {string}
 */
export type FilterOverR6SiegeSeriesVideogameTitle = z.infer<typeof filterOverR6SiegeSeriesVideogameTitle>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverR6SiegeSeriesVideogameTitleResponse: any = z.lazy(() => {
  return z.union([z.number(), z.string()]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverR6SiegeSeriesVideogameTitleRequest: any = z.lazy(() => {
  return z.union([z.number(), z.string()]);
});
