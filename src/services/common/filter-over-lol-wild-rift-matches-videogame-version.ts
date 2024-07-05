import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const filterOverLolWildRiftMatchesVideogameVersion = z.union([z.string(), z.any(), z.any()]);

/**
 *
 * @typedef  {FilterOverLolWildRiftMatchesVideogameVersion} filterOverLolWildRiftMatchesVideogameVersion
 * @property {string}
 * @property {any}
 * @property {any}
 */
export type FilterOverLolWildRiftMatchesVideogameVersion = z.infer<
  typeof filterOverLolWildRiftMatchesVideogameVersion
>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverLolWildRiftMatchesVideogameVersionResponse = z.union([
  z.string(),
  z.any(),
  z.any(),
]);

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverLolWildRiftMatchesVideogameVersionRequest = z.union([
  z.string(),
  z.any(),
  z.any(),
]);
