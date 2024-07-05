import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const filterOverRlSeriesVideogameTitle = z.union([z.number(), z.string()]);

/**
 *
 * @typedef  {FilterOverRlSeriesVideogameTitle} filterOverRlSeriesVideogameTitle
 * @property {number}
 * @property {string}
 */
export type FilterOverRlSeriesVideogameTitle = z.infer<typeof filterOverRlSeriesVideogameTitle>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverRlSeriesVideogameTitleResponse = z.union([z.number(), z.string()]);

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverRlSeriesVideogameTitleRequest = z.union([z.number(), z.string()]);
