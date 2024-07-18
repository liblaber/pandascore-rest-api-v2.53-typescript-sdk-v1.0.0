import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const filterOverStarcraftBroodWarSeriesVideogameTitle: any = z.lazy(() => {
  return z.union([z.number(), z.string()]);
});

/**
 *
 * @typedef  {FilterOverStarcraftBroodWarSeriesVideogameTitle} filterOverStarcraftBroodWarSeriesVideogameTitle
 * @property {number}
 * @property {string}
 */
export type FilterOverStarcraftBroodWarSeriesVideogameTitle = z.infer<
  typeof filterOverStarcraftBroodWarSeriesVideogameTitle
>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverStarcraftBroodWarSeriesVideogameTitleResponse: any = z.lazy(() => {
  return z.union([z.number(), z.string()]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverStarcraftBroodWarSeriesVideogameTitleRequest: any = z.lazy(() => {
  return z.union([z.number(), z.string()]);
});