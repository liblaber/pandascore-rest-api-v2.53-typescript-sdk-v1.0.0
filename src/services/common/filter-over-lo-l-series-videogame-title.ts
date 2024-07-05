import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const filterOverLoLSeriesVideogameTitle = z.union([z.number(), z.string()]);

/**
 *
 * @typedef  {FilterOverLoLSeriesVideogameTitle} filterOverLoLSeriesVideogameTitle
 * @property {number}
 * @property {string}
 */
export type FilterOverLoLSeriesVideogameTitle = z.infer<typeof filterOverLoLSeriesVideogameTitle>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverLoLSeriesVideogameTitleResponse = z.union([z.number(), z.string()]);

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverLoLSeriesVideogameTitleRequest = z.union([z.number(), z.string()]);
