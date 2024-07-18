import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const filterOverStarcraft2MatchesVideogameTitle: any = z.lazy(() => {
  return z.union([z.number(), z.string()]);
});

/**
 *
 * @typedef  {FilterOverStarcraft2MatchesVideogameTitle} filterOverStarcraft2MatchesVideogameTitle
 * @property {number}
 * @property {string}
 */
export type FilterOverStarcraft2MatchesVideogameTitle = z.infer<typeof filterOverStarcraft2MatchesVideogameTitle>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverStarcraft2MatchesVideogameTitleResponse: any = z.lazy(() => {
  return z.union([z.number(), z.string()]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverStarcraft2MatchesVideogameTitleRequest: any = z.lazy(() => {
  return z.union([z.number(), z.string()]);
});
