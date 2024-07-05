import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const filterOverRlMatchesVideogameTitle = z.union([z.number(), z.string()]);

/**
 *
 * @typedef  {FilterOverRlMatchesVideogameTitle} filterOverRlMatchesVideogameTitle
 * @property {number}
 * @property {string}
 */
export type FilterOverRlMatchesVideogameTitle = z.infer<typeof filterOverRlMatchesVideogameTitle>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverRlMatchesVideogameTitleResponse = z.union([z.number(), z.string()]);

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const filterOverRlMatchesVideogameTitleRequest = z.union([z.number(), z.string()]);
