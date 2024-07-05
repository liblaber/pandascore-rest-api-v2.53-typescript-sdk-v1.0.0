import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const filterOverLolWildRiftMatchesVideogameTitle = z.union([z.number(), z.string()]);

/**
 *
 * @typedef  {FilterOverLolWildRiftMatchesVideogameTitle} filterOverLolWildRiftMatchesVideogameTitle
 * @property {number}
 * @property {string}
 */
export type FilterOverLolWildRiftMatchesVideogameTitle = z.infer<
  typeof filterOverLolWildRiftMatchesVideogameTitle
>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverLolWildRiftMatchesVideogameTitleResponse = z.union([z.number(), z.string()]);

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverLolWildRiftMatchesVideogameTitleRequest = z.union([z.number(), z.string()]);
