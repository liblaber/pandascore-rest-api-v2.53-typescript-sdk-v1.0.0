import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const filterOverCodmwMatchesVideogameTitle = z.union([z.number(), z.string()]);

/**
 *
 * @typedef  {FilterOverCodmwMatchesVideogameTitle} filterOverCodmwMatchesVideogameTitle
 * @property {number}
 * @property {string}
 */
export type FilterOverCodmwMatchesVideogameTitle = z.infer<
  typeof filterOverCodmwMatchesVideogameTitle
>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverCodmwMatchesVideogameTitleResponse = z.union([z.number(), z.string()]);

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverCodmwMatchesVideogameTitleRequest = z.union([z.number(), z.string()]);
