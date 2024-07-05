import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const filterOverStarcraft2MatchesVideogameVersion = z.union([z.string(), z.any(), z.any()]);

/**
 *
 * @typedef  {FilterOverStarcraft2MatchesVideogameVersion} filterOverStarcraft2MatchesVideogameVersion
 * @property {string}
 * @property {any}
 * @property {any}
 */
export type FilterOverStarcraft2MatchesVideogameVersion = z.infer<
  typeof filterOverStarcraft2MatchesVideogameVersion
>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverStarcraft2MatchesVideogameVersionResponse = z.union([
  z.string(),
  z.any(),
  z.any(),
]);

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverStarcraft2MatchesVideogameVersionRequest = z.union([
  z.string(),
  z.any(),
  z.any(),
]);
