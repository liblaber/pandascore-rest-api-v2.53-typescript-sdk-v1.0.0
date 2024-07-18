import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const filterOverLolWildRiftSeriesVideogameTitle: any = z.lazy(() => {
  return z.union([z.number(), z.string()]);
});

/**
 *
 * @typedef  {FilterOverLolWildRiftSeriesVideogameTitle} filterOverLolWildRiftSeriesVideogameTitle
 * @property {number}
 * @property {string}
 */
export type FilterOverLolWildRiftSeriesVideogameTitle = z.infer<typeof filterOverLolWildRiftSeriesVideogameTitle>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverLolWildRiftSeriesVideogameTitleResponse: any = z.lazy(() => {
  return z.union([z.number(), z.string()]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverLolWildRiftSeriesVideogameTitleRequest: any = z.lazy(() => {
  return z.union([z.number(), z.string()]);
});
