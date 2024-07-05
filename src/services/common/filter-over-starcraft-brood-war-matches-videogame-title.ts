import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const filterOverStarcraftBroodWarMatchesVideogameTitle = z.union([z.number(), z.string()]);

/**
 *
 * @typedef  {FilterOverStarcraftBroodWarMatchesVideogameTitle} filterOverStarcraftBroodWarMatchesVideogameTitle
 * @property {number}
 * @property {string}
 */
export type FilterOverStarcraftBroodWarMatchesVideogameTitle = z.infer<
  typeof filterOverStarcraftBroodWarMatchesVideogameTitle
>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverStarcraftBroodWarMatchesVideogameTitleResponse = z.union([
  z.number(),
  z.string(),
]);

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverStarcraftBroodWarMatchesVideogameTitleRequest = z.union([
  z.number(),
  z.string(),
]);
