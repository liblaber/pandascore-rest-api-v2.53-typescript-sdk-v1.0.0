import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const filterOverPubgSeriesVideogameTitle = z.union([z.number(), z.string()]);

/**
 *
 * @typedef  {FilterOverPubgSeriesVideogameTitle} filterOverPubgSeriesVideogameTitle
 * @property {number}
 * @property {string}
 */
export type FilterOverPubgSeriesVideogameTitle = z.infer<typeof filterOverPubgSeriesVideogameTitle>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverPubgSeriesVideogameTitleResponse = z.union([z.number(), z.string()]);

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverPubgSeriesVideogameTitleRequest = z.union([z.number(), z.string()]);
