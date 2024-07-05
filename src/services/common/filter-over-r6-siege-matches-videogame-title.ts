import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const filterOverR6SiegeMatchesVideogameTitle = z.union([z.number(), z.string()]);

/**
 *
 * @typedef  {FilterOverR6SiegeMatchesVideogameTitle} filterOverR6SiegeMatchesVideogameTitle
 * @property {number}
 * @property {string}
 */
export type FilterOverR6SiegeMatchesVideogameTitle = z.infer<
  typeof filterOverR6SiegeMatchesVideogameTitle
>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverR6SiegeMatchesVideogameTitleResponse = z.union([z.number(), z.string()]);

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverR6SiegeMatchesVideogameTitleRequest = z.union([z.number(), z.string()]);
