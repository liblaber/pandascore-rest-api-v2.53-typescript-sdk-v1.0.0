import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const filterOverR6SiegeShortTournamentsVideogameTitle = z.union([z.number(), z.string()]);

/**
 *
 * @typedef  {FilterOverR6SiegeShortTournamentsVideogameTitle} filterOverR6SiegeShortTournamentsVideogameTitle
 * @property {number}
 * @property {string}
 */
export type FilterOverR6SiegeShortTournamentsVideogameTitle = z.infer<
  typeof filterOverR6SiegeShortTournamentsVideogameTitle
>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverR6SiegeShortTournamentsVideogameTitleResponse = z.union([
  z.number(),
  z.string(),
]);

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverR6SiegeShortTournamentsVideogameTitleRequest = z.union([
  z.number(),
  z.string(),
]);
