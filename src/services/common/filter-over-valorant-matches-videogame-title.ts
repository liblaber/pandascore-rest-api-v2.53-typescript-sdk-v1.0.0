import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const filterOverValorantMatchesVideogameTitle = z.union([z.number(), z.string()]);

/**
 *
 * @typedef  {FilterOverValorantMatchesVideogameTitle} filterOverValorantMatchesVideogameTitle
 * @property {number}
 * @property {string}
 */
export type FilterOverValorantMatchesVideogameTitle = z.infer<
  typeof filterOverValorantMatchesVideogameTitle
>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverValorantMatchesVideogameTitleResponse = z.union([z.number(), z.string()]);

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverValorantMatchesVideogameTitleRequest = z.union([z.number(), z.string()]);
