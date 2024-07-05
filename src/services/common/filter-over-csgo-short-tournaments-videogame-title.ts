import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const filterOverCsgoShortTournamentsVideogameTitle = z.union([z.number(), z.string()]);

/**
 *
 * @typedef  {FilterOverCsgoShortTournamentsVideogameTitle} filterOverCsgoShortTournamentsVideogameTitle
 * @property {number}
 * @property {string}
 */
export type FilterOverCsgoShortTournamentsVideogameTitle = z.infer<
  typeof filterOverCsgoShortTournamentsVideogameTitle
>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverCsgoShortTournamentsVideogameTitleResponse = z.union([
  z.number(),
  z.string(),
]);

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverCsgoShortTournamentsVideogameTitleRequest = z.union([
  z.number(),
  z.string(),
]);
