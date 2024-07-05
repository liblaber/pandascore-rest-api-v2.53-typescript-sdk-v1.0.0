import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const filterOverStarcraft2SeriesVideogameTitle = z.union([z.number(), z.string()]);

/**
 *
 * @typedef  {FilterOverStarcraft2SeriesVideogameTitle} filterOverStarcraft2SeriesVideogameTitle
 * @property {number}
 * @property {string}
 */
export type FilterOverStarcraft2SeriesVideogameTitle = z.infer<
  typeof filterOverStarcraft2SeriesVideogameTitle
>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverStarcraft2SeriesVideogameTitleResponse = z.union([z.number(), z.string()]);

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverStarcraft2SeriesVideogameTitleRequest = z.union([z.number(), z.string()]);
