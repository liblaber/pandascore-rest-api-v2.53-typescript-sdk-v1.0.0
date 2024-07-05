import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const filterOverCodmwSeriesVideogameTitle = z.union([z.number(), z.string()]);

/**
 *
 * @typedef  {FilterOverCodmwSeriesVideogameTitle} filterOverCodmwSeriesVideogameTitle
 * @property {number}
 * @property {string}
 */
export type FilterOverCodmwSeriesVideogameTitle = z.infer<
  typeof filterOverCodmwSeriesVideogameTitle
>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverCodmwSeriesVideogameTitleResponse = z.union([z.number(), z.string()]);

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverCodmwSeriesVideogameTitleRequest = z.union([z.number(), z.string()]);
