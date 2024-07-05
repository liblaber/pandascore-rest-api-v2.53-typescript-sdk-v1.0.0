import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const filterOverPubgShortTournamentsVideogameTitle = z.union([z.number(), z.string()]);

/**
 *
 * @typedef  {FilterOverPubgShortTournamentsVideogameTitle} filterOverPubgShortTournamentsVideogameTitle
 * @property {number}
 * @property {string}
 */
export type FilterOverPubgShortTournamentsVideogameTitle = z.infer<
  typeof filterOverPubgShortTournamentsVideogameTitle
>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverPubgShortTournamentsVideogameTitleResponse = z.union([
  z.number(),
  z.string(),
]);

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverPubgShortTournamentsVideogameTitleRequest = z.union([
  z.number(),
  z.string(),
]);
