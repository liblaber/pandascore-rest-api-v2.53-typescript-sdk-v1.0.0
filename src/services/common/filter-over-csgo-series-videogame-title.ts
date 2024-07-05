import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const filterOverCsgoSeriesVideogameTitle = z.union([z.number(), z.string()]);

/**
 *
 * @typedef  {FilterOverCsgoSeriesVideogameTitle} filterOverCsgoSeriesVideogameTitle
 * @property {number}
 * @property {string}
 */
export type FilterOverCsgoSeriesVideogameTitle = z.infer<typeof filterOverCsgoSeriesVideogameTitle>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverCsgoSeriesVideogameTitleResponse = z.union([z.number(), z.string()]);

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverCsgoSeriesVideogameTitleRequest = z.union([z.number(), z.string()]);
