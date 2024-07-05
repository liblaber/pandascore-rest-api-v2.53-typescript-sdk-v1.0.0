import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const filterOverDota2MatchesVideogameVersion = z.union([z.string(), z.any(), z.any()]);

/**
 *
 * @typedef  {FilterOverDota2MatchesVideogameVersion} filterOverDota2MatchesVideogameVersion
 * @property {string}
 * @property {any}
 * @property {any}
 */
export type FilterOverDota2MatchesVideogameVersion = z.infer<
  typeof filterOverDota2MatchesVideogameVersion
>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverDota2MatchesVideogameVersionResponse = z.union([
  z.string(),
  z.any(),
  z.any(),
]);

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverDota2MatchesVideogameVersionRequest = z.union([
  z.string(),
  z.any(),
  z.any(),
]);
