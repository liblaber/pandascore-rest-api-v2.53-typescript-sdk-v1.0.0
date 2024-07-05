import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const filterOverStarcraft2ShortTournamentsVideogameTitle = z.union([z.number(), z.string()]);

/**
 *
 * @typedef  {FilterOverStarcraft2ShortTournamentsVideogameTitle} filterOverStarcraft2ShortTournamentsVideogameTitle
 * @property {number}
 * @property {string}
 */
export type FilterOverStarcraft2ShortTournamentsVideogameTitle = z.infer<
  typeof filterOverStarcraft2ShortTournamentsVideogameTitle
>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverStarcraft2ShortTournamentsVideogameTitleResponse = z.union([
  z.number(),
  z.string(),
]);

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverStarcraft2ShortTournamentsVideogameTitleRequest = z.union([
  z.number(),
  z.string(),
]);
