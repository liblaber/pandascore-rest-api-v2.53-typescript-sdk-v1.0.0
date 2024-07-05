import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const filterOverValorantShortTournamentsVideogameTitle = z.union([z.number(), z.string()]);

/**
 *
 * @typedef  {FilterOverValorantShortTournamentsVideogameTitle} filterOverValorantShortTournamentsVideogameTitle
 * @property {number}
 * @property {string}
 */
export type FilterOverValorantShortTournamentsVideogameTitle = z.infer<
  typeof filterOverValorantShortTournamentsVideogameTitle
>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverValorantShortTournamentsVideogameTitleResponse = z.union([
  z.number(),
  z.string(),
]);

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverValorantShortTournamentsVideogameTitleRequest = z.union([
  z.number(),
  z.string(),
]);
