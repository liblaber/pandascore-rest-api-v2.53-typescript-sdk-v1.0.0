import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const filterOverStarcraftBroodWarShortTournamentsVideogameTitle = z.union([
  z.number(),
  z.string(),
]);

/**
 *
 * @typedef  {FilterOverStarcraftBroodWarShortTournamentsVideogameTitle} filterOverStarcraftBroodWarShortTournamentsVideogameTitle
 * @property {number}
 * @property {string}
 */
export type FilterOverStarcraftBroodWarShortTournamentsVideogameTitle = z.infer<
  typeof filterOverStarcraftBroodWarShortTournamentsVideogameTitle
>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverStarcraftBroodWarShortTournamentsVideogameTitleResponse = z.union([
  z.number(),
  z.string(),
]);

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverStarcraftBroodWarShortTournamentsVideogameTitleRequest = z.union([
  z.number(),
  z.string(),
]);
