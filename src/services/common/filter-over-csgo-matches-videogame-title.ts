import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const filterOverCsgoMatchesVideogameTitle = z.union([z.number(), z.string()]);

/**
 *
 * @typedef  {FilterOverCsgoMatchesVideogameTitle} filterOverCsgoMatchesVideogameTitle
 * @property {number}
 * @property {string}
 */
export type FilterOverCsgoMatchesVideogameTitle = z.infer<
  typeof filterOverCsgoMatchesVideogameTitle
>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverCsgoMatchesVideogameTitleResponse = z.union([z.number(), z.string()]);

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverCsgoMatchesVideogameTitleRequest = z.union([z.number(), z.string()]);
