import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const filterOverKogSeriesVideogameTitle = z.union([z.number(), z.string()]);

/**
 *
 * @typedef  {FilterOverKogSeriesVideogameTitle} filterOverKogSeriesVideogameTitle
 * @property {number}
 * @property {string}
 */
export type FilterOverKogSeriesVideogameTitle = z.infer<typeof filterOverKogSeriesVideogameTitle>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverKogSeriesVideogameTitleResponse = z.union([z.number(), z.string()]);

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverKogSeriesVideogameTitleRequest = z.union([z.number(), z.string()]);
